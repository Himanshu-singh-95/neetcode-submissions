class Solution {
    /**
     * @param {string} digits
     * @return {string[]}
     */
    letterCombinations(digits) {
        if (digits.length === 0) return [];

        const res = [];
        const map = {
            2: "abc",
            3: "def",
            4: "ghi",
            5: "jkl",
            6: "mno",
            7: "pqrs",
            8: "tuv",
            9: "wxyz",
        };

        const backtrack = (idx, currentList) => {
            if (idx === digits.length) {
                res.push(currentList.join(""));
                return;
            }

            const letters = map[digits[idx]];

            for (let i = 0; i < letters.length; i++) {
                currentList.push(letters[i]);
                backtrack(idx + 1, currentList);
                currentList.pop();
            }
        };

        backtrack(0, []);
        return res;
    }
}
