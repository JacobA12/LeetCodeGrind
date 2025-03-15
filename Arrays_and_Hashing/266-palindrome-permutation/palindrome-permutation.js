/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let map = new Array(128).fill(0);
    let count = 0;
    for(let i = 0; i < s.length; i++){
        map[s.charCodeAt(i)]++;
        if(map[s.charCodeAt(i)] % 2 === 0){
            count--;
        }else{
            count++;
        }
    }
    return count <= 1;
};