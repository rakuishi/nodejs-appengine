"use strict";

const express = require("express");
const config = require("./config");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const server = app.listen(config.get("PORT"), () => {
  const port = server.address().port;
  console.log(`Example app listening on port ${port}`);
});
