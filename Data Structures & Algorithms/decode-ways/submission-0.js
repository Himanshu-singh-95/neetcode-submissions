class Solution {
  /**
   * @param {string} s
   * @return {number}
   */
  numDecodings(s) {
    const n = s.length;
    if (s[0] === "0" || !n) return 0;

    const memo = Array.from({ length: n }, () => -1);

    const dp = (i) => {
      if (i === n) return 1;
      if (s[i] === "0") return 0;

      if (memo[i] !== -1) return memo[i];

      let totalWays = dp(i + 1);

      if (i + 1 < n) {
        const twoDigit = parseInt(s.substring(i, i + 2));
        if (twoDigit >= 10 && twoDigit <= 26) {
          totalWays += dp(i + 2);
        }
      }
      return (memo[i] = totalWays);
    };

    return dp(0);
  }
}
