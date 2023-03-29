const express = require("express");
const cors = require("cors");
require("dotenv").config();

const PORT = process.env.PORT || 57268;

const app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", (req, res) => {
  res.json({ Hello: ", World!" });
});

app.listen(PORT, function () {
  console.log("Your app is listening on port " + PORT);
});
