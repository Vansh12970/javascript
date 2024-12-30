// Dates

let myDate = new Date()
/*console.log(myDate)
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);
*/

let myCreatedDate = new Date(2024, 12, 1)
//let myCreatedDate = new Date(2023, 0, 23, 5, 3) //here i give date and time both
//let myCreatedDate = new Date("2023-01-14") //method yyyy/mm/dd here month start from 01
//let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());

/*let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));
*/
let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1); //month start from 0 so  +1
console.log(newDate.getDay() + 1 );  // day start from 0  so + 1


console.log(`${newDate.getDay()} and the time ${newDate.getTime()}`)

newDate.toLocaleString('default',  {
    weekday: "long",
    
})
