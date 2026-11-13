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
    rightSideView(root) {
        const res = [];

        if (root === null) return res;

        const queue = [root];

        while (queue.length > 0) {
            const currLevel = [];
            const n = queue.length;
            for (let i = 0; i < n; i++) {
                const node = queue.shift();
                currLevel.push(node.val);

                if (node.left !== null) {
                    queue.push(node.left);
                }

                if (node.right !== null) {
                    queue.push(node.right);
                }
            }

            res.push(currLevel[currLevel.length - 1]);
        }
        return res;
    }
}
