class Solution {
  /**
   * @param {number} a
   * @param {number} b
   * @param {number} c
   * @return {string}
   */
  longestDiverseString(a, b, c) {
    // Initialize Max-Heap based on character remaining counts
    const maxHeap = new MaxPriorityQueue((item) => item[1]);
    if (a > 0) maxHeap.enqueue(["a", a]);
    if (b > 0) maxHeap.enqueue(["b", b]);
    if (c > 0) maxHeap.enqueue(["c", c]);

    const res = [];

    while (!maxHeap.isEmpty()) {
      let [char, count] = maxHeap.dequeue();
      if (
        res.length > 1 &&
        res[res.length - 1] === char &&
        res[res.length - 2] === char
      ) {
        if (maxHeap.isEmpty()) break;
        // Use the next available character instead
        let [char2, count2] = maxHeap.dequeue();
        res.push(char2);
        if (count2 > 1) {
          maxHeap.enqueue([char2, count2 - 1]);
        }
        maxHeap.enqueue([char, count]);
      } else {
        res.push(char);
        if (count > 1) {
          maxHeap.enqueue([char, count - 1]);
        }
      }
    }
    return res.join("");
  }
}
