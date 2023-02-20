const express = require("express");
const { home, loginUser } = require("../controller/authController");

const router = express.Router();

router.get('/', home)
router.post('/login', loginUser)

module.exports = router;