const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  console.log(req.params);
  res.status(200).send("Home Page");
});
app.get("/about", (req, res) => {
  res.status(200).send("About Page");
});

app.all("*", (req, res) => {
  res.status(404).send("<h1>404 Error.. Page Not Found!!<h1>");
});

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT} http://localhost:${PORT}/`);
});
