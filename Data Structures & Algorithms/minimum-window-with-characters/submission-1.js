class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        // Build frequency map for t
        const tCountMap = [...t].reduce((prev, curr) => 
            prev.set(curr, (prev.get(curr) || 0) + 1),
            new Map()
        );

        let i = 0;
        let j = 0;
        let count = tCountMap.size;
        let minLength = Infinity;
        let start = 0;
        
        while (j < s.length) {
            // Expand window: add character at j
            if (tCountMap.has(s[j])) {
                tCountMap.set(s[j], tCountMap.get(s[j]) - 1);
                if (tCountMap.get(s[j]) === 0) {
                    count--;
                }
            }
            
            // Contract window while valid
            while (count === 0) {
                // Update minimum window
                const currWindow = j - i + 1;
                if (currWindow < minLength) {
                    minLength = currWindow;
                    start = i;
                }
                
                // Remove character at i
                if (tCountMap.has(s[i])) {
                    tCountMap.set(s[i], tCountMap.get(s[i]) + 1);
                    if (tCountMap.get(s[i]) > 0) {
                        count++;
                    }
                }
                
                i++;
            }
            
            j++;
        }
        
        if (minLength === Infinity) return "";
        return s.substring(start, start + minLength);
    }
}