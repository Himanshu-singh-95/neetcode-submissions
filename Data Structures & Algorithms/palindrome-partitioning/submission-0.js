class Solution {
    /**
     * @param {string} s
     * @return {string[][]}
     */
    partition(s) {
        const res = [];

        const backtrack = (startIdx, currList) => {
            // Base case: we've partitioned all the way to the end of `s`
            if (startIdx === s.length) {
                res.push([...currList]);
                return;
            }

            for (let i = startIdx; i < s.length; i++) {
                if (this.isPalindrome(startIdx, i, s)) {
                    currList.push(s.slice(startIdx, i + 1));

                    backtrack(i + 1, currList);

                    currList.pop();
                }
            }
        };
        backtrack(0, []);
        return res;
    }

    isPalindrome(left, right, s) {
        while (left < right) {
            if (s[left] !== s[right]) return false;
            left++;
            right--;
        }
        return true;
    }
}
