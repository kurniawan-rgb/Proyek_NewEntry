const database = require("../connection_db");

const rangkings = {
  getAllRankings: (callback) => {
    const query = "SELECT * FROM rankings";
    database.query(query, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  },
  getIdRankings: (id, callback) => {
    const query = "SELECT * FROM rankings WHERE id = ?";
    database.query(query, [id], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results[0]);
    });
  },
  createRankings: (rangkingData, callback) => {
    const query = "INSERT INTO rankings SET ?";
    database.query(query, rangkingData, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results.insertId);
    });
  },
};

module.exports = rangkings;
