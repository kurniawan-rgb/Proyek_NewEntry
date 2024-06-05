// routes/userRoutes.js
const express = require("express");
const SoalController = require("../controller/soalContreller");

const router = express.Router();

router.get("/soal", SoalController.getAll);
router.get("/soal/:id", SoalController.getIdSoal);
router.post("/soal", SoalController.createSoal);
router.put("/soal/:id", SoalController.updateSoal);
router.delete("/soal/:id", SoalController.deleteSoal);

module.exports = router;
