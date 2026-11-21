class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permuteUnique(nums) {
        const res = [];
        // 1. Sort so duplicate numbers sit adjacent to each other
        nums.sort((a, b) => a - b);
        const seen = new Set();
        const backtrack = (currentList) => {
            if (currentList.length === nums.length) {
                res.push([...currentList]);
                return;
            }

            for (let i = 0; i < nums.length; i++) {
                // Skip if this exact index is already in currentList
                if (seen.has(i)) continue;

                // 2. Skip duplicate values at the SAME level unless the previous copy is currently in use
                if (i > 0 && nums[i] === nums[i - 1] && !seen.has(i - 1)) {
                    continue;
                }
                // 1. Choose
                seen.add(i);
                currentList.push(nums[i]);

                // 2. Explore
                backtrack(currentList);

                // 3. Un-choose (Backtrack)
                currentList.pop();
                seen.delete(i);
            }
        };

        backtrack([]);
        return res;
    }
}
