const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

     getUserDetails : function (){
       console.log("Got user details from database");
         console.log(`Username: ${this.username}`);
     // console.log(this);
    }

}



//console.log(user.username)
//console.log(user.getUserDetails());

//this always refer current context
//console.log(this);


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}
// new keyword prevent value from overwrite and give the new instance

const userOne = new User("hitesh", 12, true)
//const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
//console.log(userOne);
//console.log(userTwo)