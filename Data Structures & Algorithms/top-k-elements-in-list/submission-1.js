class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const freqMap = new Map();
        const bucket = new Array(nums.length + 1).fill(null).map(() => []);
        for (const num of nums) {
            freqMap.set(num, (freqMap.get(num) || 0) + 1);
        }

        for(const [num, freq] of freqMap) {
            bucket[freq].push(num);
            }

        const result = [];

for (let i = bucket.length - 1; i >= 0 && result.length < k; i--) {
    if (bucket[i].length > 0) {
        result.push(...bucket[i]);
    }
            if(result.length == k) return result;;

}
        
    }
}