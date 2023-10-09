// Break camelCase
function solution(string) {
    return string.split('').map(i => {
        if (i.toUpperCase() === i ) {
            i = ' ' + i
        }
        return i
    }).join('')
}
