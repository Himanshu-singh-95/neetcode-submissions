class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for (const str of strs) {
            res += str.length + "#" + str;
        }
        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let res = [];
        let i = 0;
        while (i < str.length) {
            let j = i;
            while (str[j] !== "#") {
                j++;
            }
            let len = parseInt(str.substring(i,j), 10);
            i = j + 1;
            j = i + len;
            res.push(str.substring(i, j));
            i = j;
        }
        return res;
    }
}
