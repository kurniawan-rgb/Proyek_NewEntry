const express = require("express");
const jawabanController = require("../controller/jawabanController");

const router = express.Router();

router.get("/jawaban", jawabanController.getAllJawaban);
router.get("/jawaban/:id", jawabanController.getJawabanById);
router.post("/jawaban", jawabanController.createJawaban);
router.put("/jawaban/:id", jawabanController.updateJawaban);
router.delete("/jawaban/:id", jawabanController.deleteJawaban);

module.exports = router;
