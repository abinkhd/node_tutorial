const fs = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf-8", (error, data) => {
      if (error) {
        reject(error);
      } else {
        resolve(data);
      }
    });
  });
};

getText("./content/first.txt")
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
