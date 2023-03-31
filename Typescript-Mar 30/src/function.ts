//Normal function

function multiply(a: number, b: number) {
    return a * b;
  }
  
  console.log(multiply(2,5))

//Arrow function

type Negate = (value: number) => number;

// in this function, the parameter `value` automatically gets assigned the type `number` from the type `Negate`
const negateFunction: Negate = (value) => value * -1;

console.log(negateFunction(10));