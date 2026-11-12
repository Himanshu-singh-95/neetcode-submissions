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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        return this.dfs(root, targetSum);
    }

    dfs(root, remainingSum) {
        if (root === null) {
            return false;
        }

        remainingSum -= root.val;

        if (root.left === null && root.right === null) {
            return remainingSum === 0;
        }

        const left = this.dfs(root.left, remainingSum);
        const right = this.dfs(root.right, remainingSum);

        return left || right;
    }
}
