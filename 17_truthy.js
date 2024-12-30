const userEmail = []
/*
if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
} */

// ******************************************************************************************************************

// falsy values

// false, 0, -0, BigInt 0n, "" (empty string), null, undefined, NaN

//truthy values

// "0", 'false', " " (string with space), [], {} (empty object), function(){}
/*
if (userEmail.length === 0) {
    console.log("Array is empty");
 }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
} */

// Nullish Coalescing Operator (??): null ya undefined ke sath use hota hai

let val1;
// val1 = 5 ?? 10
// val1 = null ?? undefined  o/p - undefined
// val1 = undefined ?? null  o/p - null

// val1 = null ?? 10 ?? 20



// console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("more than 80") : console.log("not less than 80")