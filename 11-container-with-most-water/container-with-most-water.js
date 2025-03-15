/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let left = 0;
    let right = height.length - 1;
    let maxSoFar = -Infinity;

    while (left < right) {
        let wallHeight = Math.min(height[left], height[right]);
        let length = right - left;
        maxSoFar = Math.max(maxSoFar, wallHeight * length);
        
        if(height[left] < height[right]){
            left++;
        }else{
            right--;
        }
    }

    return maxSoFar;


};