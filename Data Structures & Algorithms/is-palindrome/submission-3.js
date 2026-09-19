class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let cleanStr = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        console.log("cleanStr", cleanStr)
        let start = 0;
        let end = cleanStr.length - 1;

        while(start < end) {
            if(cleanStr[start] !== cleanStr[end]) {
                return false;
            }
            start++;
            end--;
        }
        return true;

    }
}
