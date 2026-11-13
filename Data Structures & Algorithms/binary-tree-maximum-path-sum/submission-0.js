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
    maxPathSum(root) {
        const res = [-Infinity];
        this.dfs(root, res);
        return res[0];
    }

    dfs(root, res) {
        if(root === null) return 0;

        const left = Math.max(0, this.dfs(root.left, res));
        const right = Math.max(0, this.dfs(root.right, res));

        const temp = Math.max(left, right) + root.val;
        const ans = left + right + root.val;
        res[0] = Math.max(res[0], ans);
        return temp;
    }
}
