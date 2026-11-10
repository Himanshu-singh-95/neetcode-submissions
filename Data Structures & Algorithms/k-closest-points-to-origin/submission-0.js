class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        // 1. Use MaxPriorityQueue to track the largest elements at the top
        // The priority extractor targets index 0: the pre-calculated distance
        const maxHeap = new MaxPriorityQueue((pointData) => pointData[0]);

        // 2. Stream all items through the size-K filter
        for (const [x, y] of points) {
            const dist = x ** 2 + y ** 2;
            maxHeap.enqueue([dist, x, y]);

            // If the heap grows past K, evict the maximum distance sitting at the root
            if (maxHeap.size() > k) {
                maxHeap.dequeue();
            }
        }

        // 3. Extract the remaining K closest elements from the heap wrappers
        const result = new Array(k);
        for (let i = k - 1; i >= 0; i--) {
            // Access .element to extract your raw [dist, x, y] array
            const [dist, x, y] = maxHeap.dequeue();
            result[i] = [x, y];
        }

        return result;
    }
}
