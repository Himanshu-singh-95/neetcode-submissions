class MedianFinder {
    constructor() {
        this.small = new MaxPriorityQueue(); // Smaller half
        this.large = new MinPriorityQueue(); // Larger half
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        // 1. Push into the max-heap `small` first
        this.small.enqueue(num);

        // 2. Ensure every element in `small` is <= every element in `large`
        if (
            this.small.size() > 0 &&
            this.large.size() > 0 &&
            this.small.front() > this.large.front()
        ) {
            const val = this.small.dequeue();
            this.large.enqueue(val);
        }

        // 3. Rebalance if sizes differ by more than 1
        if (this.small.size() > this.large.size() + 1) {
            const val = this.small.dequeue();
            this.large.enqueue(val);
        } else if (this.large.size() > this.small.size() + 1) {
            const val = this.large.dequeue();
            this.small.enqueue(val);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if (this.small.size() > this.large.size()) return this.small.front();
        if (this.large.size() > this.small.size()) return this.large.front();
        return (this.small.front() + this.large.front()) / 2;
    }
}
