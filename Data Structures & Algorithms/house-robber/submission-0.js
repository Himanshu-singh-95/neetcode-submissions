class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        const memo = Array.from({length: nums.length}, () => -1)
        const dp = (i) => {
            if(i >= nums.length) return 0;

            if(memo[i] !== -1) return memo[i];

            return (memo[i] = Math.max(nums[i] + dp(i+2), dp(i+1)));
        }

        return dp(0);
    }
}
