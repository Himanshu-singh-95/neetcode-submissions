class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting(grid) {
        const rows = grid.length;
        const cols = grid[0].length;
        let fresh = 0;
        let rotten = [];
        let minutes = 0;

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                if (grid[r][c] === 1) {
                    fresh++;
                }
                if (grid[r][c] === 2) {
                    rotten.push([r, c]);
                }
            }
        }

        const rotCell = (r, c, nextRotten) => {
            if (r >= 0 && r < rows && c >= 0 && c < cols && grid[r][c] === 1) {
                grid[r][c] = 2;
                nextRotten.push([r, c]);
                fresh--;
            }
        };

        while (rotten.length > 0 && fresh > 0) {
            const nextRotten = [];
            for (const [r, c] of rotten) {
                rotCell(r - 1, c, nextRotten); // up
                rotCell(r + 1, c, nextRotten); // down
                rotCell(r, c - 1, nextRotten); // left
                rotCell(r, c + 1, nextRotten); // right
            }
            rotten = nextRotten;
            minutes++;
        }

        return fresh === 0 ? minutes : -1;
    }
}
