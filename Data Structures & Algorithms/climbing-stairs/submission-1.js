class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const memo = new Array(n).fill(-1);
        const dfs = (i) => {
            if (i === n) return 1; // Reached the top
            if (i > n) return 0; // Overshot the top

            if (memo[i] !== -1) return memo[i];
            return (memo[i] = dfs(i + 1) + dfs(i + 2));
        };
        return dfs(0);
    }
}
