class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        const ans = Array(len).fill(0);
        let left = 1;
        let right = 1;

        for(let i = 0; i < len; i++) {
            ans[i] = left;
            left *= nums[i];
        }

        for(let j = len -1; j >= 0; j--) {
            ans[j] *= right;
            right *= nums[j];
        }
        return ans;
    }
}
