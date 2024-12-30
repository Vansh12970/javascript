//for in 
// ** doesn't work with map but work fine with array and object return values
// but  with string it return key not values
//syntax
/*
for (const key in object) {
    
}*/


const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);
}                                             // here bracket define value

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
 //   console.log(programming[key]);
}
/*
 const map = new Map()
 map.set('IN', "India")
 map.set('USA', "United States of America")
 map.set('Fr', "France")
 map.set('IN', "India")

 for (const key in map) {
    console.log(key);
}*/

const myname = "vansh pratap singh"
for ( const name in myname){
    console.log(name)
}
 // in output with string for-in doesn't give values but give key as output