class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {number[]}
   */
  maxSlidingWindow(nums, k) {
    // create a results array
    // iterate through the nums array
    // for each iteration, add the max value of the current window to the results array
    // return the results array
    // let results = [];
    // for (let i = 0; i < nums.length - k + 1; i++) {
    //   let window = nums.slice(i, i + k);
    //   results.push(Math.max(...window));
    // }
    // return results;
    const n = nums.length;
    let out = [];
    let deque = [];
    let l = 0;
    let r = 0;
    while (r < n) {
      while (deque.length > 0 && nums[deque[deque.length - 1]] < nums[r]) {
        deque.pop();
      }
      deque.push(r);
      if (r - l + 1 == k) {
        out.push(nums[deque[0]]);
        l++;
      }
      if (l > deque[0]) {
        deque.shift();
      }
      r++;
    }
    return out;
  }
}