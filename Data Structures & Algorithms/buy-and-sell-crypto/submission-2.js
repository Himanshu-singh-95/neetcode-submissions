class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let l = 0;
        let r = l+1;
        while(r < prices.length) {
            if(prices[l] < prices[r]) {
                const currProfit = prices[r] - prices[l];
                if(currProfit > profit) {
                    profit = currProfit;
                }
            } else {
                l = r;
            }
            r++;
        }
        return profit;       
    }
}
