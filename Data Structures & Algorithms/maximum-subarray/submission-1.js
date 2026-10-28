class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  maxSubArray(nums) {
    if (nums.length === 0) return 0;

    const temp = { start: 0, sum: nums[0] };
    let result = { start: 0, end: 0, sum: nums[0] };

    for (let i = 1; i < nums.length; i++) {
      if (temp.sum < 0) {
        temp.sum = 0;
        temp.start = i + 1;
      }
      temp.sum += nums[i];
      if (temp.sum > result.sum) {
        result = { start: temp.start, end: i, sum: temp.sum };
      }
    }

    return result.sum;
  }
}
