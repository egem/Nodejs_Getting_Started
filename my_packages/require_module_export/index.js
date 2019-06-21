/*
    If we execute this code in Browser, it will give undefined output.
    However, in the node.js, there is an invisible wrapper function which
    encapsulates the module.

    For example, if we define a variable at the top of this file as follows,

    let g = 1;

    g is not global variable. It is local variable of wrapper function.
*/


// Function wrapper
// function(exports, module, require, __filename, __dirname) {

console.log("----------Arguments----------------")
console.log(arguments);

// exports and module.exports are alias
exports.a = 42;
module.exports.b = 37;

// hidden return as follows
// return module.exports;
// }
