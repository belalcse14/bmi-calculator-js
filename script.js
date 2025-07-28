function bmiCalculate() {
  const weight = parseFloat(document.getElementById("weight-field").value);
  const height = parseFloat(document.getElementById("height-field").value);
  const bmi = weight / ((height / 39.37) * (height / 39.37));
  const bmiRound = bmi.toFixed(2);
  document.getElementById("bmi-value").innerText = `BMI:  ${bmiRound}`;

  //
  if (bmi < 18.5) {
    document.getElementById("bmi-text").innerText = `You are Underweight.`;
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    document.getElementById("bmi-text").innerText = `You are Normal.`;
  } else if (bmi >= 25 && bmi <= 29.9) {
    document.getElementById("bmi-text").innerText = `You are Overweight.`;
  } else {
    document.getElementById("bmi-text").innerText = `You are Obese.`;
  }
}
