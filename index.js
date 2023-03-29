const express = require("express");
const cors = require("cors");
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
require("dotenv").config();

const PORT = process.env.PORT || 57268;

const app = express();

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  res.json({
    name: req.file?.originalname,
    type: req.file?.mimetype,
    size: req.file?.size,
  });
});

app.listen(PORT, function () {
  console.log("Your app is listening on port " + PORT);
});
