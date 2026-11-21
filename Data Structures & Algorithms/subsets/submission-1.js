class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        const res = [];

        const backtrack = (startIndex, currentList) => {
            // Every path built so far is a valid subset
            res.push([...currentList]);

            for (let i = startIndex; i < nums.length; i++) {
                // 1. Choose
                currentList.push(nums[i]);

                // 2. Explore (pass `i + 1` so we don't reuse nums[i])
                backtrack(i + 1, currentList);

                // 3. Un-choose (Backtrack)
                currentList.pop();
            }
        };

        backtrack(0, []);
        return res;
    }
}
