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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
        const res = [];
        this.dfsSerialize(root, res);
        return res.join(",");
    }

    dfsSerialize(root, res) {
        // Base case: Record "N" for null child nodes
        if (root === null) {
            res.push("N");
            return;
        }

        res.push(String(root.val));
        this.dfsSerialize(root.left, res);
        this.dfsSerialize(root.right, res);
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const vals = data.split(',');
        this.idx = 0;
        return this.dfsDeserialize(vals);
    }

    dfsDeserialize(vals) {
        if (vals[this.idx] ===  "N") {
            this.idx++;
            return null;
        }

        const node = new TreeNode(Number(vals[this.idx]));
        this.idx++;

        node.left = this.dfsDeserialize(vals);
        node.right = this.dfsDeserialize(vals);

        return node;
    }
}
