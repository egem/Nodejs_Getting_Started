const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

async function main() {
    const data = await readFile(__filename);
    await writeFile(__filename + '.copy', data);
    console.log(__filename + " copied successfully");
}

main();

console.log('Test');
