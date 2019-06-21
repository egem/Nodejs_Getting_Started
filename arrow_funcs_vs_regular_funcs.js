
// Regular Function
const X = function() {
    // "this" here is the caller of X
};

const Y = () => {
    // "this" here is not the caller of Y

    // It's the same "this" found in Y's scope
}

this.id = 'exports';

const testerObj = {

    func1: function() {
        console.log('func1', this);
    },

    func2: () => {
        console.log('func2', this);
    }
};

testerObj.func1();
testerObj.func2();

// Arrow functions can be used for basic single line functions


const square = (a) => {
    return a * a;
};

const square2 = (a) => a * a;

const square3 = a => a * a;

console.log("Square of 5:", square(5));
console.log("Square of 5:", square2(5));
console.log("Square of 5:", square3(5));

console.log([1, 2, 3, 4].map(a => a * a));
