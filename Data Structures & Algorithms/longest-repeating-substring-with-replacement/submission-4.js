class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
 characterReplacement(s, k) {
    const charCount = new Map();
    let left = 0;
    let right = 0;
    let maxFreq = 0;
    let maxLength = 0;
    
    while(right < s.length) {
        charCount.set(s[right], (charCount.get(s[right]) || 0) + 1);
        maxFreq = Math.max(maxFreq, charCount.get(s[right]));
        
        // If invalid window, shrink
        while (right - left + 1 - maxFreq > k) {
            charCount.set(s[left], charCount.get(s[left]) - 1);
            left++;
        }
        
        maxLength = Math.max(maxLength, right - left + 1);
        right++;
    }
    
    return maxLength;
}
}
