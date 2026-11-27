class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const heap = new MaxPriorityQueue(([num, _i]) => num);
        const output = [];
        const n = nums.length;

        for (let i = 0; i < n; i++) {
            heap.enqueue([nums[i], i]);

            if (heap.size() >= k) {
                const windowStart = i - k + 1;
                while (heap.front()[1] < windowStart) {
                    heap.dequeue();
                }
                output.push(heap.front()[0]);
            }
        }
        return output;
    }
}
