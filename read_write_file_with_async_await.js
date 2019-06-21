// This is working as expected but with following warning
// (node:15556) ExperimentalWarning: The fs.promises API is experimental

const fs = require('fs').promises;

async function main() {
    const data = await fs.readFile(__filename);
    await fs.writeFile(__filename + '.copy', data);
    console.log(__filename + " copied successfully");
    // More awaits here ...
}

main();
console.log('Test');
