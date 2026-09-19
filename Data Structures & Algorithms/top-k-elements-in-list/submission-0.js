class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
    let map = new Map();
    let bucket = [], result = [];

    for(let i of nums) {
        let count = map.get(i) || 0;
        map.set(i, count+1)
    }

    for(let [i, freq] of map) {
        bucket[freq] = (bucket[freq] || new Set()).add(i);
    }

    for(let i = bucket.length - 1; i >= 0; i--) {
        if(bucket[i]) result.push(...bucket[i]);
        if(result.length == k) return result;;
    }
    }
}
