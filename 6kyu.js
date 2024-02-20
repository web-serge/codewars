// Break camelCase
function solution(string) {
    return string.split('').map(i => {
        if (i.toUpperCase() === i ) {
            i = ' ' + i
        }
        return i
    }).join('')
}
// Count the smiley faces!
function countSmileys(arr) {
  const result = []
  arr.forEach(el => {
    if (el.length === 2 && (el[0] === ':' || el[0] === ';') &&( el[1] === 'D' || el[1] === ')')) {
      result.push(el)
    } else if (el.length === 3 && (el[0] === ':' || el[0] === ';') && (el[1] === '~' || el[1] === '-')  && (el[2] === 'D' || el[2] === ')')) {
      result.push(el)
    } else return 0
  })
  return result.length
}
// Detect Pangram
function isPangram(string){
  let result = string.replace(/[^a-z]/gi, '').split('')
  result = new Set(result).size
  return result === 26 || result === 27
}
// Mexican Wave
function wave(str){
  const array = [...str]
  let count = 0
  const result = []
  array.forEach((el, idx, array) => {
      let copy = [...array]
      if (array[count] !== ' ') { 
        copy[count] = array[count].toUpperCase()
        result.push(copy.join(''))
        count++ } else {
        count++
      }})
  console.log(result)
  return result
}
// Find the unique number
function findUniq(arr) {
  const a = arr.reduce((acc, i) => {
    if (!!acc[i]) {
      acc[i].push(i)
    } else {
      acc[i] = [i]
    }
    return acc
  }, {})
  let result = Object.values(a)
  if (result[0].length < result[1].length) {
    return result[0][0]
  } else return result[1][0]
}
// Two Sum
function twoSum(numbers, target) {
    const result = []
    for (let i = 0; i < numbers.length; i++) {
      for (let j = 0; j < numbers.length; j++) {
        if (numbers[i] + numbers[j] === target && i !== j) {
          result.push(i)
          result.push(j)
          console.log(result)
          return result
        }
      }
    }
}
// Replace With Alphabet Position
function alphabetPosition(text) {
  const array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const result = []
  for (let i = 0; i < text.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (text[i].toLowerCase() === array[j]) {
        result.push(j+1)
      }
    }
  }
  console.log(result.join(' '))
  return result.join(' ')
}
// Array.diff
function arrayDiff(a, b) {
  const result = []
  if (a.length === 0) return []
  if (b.length === 0) return a
  for (let i = 0; i < a.length; i++) {
    console.log(a[i])
    if (b.indexOf(a[i]) === -1){
      result.push(a[i])
    } 
  }
  return result
}
// Who likes it?
function likes(names) {
  switch (true) {
      case names.length === 0: return 'no one likes this'
      case names.length === 1: return `${names[0]} likes this`
      case names.length === 2: return `${names[0]} and ${names[1]} like this`
      case names.length === 3: return `${names[0]}, ${names[1]} and ${names[2]} like this`
      default: return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
}
// Count characters in your string
function count(string) {
 let obj = string.split('').reduce((acc, i) => {
    !!acc[i] ? acc[i] +=1 : acc[i] = 1
    return acc
  }, {})
 return obj
}
// Meeting
function meeting(s) {
    const res = s.toUpperCase().split(';')
        .map(el => el.split(':').reverse().join(', '))
        .sort().join(')(')

    console.log(res)
    return `(${res})`
}
