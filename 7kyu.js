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
