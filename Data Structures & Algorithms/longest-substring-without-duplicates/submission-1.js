class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let l = 0;
        let r = 0;
        let maxLen = 0
        const subStr = new Set();
        while(r < s.length) {
            if(subStr.has(s[r])) {
                subStr.delete(s[l]);
                l++;
            } else {
            subStr.add(s[r]);
            maxLen = Math.max(maxLen, r - l + 1)
            r++;
            }
        }
        return maxLen;
    }
}
