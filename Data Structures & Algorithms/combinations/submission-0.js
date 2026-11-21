class Solution {
    /**
     * @param {number} n
     * @param {number} k
     * @return {number[][]}
     */
    combine(n, k) {
        const res = [];

        const backtrack = (start, list) => {
            if (list.length === k) {
                res.push([...list]);
                return;
            }

            for (let i = start; i <= n; i++) {
                list.push(i);
                backtrack(i + 1, list);
                list.pop();
            }
        };

        backtrack(1, []);
        return res;
    }
}
