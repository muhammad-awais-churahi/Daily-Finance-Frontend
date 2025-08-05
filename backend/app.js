const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");
//config environment file
dotenv.config();
//import dbConnection file
const dbConnection = require("../backend/utils/dbConnection");
//connection database
dbConnection();
// config express
const app = express();
app.use(express.json());
app.use("/bills", express.static(path.join(__dirname, "bills")));
//cors configuration
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
//importing cron functionality
require("./cron/billDownload");
//importing routes
const userRoute = require("./routes/userRoute");
//routes configuration
app.use("/api", userRoute);

app.listen(process.env.PORT, () => {
  console.log("running on port 5000");
});
