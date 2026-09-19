class Solution {
  /**
   * @param {number} n
   * @return {string[]}
   */
  generateParenthesis(n) {
    const res = [];

    const backtrack = (openN, closedN, current) => {
      if (openN === closedN && openN === n) {
        res.push(current);
        return;
      }

      if (openN < n) {
        backtrack(openN + 1, closedN, current + "(");
      }
      if (closedN < openN) {
        backtrack(openN, closedN + 1, current + ")");
      }
    };

    backtrack(0, 0, "");
    return res;
  }
}