class Solution {
    /**
     * @param {number[][]} grid
     * @return {number}
     */
    uniquePathsWithObstacles(grid) {
        const m = grid.length;
        const n = grid[0].length;
        const memo = Array.from({ length: m }, () => new Array(n).fill(-1));

        const dp = (i, j) => {
            // 1. Out of bounds OR hit an obstacle -> 0 paths
            if (i < 0 || j < 0 || grid[i][j] === 1) return 0;

            // 2. Reached start (and we already know it's not an obstacle) -> 1 path
            if (i === 0 && j === 0) return 1;

            // 3. Return cached answer
            if (memo[i][j] !== -1) return memo[i][j];

            return (memo[i][j] = dp(i - 1, j) + dp(i, j - 1));
        };

        return dp(m - 1, n - 1);
    }
}
