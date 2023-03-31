const txt = '{"name":"Kiruthi","birth":"2001-05-25", "age":"function() {return 21;}","city":"Cbe"}' //object
const text = '[ "Ford", "BMW", "Audi", "Fiat" ]'; //Array
const obj = JSON.parse(txt);
obj.birth = new Date(obj.birth); //Converting string to date
obj.age = eval("(" + obj.age + ")"); //Converting string to function
const myArr = JSON.parse(text);
console.log(myArr[0]);//Array
console.log("Name:" + obj.name + ", " + "Birthday:" + obj.birth + ", " + "Age:" + obj.age());//Object