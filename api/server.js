const express = require("express");
const cors = require("cors");

const server = express();

server.use(express.json());
server.use(cors());

const tenantRouter = require("./routers/tenant-routers");
server.use("/tenant", tenantRouter);

server.get("/api", (req, res) => {
  res.send("<h1>Cios Demo Server</h1>");
});

module.exports = server;
