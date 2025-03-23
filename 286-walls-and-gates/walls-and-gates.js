const EMPTY = 2147483647;
const GATE = 0;
const WALL = -1;
const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

/**
 * @param {number[][]} rooms
 * @return {void} - modifies rooms in-place
 */
var wallsAndGates = function (rooms) {
    if (!rooms || rooms.length === 0) return;

    const m = rooms.length;
    const n = rooms[0].length;

    // Step 1: Put all gates into the queue
    const queue = [];
    for (let row = 0; row < m; row++) {
        for (let col = 0; col < n; col++) {
            if (rooms[row][col] === GATE) {
                queue.push([row, col]);
            }
        }
    }

    // Step 2: Perform BFS from all gates at once
    while (queue.length > 0) {
        const [row, col] = queue.shift();

        // Explore the four directions
        for (let [dr, dc] of DIRECTIONS) {
            const r = row + dr;
            const c = col + dc;

            // If out of bounds, a wall, or not empty, skip
            if (r < 0 || r >= m || c < 0 || c >= n || rooms[r][c] !== EMPTY) {
                continue;
            }

            // Update distance: 1 step more than the distance at the current cell
            rooms[r][c] = rooms[row][col] + 1;

            // Enqueue this cell to continue BFS
            queue.push([r, c]);
        }
    }
};
