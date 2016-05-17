var fs = require('fs')
fs.readFile('./index.json', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});
