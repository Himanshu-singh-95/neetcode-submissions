class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        return strs.map(str => `${str.length}#${str}`).join('');
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const res = [];
        let i = 0;
        let j = i;
        while(i < str.length) {
            while(str[j] !== '#') {
                j++;
            }
            let len = parseInt(str.substring(i,j));
            i = j + 1;
            j = i + len;
            res.push(str.substring(i,j));
            i = j;
        }
        return res;
    }
}
