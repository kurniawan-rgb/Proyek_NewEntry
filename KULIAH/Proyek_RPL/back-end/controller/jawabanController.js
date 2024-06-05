const jawaban = require("../model/jawaban_rangking");
const response = require("../response.js");

const jawabanController = {
  getAllJawaban: (req, res) => {
    jawaban.getAllJawaban((err, result) => {
      if (err) throw err;
      response(200, result, "get Jawaban from db", res);
    });
  },
  getJawabanById: (req, res) => {
    const jawabanId = req.params.id;
    jawaban.getByIdJawaban(jawabanId, (err, result) => {
      if (err) {
        response(500, err, "errorr", res);
      }
      if (!result) {
        return res.status(404).json({ message: "Soal not found" });
      }
      response(200, result, "get detail Soal", res);
    });
  },

  createJawaban: (req, res) => {
    const newJawaban = req.body;
    jawaban.createJawaban(newJawaban, (err, result) => {
      if (err) {
        return response(500, err, "Error creating user", res);
      }
      const JawabanId = result.insertId;
      const createdJawaban = {
        id: JawabanId,
        ...newJawaban,
      };

      response(201, createdJawaban, "User created successfully", res);
    });
  },

  updateJawaban: (req, res) => {
    const jawabanId = req.params.id;
    const updateJawaban = req.body;
    jawaban.updateJawaban(jawabanId, updateJawaban, (err, result) => {
      if (err) {
        response(500, err, "error to update data", res);
      }
      if (result?.changedRows) {
        const data = {
          isSucces: result.changedRows,
          id: jawabanId,
        };
        response(200, data, "succes update data", res);
      }
    });
  },
  deleteJawaban: (req, res) => {
    const jawabanId = req.params.id;
    jawaban.deleteJawaban(jawabanId, (err, result) => {
      if (err) {
        return response(500, err, "error delete", res);
      }
      if (!result) {
        return response(404, "Soal not found", "Soal not found", res);
      }
      response(200, "delete", "success delete Soal", res);
    });
  },
};

module.exports = jawabanController;
