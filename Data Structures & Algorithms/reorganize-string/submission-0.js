class Solution {
    /**
     * @param {string}
     * @return {string}
     */
    reorganizeString(s) {
        // 1. Build the frequency map
        const freqMap = new Map();
        for (const char of s) {
            freqMap.set(char, (freqMap.get(char) || 0) + 1);
        }

        // 2. Initialize Max-Heap based on character counts
        const maxHeap = new MaxPriorityQueue((item) => item.count);

        // Fail-fast optimization check
        const maxLength = Math.ceil(s.length / 2);
        for (const [char, count] of freqMap.entries()) {
            if (count > maxLength) return ""; // Impossible to separate
            maxHeap.enqueue({ char, count });
        }

        let result = [];
        let prev = null; // Our 1-step cooldown tracking variable

        // 3. Process characters
        while (!maxHeap.isEmpty()) {
            // Extract the most frequent character available
            const current = maxHeap.dequeue();

            // Append it to our building string sequence
            result.push(current.char);
            current.count--;

            // If we have a character sitting in cooldown from the *last* turn,
            // it is now safe to put back into the active pool
            if (prev !== null && prev.count > 0) {
                maxHeap.enqueue(prev);
            }

            // Move the current character into the 1-step cooldown slot
            prev = current;
        }

        return result.length === s.length ? result.join("") : "";
    }
}