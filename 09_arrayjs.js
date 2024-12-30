// array

const myArr = [0, 1, 2, 3, 4, 5]
/*const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
console.log(typeof myArr)
 console.log(myArr[1]);  */

// Array methods

 /*myArr.push(6)
 console.log(myArr)

 myArr.pop()
 console.log(myArr)
myArr.unshift(9)
console.log(myArr)
 myArr.shift()
 console.log(myArr)

console.log(myArr.includes(9));  //use to find any element is in array or not
console.log(myArr.indexOf(3));

const newArr = myArr.join() //convert the array into string

console.log(myArr);
console.log( newArr);
console.log(typeof newArr)
*/

// slice, splice
/*
console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);  
*/
/*
const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

 marvel_heros.push(dc_heros)

console.log(marvel_heros);
console.log(marvel_heros[3][1]);

//const allHeros = marvel_heros.concat(dc_heros)
//console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]

console.log(all_new_heros);  */

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)  //this function give o/p in nrew array
console.log(real_another_array);      // convert multiple array into single array



console.log(Array.isArray("Hitesh")) // use to check weather a given is array or not 
console.log(Array.from("Hitesh"))   // use to create a array
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));