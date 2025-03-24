/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let map = {};
    let stack = [];
    let sol = [];

    for(let num of nums2){
        while(num > stack[stack.length - 1]){
            let poppedNum = stack.pop();
            map[poppedNum] = num;
        }
        stack.push(num);
    }
    
    while(stack.length > 0){
        map[stack.pop()] = -1;
    }

    for(let num of nums1){
        sol.push(map[num]);
    }

    return sol;
};