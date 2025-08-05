//wasa bill dowloading
// const wasaPage = await browser.newPage();
// await wasaPage.goto("https://www.wasarwp.gop.pk/Onlinebill", {
//   waitUntil: "networkidle2",
//   timeout: 100000,
// });
// await wasaPage.type('input[name="C_Code"]', wasaRefNumber);
// await wasaPage.click('input[type="Submit"]');
// await wasaPage.waitForSelector("html", { timeout: 100000 });

// await new Promise((resolve) => setTimeout(resolve, 3000));
// const wasaFileName = `${wasaRefNumber}-rwpWasa.pdf`;
// const wasaFilePath = path.join(
//   __dirname,
//   `../WasaBills/${wasaFileName}`
// );
// //pdf saving
// await wasaPage.pdf({ path: wasaFilePath, format: "A4" });
// console.log(`✅ Downloaded WASA_IESCO bill for: ${wasaRefNumber}`);
// await wasaPage.close();

// console.log(`✅ data: ${wasaRefNumber} ${refNumber}  ${company}`);
// console.log("electric-File-Path:", filePath);
// console.log("wasaFilePath:", wasaFilePath);

//save to db
// const pdfLink = `http://localhost:5000/bills/${fileName}`;
// const wasaPdfLink = `http://localhost:5000/WasaBills/${wasaFileName}`;
// await saveBillToDB(
//   refNumber,
//   company,
//   wasaRefNumber,
//   pdfLink,
//   wasaPdfLink
// );

// const electPdfLink = `http://localhost:5000/bills/${fileName}`;
// await saveBillToDB(elecRefNumber, electricCompany, electPdfLink);
// }

//lahore bills

// if (comp === "lesco") {
//   // await page.goto("https://bill.pitc.com.pk/iescobill", {
//   //   waitUntil: "networkidle2",
//   //   timeout: 100000,
//   // });

//   // await page.type('input[name="searchTextBox"]', refNumber);
//   // await page.click('input[type="submit"]');
//   // await page.waitForSelector(".maincontent", { timeout: 100000 });

//   // await new Promise((resolve) => setTimeout(resolve, 3000));
//   // fileName = `${refNumber}-IESCO.pdf`;
//   // const filePath = path.join(
//   //   __dirname,
//   //   `../bills/${refNumber}-IESCO.pdf`
//   // );
//   // await page.pdf({ path: filePath, format: "A4" });
//   // console.log(`✅ Downloaded IESCO bill for: ${refNumber}`);

//   //wasa bill dowloading
//   await page.goto("https://cms.wasalhr.pk/DuplicateBill/searchBill", {
//     waitUntil: "networkidle2",
//     timeout: 100000,
//   });
//   await page.type('input[name="acctnum"]', wasaRefNumber);
//   await page.click('button[type="Submit"]');
//   await page.waitForSelector("html", { timeout: 100000 });

//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   wasaFileName = `${wasaRefNumber}-lhrWasa.pdf`;
//   const wasaFilePath = path.join(
//     __dirname,
//     `../WasaBills/${wasaRefNumber}-lhrWasa.pdf`
//   );
//   await page.pdf({ path: wasaFilePath, format: "A4" });
//   console.log(`✅ Downloaded WASA_Lhr bill for: ${wasaRefNumber}`);
//   console.log(`✅ data: ${wasaRefNumber} ${refNumber}  ${company}`);
//   if (wasaFilePath) {
//     console.log("wasaFilePath:", wasaFilePath);
//     // const pdfLink = `http://localhost:5000/bills/${fileName}`;
//     const wasaPdfLink = `http://localhost:5000/WasaBills/${wasaFileName}`;
//     await saveBillToDB(refNumber, company, wasaRefNumber, wasaPdfLink);
//   }
// }

// if (comp === "gepco") {
//   await electricPage.goto("https://bill.pitc.com.pk/gepcobill", {
//     waitUntil: "networkidle2",
//     timeout: 100000,
//   });

//   await electricPage.type('input[name="searchTextBox"]', refNumber);
//   await electricPage.click('input[type="submit"]');
//   await electricPage.waitForSelector(".maincontent", { timeout: 100000 });

//   await new Promise((resolve) => setTimeout(resolve, 10000));
//   fileName = `${refNumber}-GEPCO.pdf`;

//   const filePath = path.join(
//     __dirname,
//     `../bills/${refNumber}-GEPCO.pdf`
//   );
//   await electricPage.pdf({ path: filePath, format: "A4" });
//   console.log(`✅ Downloaded GEPCO bill for: ${refNumber}`);
//   // gujranwala wasa bill
//   const wasaPage = await browser.newPage();
//   // await wasaPage.goto("https://www.wasarwp.gop.pk/Onlinebill", {
//   //   waitUntil: "networkidle2",
//   //   timeout: 100000,
//   // });
//   // await wasaPage.type('input[name="C_Code"]', wasaRefNumber);
//   // await wasaPage.click('input[type="Submit"]');
//   // await wasaPage.waitForSelector("html", { timeout: 100000 });

