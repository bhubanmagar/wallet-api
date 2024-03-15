const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    balance: {
      type: Number,
      required: [true, "Balance is required"],
    },
    remarks: {
      type: String,
      required: [true, "Remarks is needed"],
    },
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "User id is required"],
    },
    transaction_type: {
      type: String,
      enum: ["income", "expense"],
      required: [true, "Type is required"],
    },
  },

  {
    timestamps: true,
  }
);

const userModel = mongoose.model("transaction", transactionSchema);

module.exports = userModel;
