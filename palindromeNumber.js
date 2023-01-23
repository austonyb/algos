var isPalindrome = function(x) {
    const reverseArr = x.toString().split('').reverse()

    if (reverseArr.count === 2 || x < 0) {
        return false
    } else if (x === 1) {
        return true
    } else {
        console.log(reverseArr)
            // console.log(reverseArr.join('') + " is the reverse arr")
            if (x.toString() === reverseArr.join('')) {
                return true
            } else {
                return false
            }
        }
    
}

console.log(isPalindrome(30009))