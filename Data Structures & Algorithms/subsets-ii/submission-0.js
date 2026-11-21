class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsetsWithDup(nums) {
        const res = [];

        // 1. Sort so duplicate numbers sit adjacent to each other
        nums.sort((a, b) => a - b);

        const backtrack = (startIndex, currentList) => {
            // Every path built so far is a valid unique subset
            res.push([...currentList]);

            for (let i = startIndex; i < nums.length; i++) {
                // 2. Skip duplicate choices at the SAME recursion depth
                if (i > startIndex && nums[i] === nums[i - 1]) {
                    continue;
                }

                // Choose
                currentList.push(nums[i]);

                // Explore (advance to i + 1 since order doesn't matter and each index is used once)
                backtrack(i + 1, currentList);

                // Un-choose (Backtrack)
                currentList.pop();
            }
        };

        backtrack(0, []);
        return res;
    }
}
