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
    isBalanced(root) {
        const res = [true];
        this.dfs(root, res);
        return res[0];
    }

    dfs(root, res) {
        // Base case or early exit if already found unbalanced
        if (root === null || res[0] === false) {
            return false;
        }

        const left = this.dfs(root.left, res);
        const right = this.dfs(root.right, res);

        if (Math.abs(left - right) > 1) {
            res[0] = false;
        }

        return 1 + Math.max(left, right);
    }
}
