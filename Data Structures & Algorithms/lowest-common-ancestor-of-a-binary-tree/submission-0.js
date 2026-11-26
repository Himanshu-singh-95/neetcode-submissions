/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class Solution {
    /**
     * @param {TreeNode} root
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        return this.dfs(root, p, q)
    }

    dfs(root, p, q) {
        if (root === null || p == root || q == root) {
            return root;
        }

        const leftMatch = this.dfs(root.left, p, q);
        const rightMatch = this.dfs(root.right, p, q);

        return leftMatch && rightMatch ? root : leftMatch || rightMatch;
    }
}
