class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    minPathSum(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const memo = Array.from({ length: m }, () => new Array(n).fill(-1));

        const dp = (i, j) => {
            // 1. Out of bounds -> return Infinity so Math.min ignores this path
            if (i < 0 || j < 0) return Infinity;

            // 2. Base case: cost to reach top-left cell is its own value
            if (i === 0 && j === 0) return grid[0][0];

            // 3. Return cached result
            if (memo[i][j] !== -1) return memo[i][j];

            // 4. Current cell value + cheaper of coming from top or left
            return (memo[i][j] = grid[i][j] + Math.min(dp(i - 1, j), dp(i, j - 1)));
        };

        return dp(m - 1, n - 1);
    }
}
