// const PI = Math.PI;
// const E = Math.E;
// const SQRT2 = Math.SQRT2;

const { PI, E, SQRT2 } = Math;

console.log(PI);
console.log(E);
console.log(SQRT2);

// With require
const {readFile} = require('fs');
console.log(readFile);


const circle = {
    label: 'circleX',
    radius: 2,
};

const circleArea = ({radius}, {precision = 2} = {}) => (PI * radius * radius).toFixed(precision);

console.log(circleArea(circle));
console.log(circleArea(circle, {precision: 5}));

// Destructuring Array
const [first, second,, forth] = [10, 20, 30, 40];
console.log(first, second, forth);

const [, ...restOfItems] = [10, 20, 30, 40];
console.log(restOfItems);

const newArray = [...restOfItems];
console.log("newArray:", newArray);

const data = {
    temp1: '001',
    temp2: '002',
    firstName: 'John',
    lastName: 'Doe'
};

const {temp1, temp2, ...person} = data;
const {firstName, lastName} = data;

console.log(person);
console.log(firstName);
console.log(lastName);

const newObject = {
    ...person
};

console.log("newObject", newObject);
