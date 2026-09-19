class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  lengthOfLongestSubstring(s) {
    let i = 0;
    let j = 0;
    const subStr = new Set();
    let maxLen = 0;
    while (j < s.length) {
      if (!subStr.has(s.charAt(j))) {
        subStr.add(s.charAt(j));
        maxLen = Math.max(maxLen, subStr.size);
        j++;
      } else {
        subStr.delete(s[i]);
        i++;
      }
    }
    return maxLen;
  }
}