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
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, key) {
        return this.dfs(root, key);
    }

    dfs(root, key) {
        if (root === null) {
            return null;
        }

        if (key < root.val) {
            root.left = this.dfs(root.left, key);
        } else if (key > root.val) {
            root.right = this.dfs(root.right, key);
        } else {
            // Case 1: Node has no child or only one child
            if (root.left === null) return root.right;
            if (root.right === null) return root.left;

            // Case 2: Node has two children
            root.val = this.minValue(root.right)
            root.right = this.dfs(root.right, root.val);
        }

        return root;
    }

    minValue(root) {
        let currValue = root.val;
        while(root.left !== null) {
            currValue = root.left.val;
            root = root.left;
        }

        return currValue;
    }
}
