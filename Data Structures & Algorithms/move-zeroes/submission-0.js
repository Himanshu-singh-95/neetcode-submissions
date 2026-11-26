class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    moveZeroes(nums) {
        for (let l = 0, r = 0; r < nums.length; r++) {
            if (nums[r] !== 0) {
                // Only swap when l and r are at different indices
                if (l !== r) {
                    [nums[l], nums[r]] = [nums[r], nums[l]];
                }
                l++;
            }
        }
    }
}
