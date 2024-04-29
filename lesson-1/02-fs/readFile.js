const fs = require("node:fs/promises");

console.log("Before");

// fs.readFile("read.txt", { encoding: "utf-8" }, (err, data) => {
//   if (err) {
//     throw err;
//   }

//   // console.log(data.toString());

//   console.log(data);
// });

fs.readFile("read.txt", { encoding: "utf-8" })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

console.log("After");
