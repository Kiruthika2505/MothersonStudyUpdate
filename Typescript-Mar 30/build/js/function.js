"use strict";
//Normal function
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 5));
// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction = (value) => value * -1;
console.log(negateFunction(10));
