const record = require("../models/userRecord");

//create api

exports.createRecord = async (req, resp) => {
  const data = req.body;
  try {
    const insertData = await record.create({
      phoneNumber: data.phoneNumber,
      email: data.email,
      subscription: data.clnSubs, // ✅ USE frontend array as-is
    });

    resp.status(200).json({
      insertData,
    });
  } catch (err) {
    console.log("Err:", err);
    resp.status(500).json({ message: "Something went wrong", error: err });
  }
};

//bill saving api

exports.saveBillToDB = async (
  refNumber,
  company,
  wasaRefNumber,
  pdfLink,
  wasaPdfLink
) => {
  try {
    const user = await record.findOne({
      company,
      wasaRefNumber,
      wasaRefNumber,
    });
    console.log("electric-pdfLink:", pdfLink);
    console.log("wasaPdfLink:", wasaPdfLink);

    if (!user) {
      console.error(
        "❌ User not found with this refNumber,wasaRefNumber and company:",
        refNumber,
        company,
        wasaRefNumber
      );
      return;
    }
    // Get current month and year (e.g., "July 2025")
    const date = new Date();
    const month = date.toLocaleString("default", {
      month: "long",
      // year: "numeric",
    });
    const day = date.getDate();
    const year = date.getFullYear();
    const time = date.toTimeString().split(" ")[0];
    const formattedDateTime = `${month} ${day}, ${year} ${time}`;
    const fullMonth = `${month} ${year}`;
    let alreadyExists = user.bills.find((bill) => bill.month === fullMonth);
    if (!alreadyExists) {
      user.bills.push({
        month: fullMonth,
        downloadedAt: formattedDateTime,
        electricPdfLink: pdfLink || null,
        wasaPdfLink: wasaPdfLink || null,
      });
      console.log(`✅ Created new bill record for ${fullMonth}`);
    } else {
      let update = false;
      if (pdfLink && !alreadyExists.electricPdfLink) {
        alreadyExists.electricPdfLink = pdfLink;
        update = true;
      }
      if (wasaPdfLink && !alreadyExists.wasaPdfLink) {
        alreadyExists.wasaPdfLink = wasaPdfLink;
        update = true;
      }
      if (update) {
        (alreadyExists.formattedDateTime = formattedDateTime),
          console.log("🔄 Updated existing bill record for ...");
      } else {
        console.log("ℹ️ Bill already has both electric and WASA.");
        return;
      }
    }
    await user.save();
    console.log(
      `✅ Bill for ${fullMonth} saved successfully for refNumber: ${refNumber} & wsaRefNumber:${wasaRefNumber}`
    );
  } catch (error) {
    console.error("❌ Error saving bill:", error.message);
  }
};

//get api
exports.getAllRecord = async (req, resp) => {
  try {
    const getData = await record.find();
    console.log("getdata:", getData);

    return resp.status(200).json({
      getData,
    });
  } catch (err) {
    console.log("err:", err);
  }
};

exports.getRecord = async (req, resp) => {
  const { company, refNumber } = req.params;
  console.log("company:", company);
  console.log("refNumber:", refNumber);
  try {
    const getData = await record.find({
      company,
      refNumber,
    });
    console.log("getdata:", getData);

    // const getData = await record.find();
    if (getData.length === 0) {
      return resp.status(404).json({ message: "No records found." });
    }
    return resp.status(200).json({
      getData,
    });
  } catch (err) {
    console.log("err:", err);
  }
};
