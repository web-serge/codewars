// Transportation on vacation
function rentalCarCost(d) {
  return d * 40 - (d >=7 ? 50 : d >=3 ? 20 : 0)
}

// Calculate BMI
function bmi(weight, height) {
  const bmi = weight / height ** 2
  return bmi <= 18.5 ? 'Underweight' : bmi <= 25.0 ? 'Normal' : bmi <= 30.0 ? 'Overweight' : bmi > 30 ? 'Obese' : null
}
