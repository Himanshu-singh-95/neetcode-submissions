class Solution {
    /**
     * @param {number} m
     * @param {number} n
     * @return {number}
     */
    uniquePaths(m, n) {
        const memo = Array.from({ length: m }, () => new Array(n).fill(-1));
        const dp = (i, j) => {
            if (i === 0 && j === 0) return 1;

            if (i < 0 || j < 0) return 0;

            if (memo[i][j] !== -1) return memo[i][j];

            return (memo[i][j] = dp(i - 1, j) + dp(i, j - 1));
        };

        return dp(m - 1, n - 1);
    }
}
