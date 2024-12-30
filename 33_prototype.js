// let myName = "hitesh     "
// let mychannel = "chai     "

// console.log(myName.trueLength);


let myHeros = ["thor", "spiderman"]


let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    
    }
}

Object.prototype.hitesh = function(){
    console.log(`hitesh is present in all objects`);
}

Array.prototype.heyHitesh = function(){
    console.log(`Hitesh says hello`);
}

//console.log(heroPower.getSpiderPower())
//object.prototype accessible by all array , object, string

// heroPower.hitesh()
// myHeros.hitesh()

//array prototype are accessible only by array not by objects
//myHeros.heyHitesh()

// heroPower.heyHitesh()

// inheritance

const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport  //_ _proto_ _:Jiski property inherit karni hai
}
//property inherit outside object

Teacher.__proto__ = User

// modern syntax
//teachingSupport(array, string) jiski property inherit karni hai,,,,,,//teacher jismey property inherit karni h
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

"   vanshpratapsingh   ".trueLength()
//anotherUsername.trueLength()
//"hitesh".trueLength()
//"iceTea".trueLength()