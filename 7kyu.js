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
// Two to One
function longest(s1, s2) {
  return [...new Set(s1 + s2)].sort().join('')
}
// You're a square!
var isSquare = function(n){
  if (n < 0) return false
  
  let i = Math.ceil(Math.sqrt(n))
  console.log(i,n)
  return i * i === n ? true : false
}
// Find the middle element
function gimme (triplet) {
  return triplet.indexOf([...triplet].sort((a,b) => a-b)[1], 0)
}
// Remove the minimum
function removeSmallest(numbers) {
  let arr = [...numbers]
  let index = arr.indexOf(Math.min.apply(null, arr))
  arr.splice(index, 1)
  return arr
}
// Small enough? - Beginner
function smallEnough(a, limit){
  return a.every(el => el <= limit)
}
// Find the stray number
function stray(numbers) {
  let obj = numbers.reduce((acc, i) => {
    if (!!acc[i]) {
      acc[i].push(i)
    } else {
      acc[i] = [i]
    }
    return acc
  }, {})
  return Object.values(obj).filter(el => el.length === 1)[0][0]
}
// Alternate capitalization
function capitalize(s){
  const arrEven = []
  const arrOdd = []
  s.split('').forEach((el, idx) => {
    if (idx % 2 === 0) {
      arrEven.push(el.toUpperCase())
      arrOdd.push(el)
    } else {
      arrEven.push(el)
       arrOdd.push(el.toUpperCase())
    }
  })
  let result = [arrEven.join(''), arrOdd.join('')]
  return result
};
// Number of People in the Bus
var number = function(arr){
  return arr.flat().reduce((acc, el, idx) => {
      if (idx % 2 === 0) {
        acc += el
      } else acc -= el
      return acc
    },0)  
}
// Form The Minimum
function minValue(values){
  let arr = [...new Set(values)].sort().join('')
  return +arr
}
// Sum of Minimums!
function sumOfMinimums(arr) {
  return arr.map(el => el.sort((a, b) => a - b).splice(0, 1)).flat().reduce((acc, i) => acc + i)
}
// Sum of Minimums!
function sumOfMinimums(arr) {
  return arr.map(el => el.sort((a, b) => a - b).splice(0, 1)).flat().reduce((acc, i) => acc + i)
}
// Row Weights
function rowWeights(array){
  let arr = [0,0]
  array.forEach((i, idx) => {
    if (idx % 2 !== 0) {
      arr[1] += i
    } else {
      arr[0] += i
    }
  })
  return arr
}
// Make a function that does arithmetic!
function arithmetic(a, b, operator){
  switch (operator) {
      case 'add': return a + b;
      case 'subtract': return a - b;
      case 'multiply': return a * b;
      case 'divide': return a / b;
  }}
// Round up to the next multiple of 5
function roundToNext5(n){
  if (n % 5 === 0) {
      return n
  } else {
    for (let i = 0; i < 5; i++) {
      n++
      if (n % 5 === 0) return n
    }
  }
}
//
function accum(s) {
  let count = 0
  let arr = s.split('').map(el => {
    count++
    let word = el.repeat(count).toLowerCase()
    word = word[0].toUpperCase() + word.slice(1)
    console.log(word)
    return word
  })
  return arr.join('-')
}
// Fix string case
function solve(s){
    let lower = 0;
    let upper = 0;
    s.split('').forEach(el => {
        if (el === el.toUpperCase()) {
            upper++
        } else lower++
    })
                        
    return lower >= upper ? s.toLowerCase() : s.toUpperCase()
}
// Love vs friendship
function wordsToMarks(string){
  alphabet = {
        'a': 1,
        'b': 2,
        'c': 3,
        'd': 4,
        'e': 5,
        'f': 6,
        'g': 7,
        'h': 8,
        'i': 9,
        'j': 10,
        'k': 11,
        'l': 12,
        'm': 13,
        'n': 14,
        'o': 15,
        'p': 16,
        'q': 17,
        'r': 18,
        's': 19,
        't': 20,
        'u': 21,
        'v': 22,
        'w': 23,
        'x': 24,
        'y': 25,
        'z': 26,
    }
  let res = 0
  for (let i = 0; i < string.length; i++) {
    res += alphabet[string[i]]
  }
  return res
}
// Factorial
function factorial(n){
  if (n === 0 || n === 1) return 1
  return n * factorial(n - 1)
}
// Maximum Product
function adjacentElementsProduct(array) {
  const res = []
  array.forEach((el, idx) => {
    res.push(el * array[idx + 1])
  })
  return res.sort((a,b)=>b-a)[0]
}
// Greet Me
var greet = function(name) {
  const editedName = name[0].toUpperCase() + name.slice(1)
  return (`Hello ${editedName}!`)
};
