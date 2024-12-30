//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3

//--------------------------------------------------------------------------------------
// two types memory intialize in javascript
// stack(primitive)   heap (non-primitive)

let myName = "Vansh";

let anotherName = myName
//anotherName = "Ankita";
console.log(anotherName) // here only the value of another name change
console.log(myName)

let userOne = {
    email:"vanshpratapsinghgmail",
    upi: "vansh@ybl",
}

let userTwo = userOne;

userTwo.email = "raja@gmail.com" //here the value change in both userone and usertwo

console.log(userOne.email);  
console.log(userTwo.email);