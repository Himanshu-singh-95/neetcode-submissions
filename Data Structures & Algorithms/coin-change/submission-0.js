class Solution {
  /**
   * @param {number[]} coins
   * @param {number} amount
   * @return {number}
   */
  coinChange(coins, amount) {
    const n = coins.length;
    // 2D Array: size n x (amount + 1) filled with -1
    const memo = Array.from({ length: n }, () =>
      new Array(amount + 1).fill(-1),
    );

    const dp = (rem, i) => {
      // Base Case 1: Exact target formed
      if (rem === 0) return 0;

      // Base Case 2: Out of coin types or amount went negative
      if (i >= n || rem < 0) return Infinity;
      // Memoization check
      if (memo[i][rem] !== -1) return memo[i][rem];

      let res;
      // Compare including coins[i] vs skipping to coins[i + 1]
      if (rem - coins[i] >= 0) {
        // Option 1: Include coins[i] (stay at index i because supply is unlimited),
        // Option 2: Exclude coins[i] (move to next index i + 1)
        res = Math.min(1 + dp(rem - coins[i], i), dp(rem, i + 1));
      } else {
        // Option 2: Exclude coins[i] (move to next index i + 1)
        res = dp(rem, i + 1);
      }

      memo[i][rem] = res;
      return res;
    };

    const result = dp(amount, 0);
    return result === Infinity ? -1 : result;
  }
}
