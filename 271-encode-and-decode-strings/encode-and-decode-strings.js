/**
 * Encodes a list of strings to a single string.
 *
 * @param {string[]} strs
 * @return {string}
 */

//use the length of the string and a '#' symbol as the delimmiter
// example : ["hello", "world"] -> 5#hello5#world -> ["hello", "world"]
// This way we can guarantee that we are able to encode it back and be chillin
var encode = function (strs) {
    let encodedString = "";
    let delimiter = '#'
    for (let word of strs) {
        let n = word.length;
        encodedString += n + delimiter + word;
    }

    return encodedString;
};

/**
 * Decodes a single string to a list of strings.
 *
 * @param {string} s
 * @return {string[]}
 */
var decode = function (s) {
    let currIdx = 0;
    let sol = [];
    while (currIdx < s.length) {
        let j = currIdx;
        while(s[j] !== '#'){
            j++;
            if(j >= s.length){
                return [];
            }
        }

        let wordLength = Number(s.substring(currIdx, j));
        let currWord = s.substring(j + 1, j + 1 + wordLength);
        sol.push(currWord);

        currIdx = j + 1 + wordLength;
    }

    return sol;
};

/**
 * Your functions will be called as such:
 * decode(encode(strs));
 */