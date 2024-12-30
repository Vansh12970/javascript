const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const guide = document.querySelector('#guide');

  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML = 'Please give a valid Height';
    //guide.innerHTML = ''; // Clear guide content
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please give a valid Weight';
   // guide.innerHTML = ''; // Clear guide content
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `<span>${bmi}</span>`;

    if (bmi <= 18.6) {
      guide.innerHTML = `<span>You are Underweight</span>`;
    } else if (bmi >= 24.6) {
      guide.innerHTML = `<span>You are Overweight</span>`;
    } else {
      guide.innerHTML = `<span>Normal BMI</span>`;
    }
  }
});
