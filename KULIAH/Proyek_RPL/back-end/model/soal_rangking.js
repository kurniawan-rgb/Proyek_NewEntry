// models/soal_perangkingan.js

const database = require("../connection_db");

const SoalPerangkingan = {
  getAll: (callback) => {
    const query = "SELECT * FROM SoalRangking";
    database.query(query, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  },

  getById: (id, callback) => {
    const query = "SELECT * FROM SoalRangking WHERE idSoal = ?";
    database.query(query, [id], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results[0]);
    });
  },

  create: (Soaldata, callback) => {
    const query = "INSERT INTO SoalRangking SET ?";
    database.query(query, Soaldata, (err, result) => {
      if (err) {
        return callback(err);
      }
      callback(null, { id: result.insertId });
    });
  },

  update: (id, data, callback) => {
    const query = "UPDATE soal_perangkingan SET TeksSoal = ?, IdRangking = ?, WHERE id = ?";
    database.query(query, [data.TeksSoal, data.IdRangking, id], (err) => {
      if (err) {
        return callback(err);
      }
      callback(null, { id, ...data });
    });
  },

  delete: (id, callback) => {
    const query = "DELETE FROM soal_perangkingan WHERE id = ?";
    database.query(query, [id], (err) => {
      if (err) {
        return callback(err);
      }
      callback(null);
    });
  },
};

module.exports = SoalPerangkingan;
