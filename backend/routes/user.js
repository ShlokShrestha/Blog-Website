const router = require("express").Router();
const { signUp, login } = require("../controller/user");

router.post("/signup", signUp);
router.post("/login", login);

module.exports = router;
