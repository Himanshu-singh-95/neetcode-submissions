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
        const result = [];
        let i = 0;
        while(i < str.length) {
            let j = i;
            while(str[j] !== '#') {
                j++;
            }
            let len = parseInt(str.substring(i,j));
            i = j + 1;
            j = i + len;
            result.push(str.substring(i,j));
            i = j;
        }
        return result;
    }
}
