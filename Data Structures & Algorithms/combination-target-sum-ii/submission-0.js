class Solution {
    /**
     * @param {number[]} candidates
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum2(candidates, target) {
        let res = [];
        candidates.sort((a, b) => a - b);
        const backtrack = (startIdx, currList, total) => {
            if (total === target) {
                res.push([...currList]);
                return;
            }

            for (let i = startIdx; i < candidates.length; i++) {
                if (i > startIdx && candidates[i] === candidates[i - 1]) {
                    continue;
                }

                if (candidates[i] + total > target) {
                    return;
                }

                currList.push(candidates[i]);

                backtrack(i + 1, currList, total + candidates[i]);

                currList.pop();
            }
        };

        backtrack(0, [], 0);
        return res;
    }
}
