// controllers/userController.js
const User = require("../model/user.js");
const response = require("../response.js");

const userController = {
  getAllUsers: (req, res) => {
    User.getAll((err, users) => {
      if (err) {
        response(500, "error", "not foud", res);
      }
      response(200, users, "get users from db", res);
    });
  },

  getUserById: (req, res) => {
    const userId = req.params.id;
    User.getById(userId, (err, user) => {
      if (err) {
        response(500, err, "errorr", res);
      }
      if (!user) {
        return res.status(404).json({ message: "User not found" });
      }
      response(200, user, "get detail users", res);
    });
  },

  createUser: (req, res) => {
    const newUser = req.body;
    User.create(newUser, (err, result) => {
      if (err) {
        if (err.code === "ER_DUP_ENTRY") {
          return response(409, null, "User already exists", res); // 409 Conflict
        }
        return response(500, err, "Error creating user", res);
      }
      const userId = result.insertId;
      const createdUser = {
        id: userId,
        ...newUser,
      };

      response(201, createdUser, "User created successfully", res);
    });
  },

  updateUser: (req, res) => {
    const userId = req.params.id;
    const updatedUser = req.body;
    User.update(userId, updatedUser, (err, users) => {
      if (err) {
        response(500, err, "error to update data", res);
      }
      //   console.log(users);
      if (users?.changedRows) {
        const data = {
          isSucces: users.changedRows,
          id: userId,
        };
        response(200, data, "succes update data", res);
      }
    });
  },

  deleteUser: (req, res) => {
    const userId = req.params.id;
    User.delete(userId, (err, wasDeleted) => {
      if (err) {
        return response(500, err, "error delete", res);
      }
      if (!wasDeleted) {
        return response(404, "User not found", "User not found", res);
      }
      response(200, "delete", "success delete user", res);
    });
  },
};

module.exports = userController;
