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
        this.invert(root);
        return root;
    }

    invert(node: TreeNode | null) {
        if(node == null){
            return;
        }
        [node.left, node.right] = [node.right, node.left];
        this.invert(node.left);
        this.invert(node.right);
    }
}
