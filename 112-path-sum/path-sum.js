/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
    if (!root) {
        return false;
    }

    let stack = [[root, root.val]]; // [currentNode, currentSum]

    while (stack.length !== 0) {
        let [currNode, currSum] = stack.pop();

        if (!currNode.left && !currNode.right && currSum === targetSum) {
            return true;
        }

        if (currNode.left) {
            stack.push([currNode.left, currSum + currNode.left.val]);
        }

        if (currNode.right) {
            stack.push([currNode.right, currSum + currNode.right.val]);
        }

    }


    return false;
};