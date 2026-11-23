class Solution {
    /**
     * @param {string} text1
     * @param {string} text2
     * @return {number}
     */
    longestCommonSubsequence(text1, text2) {
        const m = text1.length;
        const n = text2.length;
        const memo = Array.from({ length: m }, () => new Array(n).fill(-1));

        const dp = (i, j) => {
            // Base case: reached the end of either string
            if (i === m || j === n) return 0;

            if (memo[i][j] !== -1) return memo[i][j];

            // Case 1: Characters match -> take 1 + advance both pointers
            if (text1[i] === text2[j]) {
                return (memo[i][j] = 1 + dp(i + 1, j + 1));
            }

            // Case 2: Characters don't match -> skip a char from text1 OR text2
            return (memo[i][j] = Math.max(dp(i + 1, j), dp(i, j + 1)));
        };

        return dp(0, 0);
    }
}
