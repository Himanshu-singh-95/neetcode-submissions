class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    tribonacci(n) {
        const memo = Array.from({length: n + 1}, () => -1);
        const dp = (i) => {
            if(i == 0) return 0;
            if(i == 1 || i == 2) return 1;

            if(memo[i] !== - 1) {
                return memo[i];
            }

            return (memo[i] = dp(i - 1) + dp(i - 2) + dp(i - 3));
        }

        return dp(n);
    }
}
