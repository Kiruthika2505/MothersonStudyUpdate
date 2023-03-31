//interface

// interface Rectangle {
//     height: number,
//     width: number
//   }

//   const rectangle: Rectangle = {
//     height: 20,
//     width: 10
//   };
//   console.log(rectangle);

//Extending Interfaces

interface Rectangle {
    height: number,
    width: number
}

interface Rectangle1 extends Rectangle {
    color: string
}

const rectangle: Rectangle1 = {
    height: 20,
    width: 10,
    color: "red"
};
console.log(rectangle);