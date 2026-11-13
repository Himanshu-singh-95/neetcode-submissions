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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        this.preIdx = 0;
        this.preorder = preorder;
        this.inorderMap = new Map();
        for (let i = 0; i < inorder.length; i++) {
            this.inorderMap.set(inorder[i], i);
        }
        return this.dfs(0, inorder.length - 1);
    }

    dfs(start, end) {
        if (start > end) return null;

        // Grab current root value and advance the pointer
        const rootVal = this.preorder[this.preIdx];
        this.preIdx++;

        // Create the node and find its split index in inorder
        const root = new TreeNode(rootVal);
        const mid = this.inorderMap.get(rootVal);

        root.left = this.dfs(start, mid - 1);
        root.right = this.dfs(mid + 1, end);

        return root;
    }
}
