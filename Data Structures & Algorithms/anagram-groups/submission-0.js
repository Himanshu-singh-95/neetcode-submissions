class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
    //      let map = new Map();

    // for(let i of strs) {
    //     let sorted = i.split('').sort().join('');
    //     if(map.has(sorted)) {
    //         map.get(sorted).push(i);
    //     } else {
    //         map.set(sorted, [i]);
    //     }
    // }

    // return Array.from(map.values());

        const resMap = new Map();
        for(const str of strs) {
            const charArr = Array(26).fill(0);
            for(const char of str) {
                const charIdx = char.charCodeAt(0) - 'a'.charCodeAt(0);
                charArr[charIdx]++;
            }
            const key = charArr.join('#');
            if(resMap.has(key)) {
                resMap.get(key).push(str);
            } else {
                resMap.set(key, [str])
            }
        }
        return Array.from(resMap.values());
    }
}
