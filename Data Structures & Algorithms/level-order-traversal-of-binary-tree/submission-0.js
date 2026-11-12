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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];
        if (root === null) {
            return res;
        }

        // Initialize the queue with the top root node
        const queue = [root];

        while (queue.length > 0) {
            // Capture the exact number of nodes on the current level
            const levelSize = queue.length;
            const currentLevel = [];

            // Process only the nodes belonging to this level
            for (let i = 0; i < levelSize; i++) {
                const node = queue.shift();
                currentLevel.push(node.val);

                // Enqueue children for the NEXT level
                if (node.left !== null) {
                    queue.push(node.left);
                }
                if (node.right !== null) {
                    queue.push(node.right);
                }
            }

            // Add the completed level array to our final result
            res.push(currentLevel);
        }

        return res;
    }
}
