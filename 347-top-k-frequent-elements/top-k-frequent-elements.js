/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    let hm = {};

    const freq = Array.from({ length: nums.length + 1 }, () => 0);

    for (const num of nums) {
        hm[num] = (hm[num] || 0) + 1;
    }

    for (const key in hm) {
        freq[hm[key]] = (freq[hm[key]] || []).concat(key);
    }

    let ans = [];
    for (let j = freq.length - 1; j >= 0; j--) {
        for (let i = 0; i < freq[j].length && k > 0; i++) {
            ans.push(Number(freq[j][i]));
            k--;
        }
    }

    return ans;
};