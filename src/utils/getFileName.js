var fs = require("fs");
var files = fs.readdirSync("./../../public/assets/bg-audio/bollywood");
// console.log(files);

function formatFile(fileNames) {
  const data = [];
  for (let i = 0; i < fileNames.length; i++) {
    let temp = {
      index: i,
      name: fileNames[i].split(".")[0],
      fileName: fileNames[i],
    };
    data.push(temp);
  }
  console.log(data);
}
formatFile(files);
