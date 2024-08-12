const http = require("http");
// console.log(http);
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to Home Page");
    return;
  } else if (req.url === "/about") {
    res.end("This is the about Page");
    return;
  }
  res.writeHead(400, { "Content-Type": "text/html" });
  res.end(`<h2>Oops!!</h2>
     <p>Wrong Page </p>
    <p> Please go Back to</p> <a href="/">Home</a>`);
});
server.listen(5000);
