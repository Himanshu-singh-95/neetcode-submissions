class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let maxLen = 0;
        for(const num of nums) {
            if(!set.has(num - 1)) {
                let currentNum = num;
                let currentLen = 1;
                while(set.has(currentNum + 1)) {
                    currentNum++;
                    currentLen++;
                }
                maxLen = Math.max(maxLen, currentLen);
            }
        }
        return maxLen;
    }
}
