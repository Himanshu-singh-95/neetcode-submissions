class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number}
     */
    subarraySum(nums, k) {
        const prefixSumMap = new Map();
        prefixSumMap.set(0, 1);
        let count = 0;
        let currSum = 0;

        for (const num of nums) {
            currSum += num;

            const diff = currSum - k;
            if (prefixSumMap.has(diff)) {
                count += prefixSumMap.get(diff);
            }

            prefixSumMap.set(currSum, (prefixSumMap.get(currSum) || 0) + 1);
        }
        return count;
    }
}
