/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length !== t.length){
        return false;
    }

    let sArr = Array.from(s).sort();
    let tArr = Array.from(t).sort();

    for(let i = 0; i < s.length; i++){
        if(sArr[i] !== tArr[i]){
            return false;
        }
    }

    return true;

    
};