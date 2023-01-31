// //num => amount of change

// //price
// const price = 1.50

// const denominations = {
//     //bills
//     10: "Ten-dollar bill",
//     5: "Five-dollar bill",
//     1: "One-dollar bill",
//     //coins
//     0.25: "Quarter",
//     0.10: "Dime",
//     0.05: "Nickel",
//     0.01: "Penny"
// }

// const convertChange =(castTendered)=> {
//     let returnArr = []

//     //first find how much cash to give back
//     let cashToReturn = castTendered - price

//     let tens
//     let fives
//     let ones

//     let quarters
//     let dimes
//     let nickels
//     let pennies

//     //convert cash to return to denominations

//     tens = Math.floor(cashToReturn / 10)
//     returnArr.push(`${tens} ten dollar bills.`)
//     cashToReturn = cashToReturn - (tens * 10)

//     fives = Math.floor((cashToReturn - (tens * 10)) / 5)
//     returnArr.push(`${fives} five dollar bills.`)
//     cashToReturn = cashToReturn - (fives * 5)

//     ones = Math.floor(cashToReturn)
//     returnArr.push(`${ones} one dollar bills.`)
//     cashToReturn = cashToReturn - ones

//     //change

// }

const price = 1.50

function vendingMachine (tendered) {
    let giveThisBack = []
    
    let remainder = tendered - price

    const conversionArr = [10, 5, 2, 1, 0.25, 0.1, 0.05, 0.01]

    for (let i = 0; i < conversionArr.length; i++) {
        
        let pushValue =  Math.floor(remainder / conversionArr[i])
        giveThisBack.push(pushValue)
        remainder = remainder - (pushValue * conversionArr[i])
    }
    
    return giveThisBack
}

console.log(convertChange(98)) // [9, 1, 3 ]