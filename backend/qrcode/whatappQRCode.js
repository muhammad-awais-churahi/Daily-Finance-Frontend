const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
const userRecord = require("../models/userRecord");
const moment = require("moment");
const qrcode = require("qrcode-terminal");
const fs = require("fs");
const path = require("path");
const puppeteer = require("puppeteer");
// Patch puppeteer-core used by whatsapp-web.js
const wwebVersion = require("whatsapp-web.js/package.json").version;

exports.sendingViaWhatsApp = function () {
  const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
      executablePath: puppeteer.executablePath(),
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    },
  });

  client.on("qr", (qr) => {
    qrcode.generate(qr, { small: true });
  });

  client.on("ready", async () => {
    console.log("✅ WhatsApp is ready!");

    try {
      const allUsers = await userRecord.find();
      const currentMonth = moment().format("MMMM D, YYYY");

      for (const user of allUsers) {
        console.log("phone Numbers:", user.phoneNumber);
        const chatId = user.phoneNumber + "@c.us";
        console.log("📤 Sending to:", chatId);
        let hasNewBills = false;

        // Loop through each electric bill in the user's subscription array
        for (const item of user.subscription) {
          const { electricCompany, elecRefNumber } = item;

          // Make sure both values exist
          if (!electricCompany || !elecRefNumber) continue;

          const elecFileName = `${elecRefNumber}-${electricCompany}.pdf`;
          const elecFilePath = path.join(
            __dirname,
            "..",
            "bills",
            elecFileName
          );

          const electricPdfLink = `/bills/${elecFileName}`;
          // ✅ Check if already sent this month
          const alreadySent = user.bills.some(
            (b) =>
              b.electricPdfLink === electricPdfLink &&
              b.month === currentMonth &&
              b.status === "send"
          );
          if (alreadySent) {
            console.log(`⏭️ Skipped already sent bill: ${elecFileName}`);
            continue;
          }
          //send if file exists
          if (fs.existsSync(elecFilePath)) {
            const media = MessageMedia.fromFilePath(elecFilePath);
            await client.sendMessage(chatId, "📩 Your Electric Bill is ready.");

            await client.sendMessage(chatId, media);
            console.log(`✅ Sent bill [${elecFileName}] to ${chatId}`);
            //saving bills  to db
            user.bills.push({
              electricPdfLink,
              month: currentMonth,
              downloadedAt: moment().format("MMM D, YYYY, HH:mm:ss"),
              status: "send",
            });
            await user.save();
            console.log("Saved to db:", "true");
            // hasNewBills = true;
          } else {
            console.log(`❌ Bill not found for: ${elecFileName}`);
          }
        }
      }
    } catch (err) {
      console.error("❌ WhatsApp send error:", err.message);
    }
  });

  client.on("auth_failure", (msg) => {
    console.error("❌ Authentication failed:", msg);
  });

  client.on("disconnect", (reason) => {
    console.log("❌ WhatsApp disconnected:", reason);
  });

  client.initialize();
  // module.exports = client;
};
