const fs = require("fs");

const first = fs.readFileSync("./content/first.txt");
const second = fs.readFileSync("./content/second.txt");

fs.writeFileSync(
  "./content/results",
  `The result file contains the data of both First and Seocnd File and that is: ${first},${second} `
);
