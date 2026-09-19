class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const len = nums.length;
        let prefix = 1;
        let suffix = 1;
        const result = new Array(len).fill(0);
        result[0] = prefix;

        for(let i = 1; i < len; i++) {
            prefix = prefix * nums[i -1];
            result[i] = prefix;
        }

        for(let i = len - 1; i >= 0; i--) {
            result[i] = suffix * result[i];
            suffix = suffix * nums[i];
        }

        return result;
    }
}
