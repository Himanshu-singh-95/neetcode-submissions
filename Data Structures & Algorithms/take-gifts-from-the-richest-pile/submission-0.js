class Solution {
    /**
     * @param {number[]} gifts
     * @param {number} k
     * @return {number}
     */
    pickGifts(gifts, k) {
        const maxHeap = new MaxPriorityQueue();

        for(const pile of gifts) {
            maxHeap.enqueue(pile);
        }

        for(let i = 0; i < k; i++) {
            const pile = maxHeap.dequeue();
            maxHeap.enqueue(Math.floor(Math.sqrt(pile)));
        }

        let res = 0;
        while(!maxHeap.isEmpty()) {
            res += maxHeap.dequeue();
        }

        return res;
    }
}
