var c = 300
//let a = 300
if (true) {
    let a = 10
    const b = 20
    var c = 30
     //console.log("INNER: ", a);
    
}


//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
        console.log(website);
    }
 //console.log(website);

  //   two()

}

//one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
      //  console.log(username + website);
    }
    // console.log(website);
}

//console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


//console.log(addone(5))   //so here we can access a function before declare it

function addone(num){
    return num + 1
}




//addTwo(5)  //so here we can't access a function before declare it

const addTwo = function(num){
    return num + 2
}

addTwo(5)