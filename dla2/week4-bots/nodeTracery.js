var fs = require('fs');

// Read and eval library
filedata = fs.readFileSync('../lib/tracery.js','utf8');
eval(filedata);
var exports = module.exports = {};
exports.tracery = tracery