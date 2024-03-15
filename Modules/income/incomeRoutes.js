let express = require("express");
let addIncome = require("./Controllers/userIncome");
let auth = require("../../middleware/auth");

let incomeRoutes = express.Router();
incomeRoutes.use(auth);
incomeRoutes.post("/add", addIncome);

module.exports = incomeRoutes;
