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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        return this.dfs(root, p, q);
    }

    dfs(root, p, q) {
        if (root === null || p === null || q === null) {
            return null;
        }

        // 1. Both p and q are smaller than current node -> LCA must be in the left subtree
        if (p.val < root.val && q.val < root.val) {
            return this.dfs(root.left, p, q);
        }

        // 2. Both p and q are larger than current node -> LCA must be in the right subtree
        if (p.val > root.val && q.val > root.val) {
            return this.dfs(root.right, p, q);
        }

        // 3. Split point reached (one is on left, one is on right, OR root equals p or q)
        return root;
    }
}
