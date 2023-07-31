const express = require("express");
const router = express.Router();
const variant_controller = require("../controllers/variant.controller");

router.get("/", variant_controller.getVariant);
router.post("/", variant_controller.createVariant);
router.put("/update", variant_controller.editVariant);
router.delete("/delete", variant_controller.deleteVariant);

module.exports = router;
