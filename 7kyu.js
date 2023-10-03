// Reverse words
function reverseWords(str) {
  return str.split(' ').map(el => el.split('').reverse().join('')).join(' ')
}

// Ones and Zeros
const binaryArrayToNumber = arr => {
  return parseInt(arr.join(""), 2)
};
