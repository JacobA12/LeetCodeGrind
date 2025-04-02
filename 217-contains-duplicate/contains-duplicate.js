/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let numMap = {};

    for(let num of nums){
        if(numMap[num]){
            return true;
        }else{
            numMap[num] = 1;
        }
    }

    return false;
};