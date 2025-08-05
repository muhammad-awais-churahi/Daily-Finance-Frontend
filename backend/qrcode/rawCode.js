// const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
// const axios = require("axios");
// const qrcode = require("qrcode-terminal");
// const fs = require("fs");
// const path = require("path");
// const puppeteer = require("puppeteer");

// //creating new Client

// exports.sendingViaWhatsApp = function () {
//   const client = new Client({
//     authStrategy: new LocalAuth(),
//     puppeteer: {
//       executablePath: puppeteer.executablePath(),
//       headless: true,
//       args: ["--no-sandbox", "--disable-setuid-sandbox"],
//     },
//   });

//   client.on("qr", (qr) => {
//     qrcode.generate(qr, { small: true });
//   });
//   client.on("ready", async () => {
//     console.log("✅ WhatsApp is ready and session is saved!");
//     try {
//       const fetchData = await axios.get("http://localhost:5000/api/get");
//       // console.log("fetchData:", fetchData.data.getData);
//       const newData = fetchData.data.getData;
//       const subscribers = Array.isArray(newData) ? newData : [newData];
//       for (const item of subscribers) {
//         const phoneNumber = item.phoneNumber;
//         const chatId = phoneNumber + "@c.us";
//         console.log("phone number:", phoneNumber);
//         const msg = "Alert!Your Electric Bill is here 😊";
//         await client.sendMessage(chatId, msg);
//         //getting pdf files
//         console.log("refNum:", item.refNumber);
//         console.log("company:", item.company);

//         for (const bill of item.bills) {
//           //wasa bill
//           if (bill.wasaPdfLink) {
//             const url = bill.wasaPdfLink;
//             console.log("link:", url);
//             const filePath = url.split("/").pop();
//             console.log("filePath:", filePath);
//             const wasaPdfPath = path.join(
//               __dirname,
//               "..",
//               "WasaBills",
//               filePath
//             );
//             console.log("pdfpath:", wasaPdfPath);

//             if (fs.existsSync(wasaPdfPath)) {
//               const media = MessageMedia.fromFilePath(wasaPdfPath);
//               console.log("media:", media);
//               await client.sendMessage(chatId, media);
//               console.log("✅ Sent wasa  bill PDF to:", chatId);
//               console.log(" Wasa File exists:", fs.existsSync(wasaPdfPath));
//             } else {
//               console.log("⚠️ No bill file found for:", bill.wasaPdfLink);
//             }
//           }
//           if (bill.electricPdfLink) {
//             const pdfPath = path.join(
//               __dirname,
//               "..",
//               "bills",
//               `${item.refNumber}-${item.company}.pdf`
//             );
//             if (fs.existsSync(pdfPath)) {
//               const media = MessageMedia.fromFilePath(pdfPath);
//               console.log("media:", media);
//               await client.sendMessage(chatId, media);
//               console.log("✅ Sent electric bill PDF to:", chatId);
//               console.log("Electric File exists:", fs.existsSync(pdfPath));
//             } else {
//               console.log("⚠️ No bill file found for:", bill.pdfLink);
//             }
//           }
//           // else  {
//           //   console.log("⚠️ No bills file found for:", bill.wasaPdfLink);
//           // }
//         }
//       }
//     } catch (err) {
//       console.log("err:", err);
//     }
//   });

//   client.on("auth_failure", (msg) => {
//     console.error("❌ Authentication failed:", msg);
//   });
//   client.on("disconnect", (reason) => {
//     console.log("❌ Client disconnected:", reason);
//   });
//   client.initialize();
// };
