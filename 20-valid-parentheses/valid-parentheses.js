/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    let mapping = {
        '}': '{',
        ']': '[',
        ')': '('
    }

    for (let char of s) {
        if (!mapping[char]) {
            stack.push(char);
            continue;
        }
        if ( mapping[char] !== stack.pop()) {
            return false;
        }
    }

    return stack.length === 0;
};