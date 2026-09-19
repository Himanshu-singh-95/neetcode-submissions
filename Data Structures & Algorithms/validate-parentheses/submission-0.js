class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
  isValid(s) {
    if (s.length % 2 === 1) {
      return false;
    }
    const closeToOpneMap = new Map([
      [")", "("],
      ["}", "{"],
      ["]", "["],
    ]);
    const stack = [];
    for (const char of s) {
      if (!closeToOpneMap.has(char)) {
        stack.push(char);
      } else {
        if (
          stack.length > 0 &&
          stack[stack.length - 1] === closeToOpneMap.get(char)
        ) {
          stack.pop();
          continue;
        } else {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
}
