const express = require("express");
const router = express.Router();
//import controllers
const {
  createRecord,
  getRecord,
  getAllRecord,
} = require("../controllers/userController");

//routes defining
router.post("/create", createRecord);
router.get("/get/:company/:refNumber", getRecord);
router.get("/get", getAllRecord);
module.exports = router;
