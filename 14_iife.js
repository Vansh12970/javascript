// Immediately Invoked Function Expressions (IIFE)

  // named IIFE function
(function chai(){
    console.log(`DB CONNECTED`);
})();  // here semicolan use to close the function execution

// unnamed iife

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('vansh')
