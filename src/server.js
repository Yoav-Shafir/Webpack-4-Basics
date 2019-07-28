const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

app.get("/hello-world", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/hello-world.html");
  const content = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(content)
});

app.get("/kiwi", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/kiwi.html");
  const content = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(content)
});

app.use("/static", express.static(path.resolve(__dirname, "../dist")))

app.listen(3000, () => console.log("Listening on port: 3000"))