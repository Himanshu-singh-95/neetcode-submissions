class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    //    const sortedS = [...s].sort((a,b) => a.localeCompare(b));
    //    const sortedT = [...t].sort((a,b) => a.localeCompare(b));
    //    return sortedS.join() === sortedT.join();

    if(s.length !== t.length) return false;
    const sCount = new Map();
    const tCount = new Map();
    for(let i = 0; i < s.length; i++) {
        sCount.set(s[i], (sCount.get(s[i]) || 0 )+ 1);
        tCount.set(t[i], (tCount.get(t[i]) || 0 )+ 1);
    }

    for(const [key, value] of sCount) {
        if(value !== tCount.get(key)) {
            return false;
        }
    }
    return true;
    }
}
