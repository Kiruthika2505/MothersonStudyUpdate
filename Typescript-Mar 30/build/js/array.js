"use strict";
let array1 = ["one", "two", "three"];
let array2 = [1, "Two", 3];
let array3 = [1, "Two", true];
array1[0] = "four";
array1.push("five");
console.log(array1);
array2[1] = 4;
array2.unshift("six");
console.log(array2);
console.log(array3);
