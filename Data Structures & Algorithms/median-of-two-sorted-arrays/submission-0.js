class Solution {
    /**
     * @param {number[]} nums1
     * @param {number[]} nums2
     * @return {number}
     */
    findMedianSortedArrays(nums1, nums2) {
        const merged = [];
        let i = 0;
        let j = 0;
        // 1. Compare elements from both arrays and push the smaller one
        while (i < nums1.length && j < nums2.length) {
            if (nums1[i] <= nums2[j]) {
                merged.push(nums1[i]);
                i++;
            } else {
                merged.push(nums2[j]);
                j++;
            }
        }

        // 2. Append any leftover elements from nums1
        while (i < nums1.length) {
            merged.push(nums1[i]);
            i++;
        }

        // 3. Append any leftover elements from nums2
        while (j < nums2.length) {
            merged.push(nums2[j]);
            j++;
        }

        // 4. Find the middle index and compute the median
        const totalLength = merged.length;
        const mid = Math.floor(totalLength / 2);
        if (totalLength % 2 === 1) {
            return merged[mid];
        } else {
            return (merged[mid - 1] + merged[mid]) / 2;
        }
    }
}
