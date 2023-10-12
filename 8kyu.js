// Transportation on vacation
function rentalCarCost(d) {
  return d * 40 - (d >=7 ? 50 : d >=3 ? 20 : 0)
}

// Calculate BMI
function bmi(weight, height) {
  const bmi = weight / height ** 2
  return bmi <= 18.5 ? 'Underweight' : bmi <= 25.0 ? 'Normal' : bmi <= 30.0 ? 'Overweight' : bmi > 30 ? 'Obese' : null
}

// Calculate Price Excluding VAT
function excludingVatPrice(price){
  return price == null ? -1 : +(price / 1.15).toFixed(2)
}

// Quarter of the year
const quarterOf = (month) => {
  switch (true) {
    case month <= 3: return 1
    case month <= 6: return 2
    case month <= 9: return 3
    case month <=12: return 4
  }
}

// Switch it Up!
function switchItUp(number){
  return ["Zero","One","Two","Three","Four","Five","Six","Seven","Eight","Nine"][number]
}