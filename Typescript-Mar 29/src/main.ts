let myname : string;

let age:number;

let loading:boolean;

let year:any;

let birthday:string|number;

myname="kiruthi";

age=21;

loading=true

year=2001

console.log(myname+"\n"+age+"\n"+loading+"\n"+year);

const json = JSON.parse("55");
console.log(typeof json);

let y: undefined = undefined;
console.log(typeof y);

let z: null = null;
console.log(typeof z);


//Array

const names: string[] = [];

names.push("Twenty one"); // no error

names.push("Kiruthi");

console.log(names);

const named: readonly string[] = ["Dylan"];  //Error: Property 'push' does not exist on type 'readonly string[]'.

// define our tuple
let ourTuple: [number, boolean, string];

// initialize the value
ourTuple = [5, false, 'Coding God was here'];

// define our readonly tuple
const ourReadonlyTuple: readonly [number, boolean, string] = [5, true, 'The Real Coding God'];// throws error as it is readonly.

