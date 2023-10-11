// Reverse words
function reverseWords(str) {
  return str.split(' ').map(el => el.split('').reverse().join('')).join(' ')
}

// Ones and Zeros
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2)
};

// Descending Order
function descendingOrder(n){
  return Number(n.toString().split('').sort((a,b) => b - a).join(''))
}

// Is this a triangle?
function isTriangle(a,b,c)
{
    if (a + b > c && a + c > b && b + c > a) {
     return true
   } else {return false}
}

// Highest and Lowest
function highAndLow(numbers){
  let a = numbers.split(' ').sort( (a,b) => a - b)
  return (a[a.length-1]+ ' ' +a[0])
}

// Categorize New Member
function openOrSenior(data){
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