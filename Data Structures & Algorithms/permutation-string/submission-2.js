class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const s1Count = new Array(26).fill(0);
        const windowCount = new Array(26).fill(0);

        const aCharCode = "a".charCodeAt(0);

        for(let i = 0; i < s1.length; i++) {
            s1Count[s1.charCodeAt(i) - aCharCode]++;     
            windowCount[s2.charCodeAt(i) - aCharCode]++; 
        }

        if(this.arraysEqual(s1Count, windowCount)) return true;

        let r = s1.length;
        while(r < s2.length) {
            windowCount[s2.charCodeAt(r) - aCharCode]++;
            windowCount[s2.charCodeAt(r - s1.length) - aCharCode]--;
            
            if(this.arraysEqual(s1Count, windowCount)) return true;

            r++;
        }

        return false;
    }
    
    arraysEqual(arr1, arr2) {
        for (let i = 0; i < 26; i++) {
            if (arr1[i] !== arr2[i]) return false;
        }
        return true;
    }
}