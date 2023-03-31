let p=document.getElementById("demo");

let text = '{"employees":[' +
'{"firstName":"Kiruthika","lastName":"  Venkatachalam" },' +
'{"firstName":"John","lastName":"Smith" },' +
'{"firstName":"Peter","lastName":"Jones" }]}';

const obj = JSON.parse(text);// to convert the string into a JavaScript object:
p.innerHTML =obj.employees[0].firstName + " " + obj.employees[0].lastName;