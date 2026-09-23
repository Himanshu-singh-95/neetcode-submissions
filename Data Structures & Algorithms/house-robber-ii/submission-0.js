class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  rob(nums) {
    const n = nums.length;
    if (n === 1) return nums[0];

    // Helper function for top-down linear recursion with memoization
    function robLinear(start, end) {
      const memo = Array.from({ length: n }, () => -1);

      function dp(i) {
        if (i > end) return 0; // Base case: past end boundary
        if (memo[i] !== -1) return memo[i];

        // Choice 1: Rob house i and skip house i+1
        const robCurrent = nums[i] + dp(i + 2);
        // Choice 2: Skip house i
        const skipCurrent = dp(i + 1);

        return (memo[i] = Math.max(robCurrent, skipCurrent));
      }

      return dp(start);
    }

    // Case 1: Rob within indices [0 ... N-2]
    const case1 = robLinear(0, n - 2);

    // Case 2: Rob within indices [1 ... N-1]
    const case2 = robLinear(1, n - 1);

    return Math.max(case1, case2);
  }
}
