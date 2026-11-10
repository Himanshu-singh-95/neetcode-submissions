class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        // 1. Build the frequency map
        const freqMap = new Map();
        for (const task of tasks) {
            freqMap.set(task, (freqMap.get(task) || 0) + 1);
        }

        // 2. Initialize and fill the max-heap directly from map values
        let maxHeap = new MaxPriorityQueue();
        for (const freq of freqMap.values()) {
            maxHeap.enqueue(freq);
        }

        let time = 0;
        const coolDownQueue = [];
        while (!maxHeap.isEmpty() || coolDownQueue.length > 0) {
            time++;

            if (!maxHeap.isEmpty()) {
                const count = maxHeap.dequeue() - 1;
                if (count !== 0) {
                    // Push the remaining count and the timestamp when it becomes available
                    coolDownQueue.push([count, time + n]);
                }
            }

            // Check if the item at the front of our array has finished cooling down
            if (coolDownQueue.length > 0 && coolDownQueue[0][1] === time) {
                // shift() removes the first element from the array (FIFO behavior)
                const [count] = coolDownQueue.shift();
                maxHeap.enqueue(count);
            }
        }
        return time;
    }
}
