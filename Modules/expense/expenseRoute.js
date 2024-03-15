let express = require("express");
let addExpense = require("./Controllers/addExpense");
let auth = require("../../middleware/auth");

let expenseRoutes = express.Router();

//protected page
expenseRoutes.use(auth);
expenseRoutes.post("/add", addExpense);

module.exports = expenseRoutes;
