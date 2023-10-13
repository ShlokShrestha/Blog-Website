const router = require("express").Router();
const { signUp } = require("../controller/user");

router.post("/signup", signUp);

module.exports = router;
