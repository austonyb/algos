// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.


//example:
// Input: nums = [2,7,11,15], target = 9

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let num1
    let num2
    let returnArr = []

    for (let i = 0; i < nums.length; i++) {
        for (let j = 1; j < nums.length; j++) {
            if (i === j){
                continue
            } else  if (nums[i] + nums[j] === target){
                console.log(`${nums[i]} (${i})+ ${nums[j]} (${j}) = ` + (nums[i] + nums[j]))
                returnArr.push(i, j)
            } continue
        }
    }
    return returnArr.slice(0, 2)
}

const test1 = [2,7,11,15]
const test1Target = 9

const test2 = [3,2,4]
const test2Target = 6

const test3 = [2,5,5,11]
const test3Target = 10

//console.log(twoSum(test1, test1Target))
//console.log(twoSum(test2, test2Target))

console.log(twoSum(test3, test3Target))
