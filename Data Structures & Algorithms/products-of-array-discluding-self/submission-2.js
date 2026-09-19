class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const n = nums.length;
        const result = new Array(n).fill(0);
        let prefix = 1;
        let suffix = 1;
        result[0] = prefix;
        for(let i = 1; i < n; i ++) {
            result[i] = result[i - 1] * nums[i-1];
        }

        for(let j = n-1; j >= 0; j--) {
            result[j] = result[j] * suffix;
            suffix *= nums[j];
        }
        return result;
    }
}
