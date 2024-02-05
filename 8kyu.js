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
// Sort and Star
function twoSort(s) {
  return s.sort()[0].split('').join('***')
}
// Abbreviate a Two Word Name
function abbrevName(name){
     return name.split(' ').map(el => el.slice(0,1).toUpperCase()).join('.')
}
// Remove String Spaces
function noSpace(x){
  return x.split('').filter(el => el !== ' ').join('')
}
// Super Duper Easy
function problem(x){
  return typeof x === 'number' ? x * 50 + 6 : 'Error'
}
// Exclamation marks series #1: Remove an exclamation mark from the end of string
function remove (string) {
  let arr = [...string]
  if (arr[arr.length - 1] === '!') {
    arr.pop(arr[arr.length - 1])
  }
   return arr.join('')
}
// Find the smallest integer in the array
class SmallestIntegerFinder {
  findSmallestInt(args) {
    return Math.min.apply(null,args)
  }
}
// No zeros for heros
function noBoringZeros(n) {
  let array = n.toString().split('')
  for (let i = array.length; i > 0; i--) {
    if (array[array.length - 1] === '0') {
      array.pop(array[array.length - 1])
    } else break
  }
  return Number(array.join(''))
}
// Count of positives / sum of negatives
function countPositivesSumNegatives(input) {
  let count = 0
  let sum = 0
  if (!input || input.length === 0) return []
  for (let i = 0; i < input.length; i++) {
    if (input[i] > 0) {
      count++
    } else if (input[i] < 0) {
      sum += input[i]
    } 
  }
    return [count, sum]
}
// Exclamation marks series #11: Replace all vowel to exclamation mark in the sentence
function replace(s){
  return s.replace(/[aeiou]/gi, '!')
}
// Is the string uppercase?
String.prototype.isUpperCase = function() {
  for (let i = 0; i < this.length; i++){
    if (this[i] !== this[i].toUpperCase()) {
      return false
    }
  }
  return true
}
// A wolf in sheep's clothing
function warnTheSheep(arr) {
  const idx = arr.reverse().indexOf('wolf')
  return  idx > 0 ? `Oi! Sheep number ${idx}! You are about to be eaten by a wolf!` : "Pls go away and stop eating my sheep"
}
// How old will I be in 2099?
function  calculateAge(a, b) {
  if (a === b) return 'You were born this very year!'
  
  const result = Math.abs(a - b)
  const word = result === 1 ? 'year' : 'years'
  
  if (a < b) return `You are ${result} ${word} old.`
  if (a > b) return `You will be born in ${result} ${word}.`
}
// Name Shuffler
function nameShuffler(str){
  const result = str.split(' ').reverse().join(' ')
  return result
}
