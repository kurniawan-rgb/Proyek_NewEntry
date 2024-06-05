// models/soal_perangkingan.js

const database = require("../connection_db");

const JawabanRangking = {
  getAllJawaban: (callback) => {
    const query = "SELECT * FROM jawabanSoal";
    database.query(query, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  },

  getByIdJawaban: (id, callback) => {
    const query = "SELECT * FROM jawabanSoal WHERE IDJawaban = ?";
    database.query(query, [id], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results[0]);
    });
  },

  createJawaban: (data, callback) => {
    const query = "INSERT INTO jawabanSoal SET ?";
    database.query(query, data, (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, { id: result.insertId, ...data });
    });
  },

  updateJawaban: (id, jawabandata, callback) => {
    const query = "UPDATE jawabanSoal SET ? WHERE id = ?";
    database.query(query, [id, jawabandata], (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, result);
    });
  },

  deleteJawaban: (id, callback) => {
    const query = "DELETE FROM jawabanSoal WHERE id = ?";
    database.query(query, [id], (err, result) => {
      if (err) {
        return callback(err);
      }
      if (result.affectedRows === 0) {
        return callback(null, false);
      }
      callback(null, true);
    });
  },
};

module.exports = JawabanRangking;
