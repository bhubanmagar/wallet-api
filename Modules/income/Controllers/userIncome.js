let express = require("express");
let mongoose = require("mongoose");
const addIncome = async (req, res) => {
  let { amount, remarks } = req.body;
  let userModel = mongoose.model("users");
  let transaction = mongoose.model("transaction");

  try {
    if (!amount) throw "Please enter amount";
    if (amount < 1) throw "amount can't be zero or negative";
    if (!remarks) throw "Please provider Remarks";
    if (remarks.length < 3) throw "Please provide remarks more than 2 words";
  } catch (error) {
    res.status(400).json({
      message: error,
    });
    return;
  }
  try {
    //creating transaction
    await transaction.create({
      balance: amount,
      remarks: remarks,
      user_id: req.user._id,
      transaction_type: "income",
    });

    await userModel.updateOne(
      {
        _id: req.user._id,
      },
      {
        $inc: {
          balance: amount,
        },
      },
      {
        runValidators: true,
      }
    );
  } catch (error) {
    res.status(401).json({
      message: error.message,
    });
    return;
  }

  res.status(200).json({
    message: "Income added sucessfully",
  });
};
module.exports = addIncome;
