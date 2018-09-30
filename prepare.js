const fs = require('fs');
const crypto = require('crypto');

let secret = crypto.randomBytes(20).toString('hex');
let content = "module.exports = {\n" +
  	"\t'secret': '" + secret + "'\n" +
"};"

fs.writeFile('config.js', content, function (err) {
  if (err) throw err;
  console.log('Saved!');
});