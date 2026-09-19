class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low < high) {
      const mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        return mid;
      }
      // If the left side is ordered
      if (nums[low] <= nums[mid]) {
        if (target >= nums[low] && target < nums[mid]) {
          high = mid;
        } else {
          low = mid + 1;
        }
      } else {
        if (nums[mid] < target && target <= nums[high]) {
          low = mid + 1;
        } else {
          high = mid;
        }
      }
    }
    return nums[low] == target ? low : -1;
  }
}
