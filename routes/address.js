const express = require("express");
const router = express.Router();
const address_controller = require("../controllers/address.controller");
const auth = require("../middlewares/authentication");

// router.use(auth);
router.post("/", address_controller.address);
router.get("/get", address_controller.get_address_user);
router.put("/update", address_controller.edit_address_user);
router.delete("/delete", address_controller.delete_address);

module.exports = router;
