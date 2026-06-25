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
     * @return {TreeNode}
     */
    invertTree(root: TreeNode | null): TreeNode {
        return this.invert(root);
    }

    invert(node: TreeNode | null): TreeNode | null {
        if(node == null){
            return node;
        }
        const invertedLeft = this.invert(node.left);
        const invertedRight = this.invert(node.right);
        node.left = invertedRight;
        node.right = invertedLeft;
        return node;
    }
}
