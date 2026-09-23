class Solution {
  /**
   * @param {string} s
   * @return {string}
   */
  countSubstrings(s) {
    let n = s.length;
    let count = 0;
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
            count++;
        }
      }
    }

    return count;
  }
}
