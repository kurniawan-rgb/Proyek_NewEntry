// controllers/userController.js
const rangkings = require("../model/rangkings.js");
const response = require("../response.js");

const rangkingsController = {
  getAllRangking: (req, res) => {
    rangkings.getAllRankings((err, rangkings) => {
      if (err) {
        response(500, "error", "not foud", res);
      }
      response(200, rangkings, "get rangkings from db", res);
    });
  },

  getRangkingById: (req, res) => {
    const rangkingId = req.params.id;
    rangkings.getIdRankings(rangkingId, (err, rangkings) => {
      if (err) {
        response(500, err, "errorr", res);
      }
      if (!rangkings) {
        return res.status(404).json({ message: "Rangkings not found" });
      }
      response(200, rangkings, "get detail rangkings", res);
    });
  },

  createRangkings: (req, res) => {
    const newRangkings = req.body;
    rangkings.createRankings(newRangkings, (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return response(409, null, "rangkings already exists", res); // 409 Conflict
        }
        return response(500, err, "Error creating rangkings", res);
      }
      const rangkingsId = result.insertId;
      const createRangkings = {
        id: rangkingsId,
        ...newRangkings,
      };

      response(201, createRangkings, "Rangkings created successfully", res);
    });
  },
};

module.exports = rangkingsController;
