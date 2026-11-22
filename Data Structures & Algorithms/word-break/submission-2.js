class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const dictSet = new Set(wordDict);
        const memo = new Array(s.length).fill(-1);

        const dp = (startIdx) => {
            if (startIdx === s.length) return true;

            if (memo[startIdx] !== -1) return memo[startIdx];

            for (let i = startIdx; i < s.length; i++) {
                if (dictSet.has(s.slice(startIdx, i + 1))) {
                    if (dp(i + 1)) {
                        return (memo[startIdx] = true);
                    }
                }
            }
            return (memo[startIdx] = false);
        };

        return dp(0);
    }
}
