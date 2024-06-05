const express = require("express");
const rangkingsController = require("../controller/rangkingController");

const router = express.Router();

router.get("/rangkings", rangkingsController.getAllRangking);
router.get("/rangkings/:id", rangkingsController.getRangkingById);
router.post("/rangkings", rangkingsController.createRangkings);

module.exports = router;
