/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function(s) {
    let wordMap = {};
    let numOdd = 0;
    for(let char of s){
        wordMap[char] = (wordMap[char] || 0) + 1;
    }

    for(let key of Object.keys(wordMap)){
        
        if(wordMap[key] % 2 !== 0){
            numOdd++;
            if(numOdd >= 2){
                return false;
            }
        }
    }

    return true;
};