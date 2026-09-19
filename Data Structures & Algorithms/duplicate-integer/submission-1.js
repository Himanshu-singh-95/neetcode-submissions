class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const len = nums.length;
        const set = new Set();
        for(let i=0; i <len; i++) {
            if(set.has(nums[i]))
            return true;
            else
            set.add(nums[i])
        }
        return false;
    }
}
