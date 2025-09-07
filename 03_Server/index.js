//creating server using NodeJS
const http = require("http");

const server = http.createServer((req, res) => {
  //basic routing
  if (req.url === "/") {
    res.end("Welcome to deep matrix");
  }
  if (req.url === "/about") {
    res.end("Welcome to about page");
  }
  if (req.url === "/contact") {
    res.end("Welcome to contact page");
  } else {
    res.end("Error: Page not found");
  }
});

server.listen("3000", () => {
  console.log(`Listening at PORT:3000`);
});
