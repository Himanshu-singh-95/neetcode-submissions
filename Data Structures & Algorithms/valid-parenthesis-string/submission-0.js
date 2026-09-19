class Solution {
  /**
   * @param {string} s
   * @return {boolean}
   */
  checkValidString(s) {
    let balance = 0;
    // Forward pass
    for (const char of s) {
      if (char !== ')') {
        // Increment balance for an opening parenthesis or an asterisk
        balance++;
      } else if (balance > 0) {
        // Decrement balance for a closing parenthesis if balance is positive
        balance--;
      } else {
        // If balance is already zero, and another closing parentheses are encountered --> not valid
        return false;
      }
    }

    if (balance == 0) {
      // If balance is zero, it means we have exact matches, so return true
      return true;
    }
    // Reset balance for the backward pass
    balance = 0;

    // Backward pass
    for (const char of s.slice().split('').reverse().join('')) {
      if (char !== '(') {
        // Increment balance for an closing parenthesis or an asterisk
        balance++;
      } else if (balance > 0) {
        // Decrement balance for a opening parenthesis if balance is positive
        balance--;
      } else {
        // If balance is already zero, and another opening parentheses are encountered --> not valid
        return false;
      }
    }
    // If the string passes both forward and backward checks, it's valid
    return true;
  }
}