class Solution {
  /**
   * @param {string} s
   * @return {string}
   */
  longestPalindrome(s) {
    let n = s.length;
    let start = 0;
    let maxLen = 0;
    const memo = Array.from({ length: n }, () => new Array(n));

    const isPalindrome = (i, j) => {
      if (j - i === 2 && s[i] === s[j]) return true;
      if (i >= j) return true;

      if (memo[i][j] != undefined) return memo[i][j];

      if (s[i] === s[j]) {
        return (memo[i][j] = isPalindrome(i + 1, j - 1));
      } else {
        return (memo[i][j] = false);
      }
    };

    for (let i = 0; i < n; i++) {
      for (let j = i; j < n; j++) {
        if (isPalindrome(i, j)) {
          let currentLen = j - i + 1;
          if (currentLen > maxLen) {
            start = i;
            maxLen = currentLen;
          }
        }
      }
    }

    return s.substring(start, start + maxLen);
  }
}
