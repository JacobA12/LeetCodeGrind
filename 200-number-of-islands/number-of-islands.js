/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    // Edge case: empty or null grid
    if (!grid || grid.length === 0) return 0;

    const rows = grid.length;
    const cols = grid[0].length;
    let visited = new Set();
    let islands = 0;

    // Directions for up, down, left, right
    const DIRECTIONS = [[1, 0], [-1, 0], [0, 1], [0, -1]];

    const bfs = function (startRow, startCol) {
        let queue = [];
        // Mark the starting cell as visited and enqueue it
        visited.add(`${startRow},${startCol}`);
        queue.push([startRow, startCol]);

        while (queue.length > 0) {
            // Dequeue and destructure
            let [row, col] = queue.shift();

            // Explore the 4 neighbors
            for (let [dr, dc] of DIRECTIONS) {
                let nr = row + dr;  // neighbor row
                let nc = col + dc;  // neighbor col

                // Check bounds, land, and unvisited
                if (
                    nr >= 0 && nr < rows &&
                    nc >= 0 && nc < cols &&
                    grid[nr][nc] === "1" &&
                    !visited.has(`${nr},${nc}`)
                ) {
                    visited.add(`${nr},${nc}`);
                    queue.push([nr, nc]);
                }
            }
        }
    };

    // Main loop: scan the grid
    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (grid[r][c] === "1" && !visited.has(`${r},${c}`)) {
                // Found a new island; BFS from here
                bfs(r, c);
                islands++;
            }
        }
    }

    return islands;
};
