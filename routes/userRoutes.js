const express = require("express");
const { createUser , updateUser} = require("../controllers/user");
const router = express.Router();

router.post("/signup", createUser);
// router.post("/update/:id", updateUser);

module.exports = router;