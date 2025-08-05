const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  subscription: [
    {
      electricCompany: String,
      wasaCompany: String,
      ptclCompany: String,
      elecRefNumber: String,
      wasaRefNumber: String,
      ptclConsumerNumber: String,
      ptclAccountId: String,
    },
  ], //iesco,wasa,ptcl
  bills: [
    {
      electricPdfLink: String,
      wasaPdfLink: String,
      ptclLink: String,
      month: String,
      downloadedAt: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        enum: ["send", "pending"],
        default: "pending",
        required: true,
      },
    },
  ],
});
module.exports = mongoose.model("record", userSchema);
