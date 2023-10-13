const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
module.exports.signUp = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
      res.json({ message: "User already exist" });
    }
    const user = await User.create({ email, username, password });
    const token = jwt.sign({ userId: user.id }, "adadad", { expiresIn: "1hr" });
    res.json({ user, token });
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};


module.exports.login = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const userDoc = await User.findOne({ email });
    const passOk = bcrypt.compare(password, userDoc.password);
    if (passOk) {
      const token = jwt.sign({ username, id: userDoc._id }, "abcd", {
        expiresIn: "1hr",
      });
      res.cookies(token).json("ok");
    } else {
      res.status(400).json("Invalid User");
    }
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};
