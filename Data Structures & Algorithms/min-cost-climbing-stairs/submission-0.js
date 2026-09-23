class Solution {
    /**
     * @param {number[]} cost
     * @return {number}
     */
    minCostClimbingStairs(cost) {
        const memo = Array.from({length: cost.length}, () => -1);
        const dp = (i) => {
            if(i >= cost.length ){
                 return 0;
            }

            if(memo[i] !== -1) return memo[i];
            

            return (memo[i] = cost[i] + Math.min(dp(i+1), dp(i+2)));
        }

        return Math.min(dp(0), dp(1));
    }
}
