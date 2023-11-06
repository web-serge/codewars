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
//  Remove anchor from URL
function removeUrlAnchor(url){
    let index = 0
    for (let i = 0; i < url.length; i++) {
        if (url[i] === '#') index = i
    }
    if (index === 0) {
        return url
    } else {
        return url.split('').splice(0, index).join('')
    }
}
// Disemvowel Trolls
function disemvowel(str) {
  let newStr = ''
  for (let i = 0; i < str.length; i++) {
   let a = str.toLowerCase()
    if (a[i] !== 'a' && a[i] !== 'e' && a[i] !== 'i' && a[i] !== 'o' && a[i] !== 'u') newStr += str[i]
  }
  return newStr
}
// Find the capitals
var capitals = function (word) {
  const result = []
  word.split('').forEach((el, index) => {
    if (el === el.toUpperCase()) {
      result.push(index)
    }
  })
  return result
};
// Get the Middle Character
function getMiddle(s) { 
  const int = Math.floor(s.length/2)
  if (s.length % 2 === 0) {
    return s[int - 1]+s[int]
  } else return s[int]
}
// Sort Numbers
function solution(nums){
  if (nums) {
   return nums.sort((a, b) => a - b)
  } else return []
}
// Jaden Casing Strings
String.prototype.toJadenCase = function () {
  return this.split(' ').map(el => el[0].toUpperCase() + el.slice(1)).join(' ')
};
// String ends with?
function solution(str, ending){
  return str.endsWith(ending)
}
// Check the exam
function checkExam(array1, array2) {
  let result = 0
  array1.forEach((el, idx) => {
    console.log(el, idx)
    if (el === array2[idx]) {
      result += 4
    } else if (el !== array2[idx] && array2[idx] !== '') {
      result -= 1
    } else if (el !== array2[idx] && array2[idx] === '')
      result = result    
  })
  console.log(result)
  return result >= 0 ? result : 0
}
// Sort array by string length
function sortByLength (array) {
    return array.sort((a, b) => a.length-b.length)
}
