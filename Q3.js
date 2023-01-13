function thirdQuestion(arr) {
    let minSwap = 0
    let newArr = []
    for (const numb of arr) {
        newArr.push(numb)
    }
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] == i + 1) {
            continue
        } else {
            let middle = newArr[i]
            newArr[i] = newArr[(newArr.indexOf(i + 1))]
            newArr[(newArr.indexOf(i + 1))] = middle
            minSwap++
        }
    }
    return minSwap
}
console.log(thirdQuestion([7,1,3,2,4,5,6]))