class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();

        for(let i = 0; i < nums.length; i++) {
            const compliment = target - nums[i];
            if(map.has(compliment)) {
                return [i, map.get(compliment)]
            }
            map.set(nums[i], i);
        }
        return [];
    }
}
