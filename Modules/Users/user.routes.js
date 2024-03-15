const express = require("express");
const userRegister = require("./Controllers/userRegister");
const userLogin = require("./Controllers/user.Login");
const userDashboard = require("./Controllers/userDashboard");
const auth = require("../../middleware/auth");

const userRouter = express.Router();

userRouter.post("/register", userRegister);
userRouter.post("/login", userLogin);

//protected routes
userRouter.use(auth); //middleware
userRouter.get("/dashboard", userDashboard);

module.exports = userRouter;
