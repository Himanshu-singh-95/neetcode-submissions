class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    numSquares(n) {
        const memo = new Array(n + 1).fill(-1);

        const dp = (rem) => {
            if (rem === 0) return 0;
            if (memo[rem] !== -1) return memo[rem];

            let minCount = Infinity;
            const sqrt = Math.floor(Math.sqrt(rem));
            // Start from the largest possible square root and go down to 1
            for (let i = sqrt; i >= 1; i--) {
                minCount = Math.min(minCount, 1 + dp(rem - i * i));
            }

            return (memo[rem] = minCount);
        };

        return dp(n);
    }
}
