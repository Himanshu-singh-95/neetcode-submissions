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
     * @return {number}
     */
    maxDepth(root) {
        return this.dfs(root);
    }

    dfs(root) {
        if(root === null) {
            return 0;
        }

        const left = this.dfs(root.left);
        const right = this.dfs(root.right);

        return 1 + Math.max(left, right);
    }
}
