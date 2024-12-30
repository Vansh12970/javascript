/* 
// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

//object
const JsUser = {
    name: "Vansh", //name is key , "vansh" is value
    "full name": "Vansh Pratap Singh",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "ram@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email)
//2nd method is use to access when key and value from object (whenever the  key is as a string)
console.log(JsUser["email"])
console.log(JsUser["full name"])
console.log(JsUser[mySym])


JsUser.email = "ankita@chatgpt.com"
Object.freeze(JsUser)
JsUser.email = "vansh@microsoft.com"
console.log(JsUser);

JsUser.greeting = function(){
  console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
 console.log(`Hello JS user, ${this.name}`);
}

//console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
*/
//----------------object Part -2 ----------------------------------------------------------

// const tinderUser = new Object() //object declare using constructor so it is singleton
 
const tinderUser = {} //empty object
// key and value declare outside object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

//console.log(regularUser.fullname.userfullname.firstname); 

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = { obj1, obj2 }  // its like array inside array bad approch
//const obj3 = Object.assign({}, obj1, obj2, obj4)
// all values inside the key {}

const obj3 = {...obj1, ...obj2}
 //console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser));

//console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}


// destructure of object
const {courseInstructor} = course
// here the key name change from courseinstructor to instructor
const {courseInstructor: instructor} = course

console.log(courseInstructor);
console.log(instructor);

