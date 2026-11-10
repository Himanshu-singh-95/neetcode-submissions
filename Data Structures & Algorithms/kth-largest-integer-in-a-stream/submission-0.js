class KthLargest {
  /**
   * @param {number} k
   * @param {number[]} nums
   */
  constructor(k, nums) {
    this.k = k;
    this.minHeap = new MinPriorityQueue();
    for (const num of nums) {
      this.minHeap.enqueue(num);
    }
    while (this.minHeap.size() > k) {
      this.minHeap.dequeue();
    }
  }

  add(val) {
    this.minHeap.enqueue(val);
    if (this.minHeap.size() > this.k) {
      this.minHeap.dequeue();
    }
    return this.minHeap.front();
  }
}
