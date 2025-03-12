/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let filteredString = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0;
    let right = filteredString.length - 1;

    while(left < right){
        if(filteredString.charAt(left) !== filteredString.charAt(right)){
            return false;
        }
        left++;
        right--;
    }

    return true;

};