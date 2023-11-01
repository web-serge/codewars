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
