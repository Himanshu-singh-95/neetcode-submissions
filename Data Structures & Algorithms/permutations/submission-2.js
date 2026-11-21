class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
        const res = [];
        const seen = new Set();
        const backtrack = (currentList) => {
            if (currentList.length === nums.length) {
                res.push([...currentList]);
            }

            for (let i = 0; i < nums.length; i++) {
                if (seen.has(nums[i])) continue;

                // 1. Choose
                seen.add(nums[i]);
                currentList.push(nums[i]);

                // 2. Explore
                backtrack(currentList);

                // 3. Un-choose (Backtrack)
                currentList.pop();
                seen.delete(nums[i]);
            }
        };

        backtrack([]);
        return res;
    }
}
