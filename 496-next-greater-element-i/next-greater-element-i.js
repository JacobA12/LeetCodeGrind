/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function (nums1, nums2) {
    let sol = [];
    for (let i = 0; i < nums1.length; i++) {
        for (let j = nums2.indexOf(nums1[i]) + 1; j <= nums2.length; j++) {
            if (j === nums2.length) {
                sol.push(-1);
                break;
            }
            if (nums2[j] > nums1[i]) {
                sol.push(nums2[j]);
                break;
            }
        }

    }

    return sol;
};