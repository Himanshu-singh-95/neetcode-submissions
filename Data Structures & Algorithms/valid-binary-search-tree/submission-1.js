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
     * @return {boolean}
     */
    isValidBST(root) {
        const res = [true];
        this.dfs(root, -Infinity, Infinity, res);
        return res[0];
    }

    dfs(root, low, high, res) {
        if (root === null) return true;

        if (root.val <= low || root.val >= high) {
            res[0] = false;
            return;
        }

        this.dfs(root.left, low, root.val, res);
        this.dfs(root.right, root.val, high, res);
    }
}
