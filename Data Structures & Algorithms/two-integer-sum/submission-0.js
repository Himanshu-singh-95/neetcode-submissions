class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const len = nums.length;
        const map = new Map();
        for (let i = 0; i < len; i++) {
            const remaining = target - nums[i];
            if (map.has(remaining)) {
                return [map.get(remaining), i];
            }
            map.set(nums[i], i);
        }
        return [-1, -1];
    }
}
