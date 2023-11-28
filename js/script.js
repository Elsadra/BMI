let $ = document;
let weightInput = $.querySelector("#weight");
let heightInput = $.querySelector("#height");
let result = $.querySelector("#result");
let weightVal = $.querySelector("#weight-val");
let heightVal = $.querySelector("#height-val");
let category = $.querySelector("#category");

function bmiCalculator() {
  let weightInputValue = weightInput.value;
  let heightInputValue = heightInput.value;

  weightVal.innerHTML = weightInputValue + " kg";
  heightVal.innerHTML = heightInputValue + " cm";

  let bmiValue = (
    weightInputValue / Math.pow(heightInputValue / 100, 2)
  ).toFixed(1);
  result.innerHTML = bmiValue;

  if (bmiValue < 18.5) {
    category.innerHTML = "Under Weight";
    result.style.color = "#ffc44d"
  } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
    category.innerHTML = "Normal weight";
    result.style.color = "#0be881"
  } else if (bmiValue >= 25 && bmiValue < 29.9) {
    category.innerHTML = "Over weight";
    result.style.color = "#ff884d"
  } else {
    category.innerHTML = "Obese";
    result.style.color = "#ff5e4d"
  }
}

weightInput.addEventListener("input", bmiCalculator);
heightInput.addEventListener("input", bmiCalculator);
