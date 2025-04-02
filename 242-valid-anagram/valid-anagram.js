/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    const freqArr = new Array(26).fill(0);
    for(let char of s){
        freqArr[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }

    for(let char of t){
        freqArr[char.charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    return !freqArr.some(count => count !== 0);
};