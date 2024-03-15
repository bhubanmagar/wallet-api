const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userRegister = async (req, res) => {
  let users = mongoose.model("users");

  let { name, adress, password, email, balance } = req.body;

  const encPassword = await bcrypt.hash(password, 10);

  //creating users in database named "users"
  try {
    let createdUser = await users.create({
      name,
      email,
      password: encPassword,
      adress,
      balance,
    });
  } catch (error) {
    res.status(400).json({
      status: "failed",
      message: error.message,
    });
    return;
  }

  res.status(200).json({
    messege: "user registered sucessfully",
  });
};

module.exports = userRegister;
