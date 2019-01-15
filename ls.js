//List all items in working directory
const fs = require('fs');

function ls() {
  fs.readdir('.', function(err, files) {
    files.forEach(item => process.stdout.write(`${item}\n`));
    process.stdout.write('prompt > ');
  });
}

//Module export
module.exports = ls;
