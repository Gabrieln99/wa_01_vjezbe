const express = require("express");

let app = express();

const PORT = 30;

app.get("/", (req, res) => {
  res.send("Hello World!");
});



app.listen(PORT, (error)=>{

if (error){
    console.log(error);
}else {
  console.log("slušam");}}
);
