var fs = require('fs');
var args = process.argv[2];
var file = fs.readFileSync(args).toString();

console.log(file.split('\n').length - 1);
