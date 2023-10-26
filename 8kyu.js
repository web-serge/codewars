// Transportation on vacation
function rentalCarCost(d) {
    return d * 40 - (d >= 7 ? 50 : d >= 3 ? 20 : 0)
}

// Calculate BMI
function bmi(weight, height) {
    const bmi = weight / height ** 2
    return bmi <= 18.5 ? 'Underweight' : bmi <= 25.0 ? 'Normal' : bmi <= 30.0 ? 'Overweight' : bmi > 30 ? 'Obese' : null
}

// Calculate Price Excluding VAT
function excludingVatPrice(price) {
    return price == null ? -1 : +(price / 1.15).toFixed(2)
}

// Quarter of the year
const quarterOf = (month) => {
    switch (true) {
        case month <= 3:
            return 1
        case month <= 6:
            return 2
        case month <= 9:
            return 3
        case month <= 12:
            return 4
    }
}

// Switch it Up!
function switchItUp(number) {
    return ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"][number]
}

// Removing Elements
function removeEveryOther(arr) {
    return arr.filter((item, index) => index % 2 === 0)
}

// altERnaTIng cAsE <=> ALTerNAtiNG CaSe
String.prototype.toAlternatingCase = function () {
    let result = ''
    for (let i = 0; i < this.length; i++) {
        if (this[i] === this[i].toUpperCase()) {
            result += this[i].toLowerCase()
        } else {
            result += this[i].toUpperCase()
        }
    }
    return result
}

// Is it even?
function testEven(n) {
    return Number.isInteger(n) && n % 2 === 0 ? true : false
}

// Expressions Matter
function expressionMatter(a, b, c) {
    return Math.max(a * (b + c), a * b * c, a + b * c, (a + b) * c, a + b + c)
}

// Total amount of points
function points(games) {
    let result = 0
    games.map(el => {
        if (el[0] > el[2]) {
            result += 3
        } else if (el[0] < el[2]) {
            result += 0
        } else if (
            el[0] === el[2]) {
            result += 1
        }
    })
    return result
}
// What is between?
function between(a, b, result) {
  result = []
  for (let i = a; i <= b; i++){
    result.push(a++)
  }
  return result
}
// 5 without numbers !!
function unusualFive() {
  const name = 'Serge'
  return name.length;
}
