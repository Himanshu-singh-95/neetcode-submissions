class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
  permute(nums) {
    let res = [];

    const solve = (input, output) => {
      if (input.length == 0) {
        res.push(output);
      }

      for (let i = 0; i < input.length; i++) {
        const newInput = input.filter((item) => item !== input[i]);
        const newOutput = output.concat(input[i]);
        solve(newInput, newOutput);
      }
    };

    solve(nums, []);
    return res;
  }
}
