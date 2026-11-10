class Solution {
    /**
     * @param {number[][]}
     * @return {number[]}
     */
    getOrder(tasks) {
        let n = tasks.length;

        // 1. Map each task to incorporate its original index [enqueueTime, processingTime, originalIndex]
        const sortedTasks = [];
        for (let i = 0; i < n; i++) {
            sortedTasks.push([tasks[i][0], tasks[i][1], i]);
        }

        // Sort tasks chronological by their release/enqueue times
        sortedTasks.sort((a, b) => a[0] - b[0]);

        const minHeap = new PriorityQueue((a, b) => (a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]));

        const result = [];
        let i = 0;
        let time = sortedTasks[0]?.[0] ?? 0;
        while (i < n || !minHeap.isEmpty()) {
            // Enqueue available tasks (those whose enqueue time <= current time)
            while (i < n && sortedTasks[i][0] <= time) {
                minHeap.enqueue([sortedTasks[i][1], sortedTasks[i][2]]);
                i++;
            }

            if (minHeap.isEmpty()) {
                time = sortedTasks[i][0];
            } else {
                // Dequeue the task with the smallest processing time (and smallest index in case of ties)
                const [procTime, index] = minHeap.dequeue();
                time += procTime;
                result.push(index);
            }
        }
        // Return the order of processed tasks based on their original indices
        return result;
    }
}
