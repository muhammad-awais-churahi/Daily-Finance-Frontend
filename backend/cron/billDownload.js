// const cron = require("node-cron");
// const { monthlyBillLoad } = require("../controllers/billController");
// const { sendingViaWhatsApp } = require("../qrcode/whatappQRCode");

// cron.schedule("52 11 * * *", async () => {
//   console.log("⏰ Running monthly electric bill download job...");

//   const TIMEOUT = 10 * 60 * 1000; // 10 minutes max
//   const timeoutPromise = new Promise((_, reject) =>
//     setTimeout(() => reject(new Error("⚠️ Cron job timed out!")), TIMEOUT)
//   );

//   try {
//     await Promise.race([monthlyBillLoad(), timeoutPromise]);
//     console.log("✅ All bills processed.");
//     sendingViaWhatsApp();
//   } catch (err) {
//     console.error("❌ Cron job error:", err.message);
//   }
// });

const cron = require("node-cron");
const { monthlyBillLoad } = require("../controllers/billController");
const { sendingViaWhatsApp } = require("../qrcode/whatappQRCode");
// const client = require("../qrcode/whatappQRCode");
cron.schedule("16 16 * * *", async () => {
  console.log("⏰ Running monthly electric bill download job...");
  try {
    await monthlyBillLoad();
    console.log("All bills proceed");
    sendingViaWhatsApp();
    // client();
  } catch (err) {
    console.error("❌ Cron job error:", err.message);
  }
});
