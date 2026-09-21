class Solution {
  /**
   * @param {number[]} nums
   * @param {number} k
   * @return {boolean}
   */
  containsNearbyDuplicate(nums, k) {
    // Set keeps only the values currently inside the valid sliding window.
    const set = new Set();

    // Total length of the array.
    const size = nums.length;

    // i = left boundary of the window, j = right boundary of the window.
    let i = 0;
    let j = 0;

    while (j < size) {
      // If the window size exceeds k, move the left pointer and remove the value.
      // Example: if j - i > k, then current value at i is too far to be considered.
      if (j - i > k) {
        set.delete(nums[i]);
        i++;
      }

      // If the current value already exists in the window, a duplicate is found
      // with a distance <= k.
      if (set.has(nums[j])) {
        return true;
      }

      // Add the current value to the window.
      set.add(nums[j]);
      j++;
    }

    // No duplicate within the required distance was found.
    return false;
  }
}