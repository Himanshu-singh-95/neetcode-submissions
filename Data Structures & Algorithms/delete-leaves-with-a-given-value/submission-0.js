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
     * @param {number} target
     * @return {TreeNode}
     */
    removeLeafNodes(root, target) {
        return this.dfs(root, target);
    }

    dfs(root, target) {
        if (root === null) {
            return null;
        }

        root.left = this.dfs(root.left, target);
        root.right = this.dfs(root.right, target);

        if (root.left === null && root.right === null && root.val === target) {
            return null;
        }

        return root;
    }
}
