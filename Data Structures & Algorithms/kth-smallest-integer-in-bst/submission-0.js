/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        const res = [0, -1];
        this.dfs(root, k, res);
        return res[1];
    }

    dfs(root, k, res) {
        if(root === null) return;

        this.dfs(root.left, k, res);

        res[0]++;
        if(res[0] === k) {
            res[1] = root.val;
            return;
        }

        this.dfs(root.right, k, res);
    }
}
