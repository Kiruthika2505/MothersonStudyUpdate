const fun={
    "Name":"Kiruthika",
    "Age":21,
    "marks":{
        "Java":100,
        "js":85
    },
    data:function(){
        return "Hi"+" "+this.Name;
    }
}
console.log(fun["Name"]);
console.log(fun["Age"]);
console.log(fun["marks"]);
console.log(fun.marks.Java);
console.log(fun.marks.js);
console.log(fun.data());