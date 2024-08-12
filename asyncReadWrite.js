const fs = require("fs");

fs.readFile("./content/first.txt", "utf-8", (error, result) => {
  if (error) {
    console.log(error);
    return;
  }
  const first = result;
  fs.readFile("./content/second.txt", "utf-8", (error, result) => {
    if (error) {
      console.log(error);
      return;
    }
    const second = result;
    fs.writeFile(
      "./content/asyncResult.txt",
      `The result file contains the data of both First and Seocnd File and that is: ${first},${second}`,
      () => {
        if (error) {
          console.log(error);
          return;
        }
        console.log(result);
      }
    );
  });
});
