const puppeteer = require("puppeteer");
const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");

const fs = require("fs");
const path = require("path");
const userRecord = require("../models/userRecord");
// const client = require("../qrcode/whatappQRCode");
// const { sendingViaWhatsApp } = require("../qrcode/whatappQRCode");
const { saveBillToDB } = require("./userController");

exports.monthlyBillLoad = async () => {
  //electric bills
  const billFolder = path.join(__dirname, "../bills");
  if (!fs.existsSync(billFolder)) {
    fs.mkdirSync(billFolder);
    console.log("📁 'bills' folder created.");
  }
  //wasa bills folder
  const wasaFolder = path.join(__dirname, "../WasaBills");
  if (!fs.existsSync(wasaFolder)) {
    fs.mkdirSync(wasaFolder);
    console.log("📁 'WasaBills' folder created.");
  }

  let subscriptions = [];
  try {
    subscriptions = await userRecord.find();

    console.log("📥 Subscriptions fetched:", subscriptions.length);
    console.log("📥 total Data:", subscriptions);
  } catch (err) {
    console.error("❌ MongoDB find() error:", err.message);
    return;
  }

  const browser = await puppeteer.launch({
    // executablePath:
    // "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
    headless: "new",
    // timeout: 120000,
    protocolTimeout: 120000,
  });

  for (const sub of subscriptions) {
    const chatId = sub.phoneNumber + "@c.us";
    for (const item of sub.subscription) {
      const {
        electricCompany,
        wasaCompany,
        ptclCompany,
        elecRefNumber,
        wasaRefNumber,
        ptclConsumerNumber,
        ptclAccountId,
      } = item;
      try {
        // const electricCompany = company.toLowerCase();
        const electricPage = await browser.newPage();
        const ptclPage = await browser.newPage();

        console.log("🔍 Processing:", electricCompany, elecRefNumber);

        //IESCO company
        if (electricCompany === "IESCO") {
          await electricPage.goto("https://bill.pitc.com.pk/iescobill", {
            waitUntil: "networkidle2",
            timeout: 100000,
          });

          await electricPage.type('input[name="searchTextBox"]', elecRefNumber);
          await electricPage.click('input[type="submit"]');
          await electricPage.waitForSelector("body", { timeout: 100000 });
          // await electricPage.waitForSelector("body", { timeout: 100000 });

          await new Promise((resolve) => setTimeout(resolve, 3000));
          const fileName = `${elecRefNumber}-IESCO.pdf`;
          const filePath = path.join(__dirname, `../bills/${fileName}`);
          // pdf saving
          await electricPage.pdf({ path: filePath, format: "A4" });
          console.log(`✅ Downloaded IESCO bill for: ${elecRefNumber}`);
        }

        //GEPCO company

        if (electricCompany === "GEPCO") {
          //electric bill

          await electricPage.goto("https://bill.pitc.com.pk/gepcobill", {
            waitUntil: "networkidle2",
            timeout: 100000,
          });

          await electricPage.type('input[name="searchTextBox"]', elecRefNumber);
          await electricPage.click('input[type="submit"]');
          await electricPage.waitForSelector("html", { timeout: 100000 });

          await new Promise((resolve) => setTimeout(resolve, 3000));
          const fileName = `${elecRefNumber}-GEPCO.pdf`;
          const filePath = path.join(__dirname, `../bills/${fileName}`);
          // pdf saving
          await electricPage.pdf({ path: filePath, format: "A4" });
          console.log(`✅ Downloaded GEPCO bill for: ${elecRefNumber}`);
        }

        //FESCO company

        if (electricCompany === "FESCO") {
          //electric bill

          await electricPage.goto("https://bill.pitc.com.pk/fescobill", {
            waitUntil: "networkidle2",
            timeout: 100000,
          });

          await electricPage.type('input[name="searchTextBox"]', elecRefNumber);
          await electricPage.click('input[type="submit"]');
          await electricPage.waitForSelector("body", { timeout: 100000 });

          await new Promise((resolve) => setTimeout(resolve, 3000));
          const fileName = `${elecRefNumber}-FESCO.pdf`;
          const filePath = path.join(__dirname, `../bills/${fileName}`);
          // pdf saving
          await electricPage.pdf({ path: filePath, format: "A4" });
          console.log(`✅ Downloaded FESCO bill for: ${elecRefNumber}`);
        }

        //MEPCO company

        if (electricCompany === "MEPCO") {
          //electric bill

          await electricPage.goto("https://bill.pitc.com.pk/mepcobill", {
            waitUntil: "networkidle2",
            timeout: 100000,
          });

          await electricPage.type('input[name="searchTextBox"]', elecRefNumber);
          await electricPage.click('input[type="submit"]');
          await electricPage.waitForSelector("body", { timeout: 100000 });

          await new Promise((resolve) => setTimeout(resolve, 3000));
          const fileName = `${elecRefNumber}-MEPCO.pdf`;
          const filePath = path.join(__dirname, `../bills/${fileName}`);
          // pdf saving
          await electricPage.pdf({ path: filePath, format: "A4" });
          console.log(`✅ Downloaded MEPCO bill for: ${elecRefNumber}`);
        }

        //LESCO company

        if (electricCompany === "LESCO") {
          //electric bill

          await electricPage.goto("https://bill.pitc.com.pk/lescobill", {
            waitUntil: "networkidle2",
            timeout: 100000,
          });

          await electricPage.type('input[name="searchTextBox"]', elecRefNumber);
          await electricPage.click('input[type="submit"]');
          await electricPage.waitForSelector("body", { timeout: 100000 });

          await new Promise((resolve) => setTimeout(resolve, 3000));
          const fileName = `${elecRefNumber}-LESCO.pdf`;
          const filePath = path.join(__dirname, `../bills/${fileName}`);
          // pdf saving
          await electricPage.pdf({ path: filePath, format: "A4" });
          console.log(`✅ Downloaded LESCO bill for: ${elecRefNumber}`);
        }
      } catch (err) {
        console.error("❌ Error processing: ", err.message);

        const errMsg = `Error occured in ${electricCompany} official website during bill downloading for reference Number${elecRefNumber},that's why you  willl recieve your bill tomorrow`;
        // Patch puppeteer-core used by whatsapp-web.js
        const wwebVersion = require("whatsapp-web.js/package.json").version;
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
            await client.sendMessage(chatId, errMsg);
            console.log(`📩 Sent error message to ${chatId}`);
          } catch (whatsappError) {
            console.error(
              "❌ WhatsApp message sending failed:",
              whatsappError.message
            );
          }
        });
        client.initialize();
      }
    }
  }
  await browser.close();
};
