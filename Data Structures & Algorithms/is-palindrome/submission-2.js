class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let resStr = "";

        for(const c of s) {
            if(this.alphaNum(c)) {
                resStr += c.toLowerCase();
            }
        }

        let l = 0;
        let r = resStr.length - 1;

        while(l < r) {
                if(resStr[l] !== resStr[r]) return false;
                l++;
                r--;
        }
        return true;
    }

        /**
     * @param {char} c
     * @return {boolean}
     */
    alphaNum(c) {
        return (
            (c >= 'A' && c <= 'Z') ||
            (c >= 'a' && c <= 'z') ||
            (c >= '0' && c <= '9')
        );
    }
}
