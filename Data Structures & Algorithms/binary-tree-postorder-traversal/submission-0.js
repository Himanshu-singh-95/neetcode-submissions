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
     * @return {number[]}
     */
    postorderTraversal(root) {
        const res = [];
        this.dfs(root, res);
        return res;
    }

    dfs(root, res) {
        if (root === null) return null;

        this.dfs(root.left, res);

        this.dfs(root.right, res);

        res.push(root.val);
    }
}
