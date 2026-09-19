class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    if (!nums.length) return 0;
    const numSet = new Set(nums);
    let longest = 0;
    for (const num of numSet) {
      if (!numSet.has(num - 1)) {
        let currNum = num;
        let currLength = 1;
        while (numSet.has(currNum + 1)) {
          currNum++;
          currLength++;
        }
        longest = Math.max(currLength, longest);
      }
    }
    return longest;
  }
}
