const express = require("express");
const mongoose = require("mongoose");
const userRouter = require("./Modules/Users/user.routes");
const incomeRoutes = require("./Modules/income/incomeRoutes");
const expenseRoutes = require("./Modules/expense/expenseRoute");

require("dotenv").config();
const app = express();
require("./models/user.models");
require("./models/transaction.model");
app.use(express.json());

mongoose
  .connect(process.env.mongo_connection, {})
  .then(() => {
    console.log("connection sucessfull...");
  })
  .catch((error) => {
    console.log(error.message);
  });

app.use("/users", userRouter);
app.use("/income", incomeRoutes);
app.use("/expense", expenseRoutes);

app.listen(8000, () => {
  console.log("server started sucessfully");
});
