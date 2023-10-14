const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const secret = "asdfe45we45w345wegw345werjktjwertkj";
module.exports.signUp = async (req, res) => {
  try {
    const { email, password, username } = req.body;
    const existUser = await User.findOne({ email });
    if (existUser) {
      res.json({ message: "User already exist" });
    }
    const user = await User.create({ email, username, password });
    const token = jwt.sign({ userId: user.id }, secret, { expiresIn: "1hr" });
    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error creating user" });
  }
};

module.exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userDoc = await User.findOne({ email });

    if (!userDoc) {
      return res.status(401).json({ error: "User not found" });
    }

    const passOk = await bcrypt.compare(password, userDoc.password);

    if (passOk) {
      const token = jwt.sign(
        { email, username: userDoc.username, id: userDoc._id },
        secret,
        {
          expiresIn: "3days",
        }
      );

      // Set the token as a cookie and send a JSON response
      res.cookie("token", token).json({
        success: true,
        id: userDoc._id,
        username: userDoc.username, // Corrected to userDoc.username
        email,
      });
    } else {
      return res.status(401).json({ error: "Invalid email or password" });
    }
  } catch (error) {
    return res.status(500).json({ error: "Error creating user" });
  }
};

module.exports.profile = (req, res) => {
  const { token } = req.cookies;

  jwt.verify(token, secret, {}, (err, info) => {
    if (err) throw err;
    res.json(info);
  });
};
module.exports.logout = (req, res) => {
  res.cookie("token", "", { expires: new Date(0) }).json({ ok: true });
};


// const token  = req.cookies.token;
// if (!token) {
//   return res.json({ status: false });
// }
// jwt.verify(token, "adadad", {}, async (err, info) => {
//   if (err) {
//     return res.json({ status: false });
//   } else {
//     console.log(info)
//     const user = await User.findById(info.id);
//     if (user) return res.json({ status: true, user: user.username });
//     else return res.json({ status: false });
//   }
// });
