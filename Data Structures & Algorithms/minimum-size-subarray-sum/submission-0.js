class Solution {
    /**
     * @param {number} target
     * @param {number[]} nums
     * @return {number}
     */
    minSubArrayLen(target, nums) {
        const size = nums.length;
        let i = 0;
        let j = 0;
        let sum = 0;
        let minLength = Infinity;

        while(j < size) {
            sum += nums[j];
            while(sum >= target) {
                minLength = Math.min(minLength, j - i + 1)
                sum -= nums[i];
                i++;
            }
            j++;
        }
        return minLength === Infinity ? 0 : minLength;
    }
}
