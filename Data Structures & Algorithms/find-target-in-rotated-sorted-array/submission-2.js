class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number}
   */
  search(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    while (low <= high) {
      const mid = Math.floor((low + high) / 2);
      if (nums[mid] === target) {
        return mid;
      }
      // If the left side is ordered
      if (nums[low] <= nums[mid]) {
        // Number is in the left side
        if (target >= nums[low] && target < nums[mid]) {
          high = mid;
        }
        // Number is in the right side
        else {
          low = mid + 1;
        }
      }
      // Right side is ordered
      else {
        // Number is in the right side
        if (nums[mid] < target && target <= nums[high]) {
          low = mid + 1;
        }
        // Number is in the left side
        else {
          high = mid;
        }
      }
    }
    return -1;
  }
}
