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
    preorderTraversal(root: TreeNode | null): number[] {
        const result: number[] = [];

    const preOrder = (node: TreeNode) => {
        if(node == null){
            return;
        }
        result.push(node.val);
        preOrder(node.left);
        preOrder(node.right);
    }
    preOrder(root);
    return result;
    }
}
