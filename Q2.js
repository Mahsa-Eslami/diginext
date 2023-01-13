function secondQuestion(str) {
    let minimumRemoveCount = 0
    const testString = str.toUpperCase()
    for (let i = 0; i < testString.length - 1; i++) {
        if (testString[i] == 'A' && testString[i + 1] != 'B')
            minimumRemoveCount++
        if (testString[i] == 'B' && testString[i + 1] != 'A')
            minimumRemoveCount++
    }
    return minimumRemoveCount
}
console.log(secondQuestion('AABAAB'))