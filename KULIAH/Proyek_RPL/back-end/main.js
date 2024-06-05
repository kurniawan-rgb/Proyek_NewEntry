const express = require("express");
const bodyParser = require("body-parser");
const userRoutes = require("./routers/userRouters.js");
const soalRoutes = require("./routers/soalRouters.js");
const rankingsRoutes = require("./routers/rangkingsRouters.js");
const jawabanRoutes = require("./routers/jawabanRouters.js");
const port = 3001;
const app = express();
const cors = require("cors");

// JSON DATA
app.use(bodyParser.json());
// PORT API

app.use(cors());
app.use(bodyParser.json());
app.use("/api", userRoutes, soalRoutes, rankingsRoutes, jawabanRoutes);
// app.get("/users", (req, res) => {
//   const sql = "SELECT * FROM users";
//   database.query(sql, (err, rows) => {
//     if (err) throw err;
//     response(200, rows, "get users from db", res);
//   });
// });

// app.use("/users/:fakultas", (req, res) => {
//   const fakultas = req.params.fakultas;
//   const sql = `SELECT * FROM users WHERE fakultas = ${fakultas}`;
//   database.query(sql, (err, rows) => {
//     if (err) throw err;
//     response(200, rows, "get detail users", res);
//   });
// });

// app.post("/update", (req, res) => {
//   const { nama_lengkap, fakultas, program_studi, username, password, role } = req.body;
//   const sql = `INSERT INTO users (nama_lengkap, fakultas, program_studi, username, password, role)
//   VALUES ('${nama_lengkap}', '${fakultas}', '${program_studi}', '${username}', '${password}', '${role}')`;
//   database.query(sql, (err, rows) => {
//     if (err) response(500, "invalid data", "error", res);
//     if (rows?.affectedRows) {
//       const data = {
//         isSucces: rows.affectedRows,
//         id: rows.id,
//       };
//       response(200, data, "succes add data", res);
//     }
//   });
// });

// app.delete("/update", (req, res) => {});
// app.put("/update", (req, res) => {});

// Running Server
app.listen(port, () => {
  console.log(`Running on Port ${port}`);
});
