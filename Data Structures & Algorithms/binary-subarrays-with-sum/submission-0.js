class Solution {
    /**
     * @param {number[]} nums
     * @param {number} goal
     * @return {number}
     */
    numSubarraysWithSum(nums, goal) {
        let preFixSum = 0;
        let res = 0;
        const map = new Map();
        map.set(0, 1);

        for (const num of nums) {
            preFixSum += num;
            res += map.get(preFixSum - goal) || 0;
            map.set(preFixSum, (map.get(preFixSum) || 0) + 1);
        }
        return res;
    }
}
