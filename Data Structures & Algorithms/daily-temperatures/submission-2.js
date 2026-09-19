class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        const stack = [];
        const res = new Array(temperatures.length).fill(0);

        for(let i = 0; i < temperatures.length; i++) {
            const t = temperatures[i];
            while(stack.length && stack[stack.length - 1][0] < t) {
                const [, stackIdx ] = stack.pop();
                res[stackIdx] = i - stackIdx
            }
            stack.push([t, i])
        }
        return res;
    }
}