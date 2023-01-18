/**
 * @param {string} s
 * @return {number}
 */

const conversion = {"M":1000, "D":500, "C":100, "L":50, "X":10, "V":5, "I":1}

var romanToInt = function(s) {
    let split = s.split('')

    let total = 0
    let current
    let currentValue
    let next
    let nextValue
    

    for(i = 0; i < split.length; i++){
        current = split[i]
        currentValue = conversion[current]

        next = split[i + 1]
        nextValue = conversion[next]

        if (currentValue < nextValue){
            total -= (currentValue)
        } else {
            total += (currentValue)
        }
    }
    
    return total
    
}

// romanToInt("MMMCIV")



