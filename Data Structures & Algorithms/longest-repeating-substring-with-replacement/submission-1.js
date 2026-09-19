class Solution {
  /**
   * @param {string} s
   * @param {number} k
   * @return {number}
   */
  characterReplacement(s, k) {
    // Keep count of all the characters in the string
    const chars = new Map();
    // left pointer,
    let l = 0;
    // right pointer,
    let r = 0;
    // character with the current max
    let maxf = 0;
    let output = 0;

    while (r < s.length) {
      const char = s[r];
      chars.set(char, 1 + (chars.get(char) || 0));
      maxf = Math.max(maxf, ...chars.values());
      const currWindow = r - l + 1;
      if (currWindow - maxf <= k) {
        output = Math.max(output, currWindow);
      } else {
        chars.set(s[l], chars.get(s[l]) - 1);
        l++;
      }
      r++;
    }
    return output;
  }
}