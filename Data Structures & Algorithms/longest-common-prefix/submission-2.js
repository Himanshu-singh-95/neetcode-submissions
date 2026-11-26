class Solution {
    /**
     * @param {string[]} strs
     * @return {string}
     */
    longestCommonPrefix(strs) {
        if (!strs || strs.length === 0) {
            return "";
        }

        let charIdx = 0;
        while (charIdx < strs[0].length) {
            for (let i = 1; i < strs.length; i++) {
                if (strs[i][charIdx] !== strs[0][charIdx]) {
                    return strs[0].substring(0, charIdx);
                }
            }
            charIdx++;
        }

        return strs[0];
    }
}
