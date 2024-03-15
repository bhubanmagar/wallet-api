let express = require("express");
let mongoose = require("mongoose");

const addExpense = async (req, res) => {
  let { amount, remarks } = req.body;
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
    let userModel = mongoose.model("users");
    transaction.create({
      balance: amount,
      remarks: remarks,
      user_id: req.user._id,
      transaction_type: "expense",
    });

    await userModel.updateOne(
      {
        _id: req.user._id,
      },
      {
        $inc: {
          balance: amount * -1,
        },
      },
      {
        runValidators: true,
      }
    );
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
  res.status(200).json({
    message: "add expense",
  });
};

module.exports = addExpense;
