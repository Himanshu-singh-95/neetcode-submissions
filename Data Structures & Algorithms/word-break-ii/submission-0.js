class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {string[]}
     */
    wordBreak(s, wordDict) {
        const res = [];
        const dictSet = new Set(wordDict);

        const backtrack = (startIdx, currList) => {
            if (startIdx === s.length) {
                res.push(currList.join(" "));
                return;
            }

            for (let i = startIdx; i < s.length; i++) {
                const word = s.slice(startIdx, i + 1);

                // 1. Validate: only branch if `word` exists in the dictionary
                if (dictSet.has(word)) {
                    currList.push(s.slice(startIdx, i + 1));
                    backtrack(i + 1, currList);
                    currList.pop();
                }
            }
        };

        backtrack(0, []);
        return res;
    }
}
