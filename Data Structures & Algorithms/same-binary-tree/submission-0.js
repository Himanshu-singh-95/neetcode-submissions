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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {boolean}
     */
    isSameTree(p, q) {
        return this.dfs(p, q);
    }

    dfs(p, q) {
        // 1. Both nodes are null: structures match at this branch
        if (p === null && q === null) {
            return true;
        }

        // 2. Only one node is null, or their values differ: mismatch found
        if (p === null || q === null || p.val !== q.val) {
            return false;
        }

        const left = this.dfs(p.left, q.left);
        const right = this.dfs(p.right, q.right);

        // 3. Both left subtrees AND both right subtrees must match
        return left && right;
    }
}
