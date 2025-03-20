var levelOrder = function (root) {
    var levels = [];
    if (root === null) return levels;
    var queue = [root];
    var level = 0;
    while (queue.length !== 0) {
        levels.push([]);
        var level_length = queue.length;
        for (var i = 0; i < level_length; i++) {
            var node = queue.shift();
            levels[level].push(node.val);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        level++;
    }
    return levels;
};