class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    subsets(nums) {
        let res = [];

        const solve = (input, output) => {
            // Every intermediate path is a valid subset
            res.push(output);

            for (let i = 0; i < input.length; i++) {
                // Slice from i + 1 so earlier elements are never re-picked
                const newInput = input.slice(i + 1);
                const newOutput = output.concat(input[i]);
                solve(newInput, newOutput);
            }
        };

        solve(nums, []);
        return res;
    }
}
