/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
    let combinedArray = arr1.concat(arr2);
    let merged = {};

    combinedArray.forEach((obj) => {
        const id = obj.id;
        if (!merged[id]) {
            merged[id] = { ...obj };
        } else {
            merged[id] = { ...merged[id], ...obj };
        }
    })
    return Object.values(merged);


};