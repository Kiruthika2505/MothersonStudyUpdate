// enum Directions {
//     North,
//     East,
//     South,
//     West
//   };

//   let currentDirection = Directions.South;

// // North is the first value so it logs '0'
// console.log(currentDirection);

//Numeric Enums-Fully Initialized
// enum StatusCodes {
//     NotFound = 404,
//     Success = 200,
//     Accepted = 202,
//     BadRequest = 400
//   }
//   // logs 404
//   console.log(StatusCodes.NotFound);
//   // logs 200
//   console.log(StatusCodes.Success);

//String Enums
enum Directions {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
};
// logs "North"
console.log(Directions.North);
// logs "West"
console.log(Directions.West);