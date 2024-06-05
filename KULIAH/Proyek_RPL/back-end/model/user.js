// models/User.js
const database = require("../connection_db");

const User = {
  getAll: (callback) => {
    const query = "SELECT * FROM users";
    database.query(query, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  },

  getById: (id, callback) => {
    const query = "SELECT * FROM users WHERE id = ?";
    database.query(query, [id], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results[0]);
    });
  },

  create: (userData, callback) => {
    const query = "INSERT INTO users SET ?";
    database.query(query, userData, (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results.insertId);
    });
  },

  update: (id, userData, callback) => {
    const query = "UPDATE users SET ? WHERE id = ?";
    database.query(query, [userData, id], (err, results) => {
      if (err) {
        return callback(err);
      }
      callback(null, results);
    });
  },

  delete: (id, callback) => {
    const query = "DELETE FROM users WHERE id = ?";
    database.query(query, [id], (err, results) => {
      if (err) {
        return callback(err);
      }
      // Check if any rows were affected (i.e., if the user was found and deleted)
      if (results.affectedRows === 0) {
        return callback(null, false); // No rows deleted, user not found
      }
      callback(null, true); // User found and deleted
    });
  },
};

module.exports = User;
