const arr1 = [1, 2, 3]

console.log('arr1: ', arr1)
const unshift = arr1.unshift(3);
console.log('unshift', unshift)
console.log('arr1.unshift(3):', arr1)

const pop = arr1.pop();
console.log('pop', pop)
console.log('arr1.pop():', arr1)

const shift = arr1.shift();
console.log('shift', shift)
console.log('arr1', arr1)

let min = 1;
let max = 10;
let randomInt = Math.floor(Math.random() * (max - min + 1)) + min;
console.log('rnd', randomInt);