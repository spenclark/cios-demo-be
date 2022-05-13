const server = require("./api/server.js");

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`\n<<< Server running on port ${port} >>>\n`);
});

// This project had a 24h