const router = require("express").Router();
const { signUp, login, profile, logout } = require("../controller/user");

router
  .post("/signup", signUp)
  .post("/login", login)
  .get("/profile", profile)
  .post("/logout", logout);

module.exports = router;
