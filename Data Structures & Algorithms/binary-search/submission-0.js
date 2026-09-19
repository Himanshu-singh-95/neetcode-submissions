class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let l = 0;
    let r = nums.length - 1;
    while (l <= r) {
      const mid = Math.floor((l + r) / 2);
      if (target === nums[mid]) {
        return mid;
      } else if (target < nums[mid]) {
        r = mid - 1;
      } else {
        l = mid + 1;
      }
    }
    return -1;
  }
}