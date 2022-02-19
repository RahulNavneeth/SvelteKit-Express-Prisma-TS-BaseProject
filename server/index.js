const express = require("express");
const app = express();
const cors = require("cors");
var bodyParser = require("body-parser");

const port = 3001;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ Hello: "World" });
});

app.listen(port, () => {
  console.log(`app listening on port ${port} 🚀`);
});
