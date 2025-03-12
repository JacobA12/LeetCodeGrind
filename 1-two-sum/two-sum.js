/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let numMap = {};

    for(let i = 0; i < nums.length; i++){
        //current number
        const num = nums[i];
        //determine if the difference between the target and current number is in the numMap
        if(target - num in numMap){
            //if it is then we have found the solution. We can return the current index, solution index
            return [i, numMap[target - num]];
        }
        //if not then we populate the numMap with the current number and its index
        numMap[num] = i;
    }
};