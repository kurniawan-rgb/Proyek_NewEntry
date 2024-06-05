const response = require("../response");
const SoalPerangkingan = require("../model/soal_rangking");

const SoalController = {
  getAll: (req, res) => {
    SoalPerangkingan.getAll((err, result) => {
      if (err) throw err;
      response(200, result, "data soal", res);
    });
  },
  getIdSoal: (req, res) => {
    const SoalId = req.params.id;
    SoalPerangkingan.getById(SoalId, (err, result) => {
      if (err) throw err;
      response(200, result, "data soal", res);
    });
  },
  createSoal: (req, res) => {
    const newSoal = req.body;
    SoalPerangkingan.create(newSoal, (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return response(409, null, "Soal already exists", res); // 409 Conflict
        }
        return response(500, err, "Error creating soal", res);
      }
      const SoalId = result.insertId;
      const createdSoal = {
        id: SoalId,
        ...newSoal,
      };

      response(201, createdSoal, "Soal created successfully", res);
    });
  },
  updateSoal: (req, res) => {
    const SoalId = req.params.id;
    const updatedSoal = req.body;
    SoalPerangkingan.update(SoalId, updatedSoal, (err, soals) => {
      if (err) {
        response(500, err, "error to update data", res);
      }
      //   console.log(users);
      if (soals?.changedRows) {
        const data = {
          isSucces: soals.changedRows,
          id: SoalId,
        };
        response(200, data, "succes update data", res);
      }
    });
  },

  deleteSoal: (req, res) => {
    const SoalId = req.params.id;
    SoalPerangkingan.delete(SoalId, (err, wasDeleted) => {
      if (err) {
        return response(500, err, "error delete", res);
      }
      if (!wasDeleted) {
        return response(404, "Soal not found", "Soal not found", res);
      }
      response(200, "delete", "success delete Soal", res);
    });
  },
};

module.exports = SoalController;
