const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const nikeRouter = require('./getNike/router');

const server = express();
server.use(express.json());
server.use(helmet());
server.use(cors());

//Nike Routes
server.use("/api/nike", nikeRouter)

//Default Route
server.get("/", (req, res) => {
  res.json({ API: "Online" });
});

module.exports = server;
