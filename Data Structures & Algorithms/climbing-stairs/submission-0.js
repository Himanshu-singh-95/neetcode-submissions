class Solution {
  /**
   * @param {number} n
   * @return {number}
   */
  climbStairs(n) {
    const memo = new Array(n + 1).fill(-1);
    const climbStairsRec = (n) => {
      if (n <= 1) return 1;
      if (memo[n] !== -1) {
        return memo[n];
      }
      return (memo[n] = climbStairsRec(n - 1) + climbStairsRec(n - 2));
    };
    return climbStairsRec(n);
  }
}