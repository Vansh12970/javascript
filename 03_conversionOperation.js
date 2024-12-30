//let score = "1" // u can pass a string also as a datatype to check type of it

//console.log(typeof score);
//console.log(typeof(score));

//let valueInNumber = Number(score)
//console.log(typeof valueInNumber);

/*if i pass a string as score value or when i print it as output
 i get (NaN) which means not a number */

//console.log(valueInNumber); 


// "33" => 33
// "33abc" => NaN
//  true => 1; false => 0

let isLoggedIn = "hitesh"

let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "hitesh" => true

let someNumber = 33

let stringNumber = String(someNumber)
//console.log(stringNumber);
//console.log(typeof stringNumber);

let x = "vansh"
let z = Number(x);
//console.log(z)
//console.log(typeof z)

// vansh as input using Number() converted into number
// so typeof() is number but outputvalue is NaN

// *********************** Operations ***********************

let value = 3
let negValue = -value
console.log(negValue);

// console.log(2+2);  /* These are the basic operations which we are using 
// console.log(2-2);     in general*/
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Vansh"

let str3 = str1 + str2   //basic operation to add two strings
//console.log(str3);

console.log("1" + 2);
console.log(1 + "2"); 
console.log("1" + 2 + 2); //all values are simpily written as they add in string
console.log(1 + 2 + "2"); //here the value are add and then string simpily written after

// console.log( (3 + 4) * 5 % 3); //not a good practice to write code use parenthsis

console.log(+true); //if i written (+true) the o/p is 1
console.log(+"");   // output is 0

let num1, num2, num3   /* it is not a good practice to write the code 
                         we have to increase the code readiability*/
num1 = num2 = num3 = 2 + 2
//console.log(num1)


let gameCounter = 100
//console.log(gameCounter);  //increment operations are use at prefix and postfix
++gameCounter;              // to increase the value
//console.log(gameCounter);
gameCounter++;
//console.log(gameCounter);
