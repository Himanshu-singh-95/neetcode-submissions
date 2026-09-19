class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        if(s.length === 0) return true;
        let l = 0;
        let r = s.length -1;
        while(l < r) {
            while(l < r && !this.checkAlphaNumeric(s[l])) {
                l++;
            }
            while(r > l && !this.checkAlphaNumeric(s[r])) {
                r--;
            }
            if(s[l].toLowerCase() !== s[r].toLowerCase()) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }

    checkAlphaNumeric(char) {
    const intVal = parseInt(char);
    return (
      (char >= "a" && char <= "z") ||
      (char >= "A" && char <= "Z") ||
      (!isNaN(intVal) && intVal >= 0 && intVal <= 9)
    );
  }
}
