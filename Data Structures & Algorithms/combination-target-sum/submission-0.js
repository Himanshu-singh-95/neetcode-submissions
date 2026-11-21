class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[][]}
     */
    combinationSum(nums, target) {
        const res = [];

        const backtrack = (startIndex, currentList, total) => {
            // Base case: exact target reached
            if (total === target) {
                res.push([...currentList]);
                return;
            }

            // Loop over all valid choices starting from `startIndex`
            for (let i = startIndex; i < nums.length; i++) {
                // Validate if path is safe (pruning before recursing)
                if (total + nums[i] > target) continue;

                // 1. Choose
                currentList.push(nums[i]);

                // 2. Explore (pass `i`—not `i + 1`—so nums[i] can be reused)
                backtrack(i, currentList, total + nums[i]);

                // 3. Un-choose (Backtrack)
                currentList.pop();
            }
        };

        backtrack(0, [], 0);
        return res;
    }
}
