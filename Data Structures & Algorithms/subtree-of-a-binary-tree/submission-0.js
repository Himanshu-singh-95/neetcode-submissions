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
     * @param {TreeNode} subRoot
     * @return {boolean}
     */
    isSubtree(root, subRoot) {
        return this.dfs(root, subRoot);
    }

    dfs(root, subRoot) {
        // 1. Base case: If we run out of nodes in the main tree, no match exists
        if (root === null) return false;

        // 2. Check if the subtree starting at the current node matches subRoot
        if (this.isSameTree(root, subRoot)) {
            return true;
        }

        const left = this.dfs(root.left, subRoot);
        const right = this.dfs(root.right, subRoot);

        // 3. Otherwise, check if subRoot appears in either the left or right subtree
        return left || right;
    }

    isSameTree(p, q) {
        if (p === null && q === null) {
            return true;
        }

        if (p === null || q === null || p.val !== q.val) {
            return false;
        }

        const left = this.isSameTree(p.left, q.left);
        const right = this.isSameTree(p.right, q.right);

        return left && right;
    }
}
