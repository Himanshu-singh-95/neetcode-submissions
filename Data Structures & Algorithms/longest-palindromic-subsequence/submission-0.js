class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    longestPalindromeSubseq(s) {
        const n = s.length;
        const memo = Array.from({ length: n }, () => new Array(n).fill(-1));

        const dp = (l, r) => {
            // Base case 1: pointers crossed -> empty substring
            if (l > r) return 0;

            // Base case 2: single middle character -> palindrome of length 1
            if (l === r) return 1;

            if (memo[l][r] !== -1) return memo[l][r];

            // Case 1: Outer characters match -> add 2 and shrink both ends
            if (s[l] === s[r]) {
                return (memo[l][r] = 2 + dp(l + 1, r - 1));
            }

            // Case 2: Outer characters differ -> skip left OR skip right
            return (memo[l][r] = Math.max(dp(l + 1, r), dp(l, r - 1)));
        };

        return dp(0, n - 1);
    }
}
