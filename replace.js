const fs = require('fs');

fs.readFile('./src/cindyjs/init.txt', 'utf8', function(err, data) {
    if (err) throw err;
    console.log(data);
});
