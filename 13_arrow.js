const user = {
    username: "hitesh",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
       //console.log(this);
    }
   //  ++++++++++++++ (this) use for current context +++++++++++++++++++++++++++++
}

//user.welcomeMessage()
//user.username = "sam"
//user.welcomeMessage()

//console.log(this);

/* function chai(){
    let username = "hitesh"
   console.log(this.username); //this use with ojects
}

chai()   */
/*
const chai = function () {
    let username = "hitesh"
   console.log(this.username);
}    // (this) doesn't work with function but this time the output is undefined
chai() 

*/  // ARROW FUNCTION
/*
const chai =  () => {
    let username = "hitesh"
    console.log(this);
}
 
//OUTPUT IS {} EMPTY CURLY BRACKET

 chai()  */

 //const addTwo = (num1, num2) => {
  //   return num1 + num2
  //   }

 // const addTwo = (num1, num2) =>  num1 + num2


 //******** USE SIMPLE PARENTESIS () AND NO NEED OF RETURN 
// const addTwo = (num1, num2) => ( num1 + num2 )

//const addTwo = (num1, num2) => ({username: "hitesh"})


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()