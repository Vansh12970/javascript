const name = "vansh"
const repoCount = 50

console.log(name + repoCount + " Value");
//nowdays this method is use to do addition of arrays
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
//another important method to declare a string
const gameName = new String('vansh-pratap-singh')

console.log(gameName)

/*console.log(gameName[0]);
 console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));*/

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   vansh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //remove white spaces

const url = "https://vansh.com/vansh%20singh"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('a'));