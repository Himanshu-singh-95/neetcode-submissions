class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @param {number} multiplier
     * @return {number[]}
     */
    getFinalState(nums, k, multiplier) {
        let n = nums.length;

        // Initialize with custom sorting and tie-breaker for identical values
        let minHeap = new PriorityQueue((a, b) => {
            if (nums[a] !== nums[b]) {
                return nums[a] - nums[b];
            }
            return a - b;
        });

        // Populate heap with initial index pointers
        for (let i = 0; i < n; i++) {
            minHeap.enqueue(i);
        }

        // Optimize: Standardize loop execution for JIT optimization compiler steps
        for (let i = 0; i < k; i++) {
            let idx = minHeap.dequeue();
            nums[idx] *= multiplier;
            minHeap.enqueue(idx);
        }

        return nums;
    }
}
