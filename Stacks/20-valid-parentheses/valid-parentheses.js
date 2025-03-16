/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const mappings = {
        ")": "(",
        "}": "{",
        "]": "[",
    };
    const stack = [];
    for (let char of s) {
        if (mappings[char]) {
            const topElement = stack.length ? stack.pop() : "#";
            if (topElement !== mappings[char]) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }
    return stack.length === 0;
};