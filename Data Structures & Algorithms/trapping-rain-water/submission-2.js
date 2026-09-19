class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let totalWater = 0;
        let leftMax= 0;
        let rightMax = 0;
        let l = 0;
        let r = height.length - 1;
        while(l < r) {
            if(height[l] < height[r]) {
                if(height[l] >= leftMax) {
                    leftMax= height[l]
                } else {
                    totalWater += leftMax - height[l]
                }
                l++;
            } else {
                if(height[r] >= rightMax) {
                    rightMax = height[r]
                } else {
                    totalWater += rightMax - height[r]
                }
                r--;
            }
        }
        return totalWater;
    }
}
