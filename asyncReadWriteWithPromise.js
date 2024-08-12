const { writeFile } = require("fs").promises;

const fs = require("fs").promises;

const start = async () => {
  try {
    const first = await fs.readFile("./content/first.txt", "utf-8");
    const second = await fs.readFile("./content/second.txt", "utf-8");
    await writeFile(
      "./content/mindGranade.txt",
      `This first and second file ${first}, ${second}`
    );
    // console.log(first);
  } catch (error) {
    console.log(error);
  }
};
start();
