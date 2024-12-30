// promise are also object
/*
const promiseOne = new Promise(function(resolve, reject){
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function(){
        console.log('Async task is compelete');
        resolve()
    }, 1000)
})

promiseOne.then(function(){
    console.log("Promise consumed");
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task 2");
        resolve()
    }, 1000)

}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Chai", email: "chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
})
*/
// resolve and reject prameters use

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "hitesh", password: "123"})
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000)
})
/*
 promiseFour
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

*/

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "javascript", password: "123"})
        } else {
            reject('ERROR: JS went wrong')
        }
    }, 1000)
});

//async await method

// async function name(params) {
    
// }
 /*
async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}
/*
consumePromiseFive()
//**************************************************************************************************** 

 async function getAllUsers(){
     try {
         const response = await fetch('https://jsonplaceholder.typicode.com/users')
// fetch give responses in form of string with the help of json() we convert the date back into the object

        const data = await response.json()

        console.log(typeof(data))
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}
getAllUsers()
*/
// fetch return response
// don't need to use await with .then as the another task doesn't execute till the going on one complete


fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
   // console.log(data)
    console.log(data.avatar_url)
   // return data;
}).catch((error) => console.log(error))

const imageObject = {
    name: 'example',
    path:  'https://avatars.githubusercontent.com/u/11613311?v=4 ',
    width: 800,
    height: 600,
  };
  
  console.log(imageObject);
  

// promise.all
/*
Resolves When All Promises Are Fulfilled:

Promise.all returns a single promise that resolves when all the promises in the array are resolved.
The resolved value is an array of the results in the same order as the input promises.
Rejects When Any Promise Fails:

If any promise in the array is rejected, Promise.all immediately rejects with the reason of the first promise that failed, discarding other results. */
/*
Promise.all([promiseFour, promiseFive])
.then(user => {
    console.log(user)
}).catch(error => {
    console.log(error)
}) */

    