//   // await new Promise((resolve) => setTimeout(resolve, 3000));
//   // const wasaFileName = `${wasaRefNumber}-rwpWasa.pdf`;
//   // const wasaFilePath = path.join(
//   //   __dirname,
//   //   `../WasaBills/${wasaFileName}`
//   // );

//   const pdfLink = `http://localhost:5000/bills/${fileName}`;
//   await saveBillToDB(
//     refNumber,
//     company,
//     wasaRefNumber,
//     pdfLink,
//     wasaPdfLink
//   );
// }

// if (comp === "hesco") {
//   await page.goto("https://bill.pitc.com.pk/hescobill", {
//     waitUntil: "networkidle2",
//     timeout: 100000,
//   });

//   await page.type('input[name="searchTextBox"]', refNumber);
//   await page.click('input[type="submit"]');
//   await page.waitForSelector(".maincontent", { timeout: 100000 });

//   await new Promise((resolve) => setTimeout(resolve, 3000));
//   fileName = `${refNumber}-HESCO.pdf`;

//   const filePath = path.join(
//     __dirname,
//     `../bills/${refNumber}-HESCO.pdf`
//   );
//   await page.pdf({ path: filePath, format: "A4" });
//   console.log(`✅ Downloaded HESCO bill for: ${refNumber}`);
// }

// save bill into DB
// if (wasaFilePath) {
//   console.log("wasaFilePath:", wasaFilePath);
//   // const pdfLink = `http://localhost:5000/bills/${fileName}`;
//   const wasaPdfLink = `http://localhost:5000/WasaBills/${wasaFileName}`;
//   await saveBillToDB(refNumber, company, wasaRefNumber, wasaPdfLink);
// }

//2nd part

// const puppeteer = require("puppeteer");
// const fs = require("fs");
// const path = require("path");
// const userRecord = require("../models/userRecord");
// //function
// exports.monthlyBillLoad = async () => {
//   //auto generated folder
//   const billFolder = path.join(__dirname, "../bills");
//   if (!fs.existsSync(billFolder)) {
//     fs.mkdirSync(billFolder);
//     console.log("📁 'bills' folder created.");
//   }

//   const subscriptions = await userRecord.find();
//   console.log("subscription:", subscriptions);
//   const browser = await puppeteer.launch({ headless: "new" });
//   let page;
//   for (const sub of subscriptions) {
//     const { company, refNumber } = sub;
//     page = await browser.newPage();

//     const comp = company.toLowerCase();
//     console.log("comp:", comp);
//     console.log("refNo:", refNumber);
//     if (comp === "iesco") {
//       const goTo = await page.goto("https://bill.pitc.com.pk/iescobill", {
//         waitUntil: "networkidle0",
//         timeout: 100000,
//       });
//       console.log("Data:", goTo);
//       await page.type('input[name="searchTextBox"]', refNumber);
//       await page.click('input[type="submit"]');
//       await page.waitForSelector(".maincontent", { timeout: 100000 });
//       // await new Promise((resolve) => setTimeout(resolve, 3000)); // waits for 10 second

//       //saving pdf
//       const filePath = path.join(__dirname, `../bills/${refNumber}-IESCO.pdf`);

//       console.log("filepath:", filePath);
//       await page.pdf({ path: filePath, format: "A4" });
//       console.log(`✅ Downloaded IESCO bill for: ${refNumber}`);
//     }
//     if (comp === "gepco") {
//       const goTo = await page.goto("https://bill.pitc.com.pk/gepcobill", {
//         waitUntil: "networkidle0",
//         timeout: 100000,
//       });
//       console.log("Data:", goTo);
//       await page.type('input[name="searchTextBox"]', refNumber);
//       await page.click('input[type="submit"]');
//       // await new Promise((resolve) => setTimeout(resolve, 3000)); // waits for 1 second

//       await page.waitForSelector(".maincontent", { timeout: 100000 });

//       //saving pdf
//       const filePath = path.join(__dirname, `../bills/${refNumber}-GEPCO.pdf`);
//       console.log("filepath:", filePath);
//       await page.pdf({ path: filePath, format: "A4" });
//       console.log(`✅ Downloaded GEPCO bill for: ${refNumber}`);
//     }
//     if (comp === "hesco") {
//       const goTo = await page.goto("https://bill.pitc.com.pk/hescobill", {
//         waitUntil: "networkidle0",
//         timeout: 100000,
//       });
//       console.log("Data:", goTo);
//       await page.type('input[name="searchTextBox"]', refNumber);
//       await page.click('input[type="submit"]');
//       await page.waitForSelector(".maincontent", { timeout: 100000 });
//       // await new Promise((resolve) => setTimeout(resolve, 3000)); // waits for 10 second

//       //saving pdf
//       const filePath = path.join(__dirname, `../bills/${refNumber}-GEPCO.pdf`);
//       console.log("filepath:", filePath);
//       await page.pdf({
//         path: filePath,
//         format: "A4",
//         // printBackground: true,
//         // fullPage: true,
//       });
//       console.log(`✅ Downloaded HESCO bill for: ${refNumber}`);
//     }
//   }
//   await page.close();

//   await browser.close();
// };
