const clock = document.getElementById('clock');
// when u use getelement by id so don't need to use # or . operation

setInterval( function () {
  let date = new Date();
  //console.log(date.toLocaleTimeString());
 clock.innerHTML = date.toLocaleTimeString();
 },1000)

