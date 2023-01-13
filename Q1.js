function firstQuestion(str, n) {
    let newString = ''
    let oldCursor = 0
    let charACounter = 0
    for (let i = 0; i < n; i++) {
        if (oldCursor >= str.length) {
            oldCursor = 0
        }
        newString = newString + str[oldCursor]
        oldCursor++;
    }
    for (let i = 0; i < newString.length; i++) {
        if (newString[i] == 'a') {
            charACounter++
        }
    }
    return charACounter
}
console.log(firstQuestion('abcd', 10))