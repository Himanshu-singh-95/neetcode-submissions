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
    goodNodes(root) {
        const res = [0];
        this.dfs(root, root.val, res);
        return res[0];
    }

    dfs(root, maxSoFar, res) {
        if(root === null) return;

        if(root.val >= maxSoFar) {
            res[0]++;
            maxSoFar = root.val;
        }

        this.dfs(root.left, maxSoFar, res);
        this.dfs(root.right, maxSoFar, res);
    }
}
