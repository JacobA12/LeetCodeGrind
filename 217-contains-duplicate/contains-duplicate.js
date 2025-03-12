/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let hashNums = {};

    for (let num of nums) { 
        if (!hashNums[num]) { 
            hashNums[num] = 1;
        } else {
            return true;
        }
    }

    return false;
};