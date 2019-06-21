const fs = require('fs');

fs.readFile(__filename, function cb1(err, data) {
    fs.writeFile(__filename + ".copy", data, function cb2(err) {
        console.log(__filename + " copied successfully");
        // Nest more callbacks here...
    });
});

console.log("Test");
