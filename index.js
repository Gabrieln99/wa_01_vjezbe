const e = require("express");
const express = require("express");
const useri = [
  { ime: "gabriel", prezime: "nadal" },
  { ime: "patrik", prezime: "fab" },
  { ime: "pero", prezime: "peric" },
];

let app = express();

const PORT = 3000;
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/about.html");
});

app.get("/users", (req, res) => {
  res.json(useri);
});
app.listen(PORT, (error) => {
  if (error) {
    console.error(error);
  } else {
    console.log("slusam na ovom portu:", PORT);
  }
});
