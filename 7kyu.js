// Reverse words
function reverseWords(str) {
    return str.split(' ').map(el => el.split('').reverse().join('')).join(' ')
}

// Ones and Zeros
const binaryArrayToNumber = arr => {
    return parseInt(arr.join(""), 2)
};

// Descending Order
function descendingOrder(n) {
    return Number(n.toString().split('').sort((a, b) => b - a).join(''))
}

// Is this a triangle?
function isTriangle(a, b, c) {
    if (a + b > c && a + c > b && b + c > a) {
        return true
    } else {
        return false
    }
}

// Highest and Lowest
function highAndLow(numbers) {
    let a = numbers.split(' ').sort((a, b) => a - b)
    return (a[a.length - 1] + ' ' + a[0])
}

// Categorize New Member
function openOrSenior(data) {
    const arr = []
    data.forEach(el => {
        el[0] >= 55 && el[1] > 7 ? arr.push('Senior') : arr.push('Open')
    })
    return arr
}

// Vowel Count
function getCount(str) {
    let count = 0
    let arr = [...str].forEach(el => el == 'a' || el == 'e' || el == 'i' || el == 'o' || el == 'u' ? count++ : null)
    return count
}

// Odd or Even?
function oddOrEven(array) {
    let count = 0
    array.forEach(i => {
        return count += i
    })
    return count % 2 === 0 ? 'even' : 'odd'
}

// Testing 1-2-3
let number = function (array) {
    return array.map((el, index) => `${index + 1}: ${el}`)
}
// The highest profit wins!
function minMax(arr){
  let result = []
  let min = Math.min.apply(null, arr)
  let max = Math.max.apply(null, arr)
  return result = [min, max]
}
// Friend or Foe?
function friend(friends){
  return friends.filter(f => f.length === 4)
}
// Shortest Word
function findShort(s){
  let length = s.split(' ').map(word => word.length).sort((a, b) => a - b)
  return length[0]
}
// Spin Around, Touch the Ground
function spinAround(turns) {
  if (turns.length === 0) {
    return 0
  } else {
    const arr = []
    turns.map(el => {
    if (el === 'right') {
      arr.push(el = 90)
    } else if (el === 'left') {
      arr.push(el = -90)
    }
  })
    return Math.floor(Math.floor(Math.abs(arr.reduce((prev, item) => prev + item) / 360)))
  }
}
// Anagram Detection
var isAnagram = function(test, original) {
  console.log(test.toLowerCase().split('').sort().join(''))
  let a = test.toLowerCase().split('').sort().join('')
  let b = original.toLowerCase().split('').sort().join('')
  return a === b
};
