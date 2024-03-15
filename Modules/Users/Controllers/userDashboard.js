const mongoose = require("mongoose");

const userDashboard = async (req, res) => {
  const user = mongoose.model("users");

  let getuserData = await user
    .findOne({
      _id: req.user._id,
    })
    .select("balance");

  res.status(200).json({
    message: "landed on Dashboard",
    data: getuserData,
  });
};

module.exports = userDashboard;
