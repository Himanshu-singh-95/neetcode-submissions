class Solution {
  /**
   * @param {number[][]} trips
   * @param {number} capacity
   * @return {boolean}
   */
  carPooling(trips, capacity) {
    trips.sort((a, b) => a[1] - b[1]);

    const minHeap = new MinPriorityQueue((x) => x[0]);

    let currentLoad = 0;

    for (const [numPass, start, end] of trips) {
      while (!minHeap.isEmpty() && minHeap.front()[0] <= start) {
        const [_dropOffLocation, passengers] = minHeap.dequeue();
        currentLoad -= passengers;
      }

      currentLoad += numPass;
      if (currentLoad > capacity) {
        return false;
      }
      minHeap.enqueue([end, numPass]);
    }

    return true;
  }
}
