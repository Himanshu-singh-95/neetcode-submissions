class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let res = 0;
        let l = 0;
        let r = heights.length - 1;
        while(l < r) {
            const currentArea = Math.min(heights[l], heights[r]) * (r - l);
            res = Math.max(res, currentArea);
            if(heights[l] < heights[r]) {
                l++
            } else {
                r--;
            }
        }
        return res;
    }
}
