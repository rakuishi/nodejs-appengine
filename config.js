"use strict";

const nconf = (module.exports = require("nconf"));

nconf.argv().env(["PORT"]).defaults({
  PORT: 8080,
});
