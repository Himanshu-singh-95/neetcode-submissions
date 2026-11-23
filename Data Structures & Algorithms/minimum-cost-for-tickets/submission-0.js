class Solution {
    /**
     * @param {number[]} days
     * @param {number[]} costs
     * @return {number}
     */
    mincostTickets(days, costs) {
        const n = days.length;
        const memo = new Array(n).fill(-1);
        const durations = [1, 7, 30];
        const dp = (i) => {
            // Base case: covered all scheduled travel days
            if (i >= n) return 0;

            if (memo[i] !== -1) return memo[i];

            let minCost = Infinity;

            // Try buying each of the 3 passes on days[i]
            for (let p = 0; p < 3; p++) {
                const validUntil = days[i] + durations[p];

                // Advance pointer j to the first travel day NOT covered by this pass
                let j = i;
                while (j < n && days[j] < validUntil) {
                    j++;
                }

                minCost = Math.min(minCost, costs[p] + dp(j));
            }

            return (memo[i] = minCost);
        };

        return dp(0);
    }
}
