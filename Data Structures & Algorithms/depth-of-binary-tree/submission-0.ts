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
    maxDepth(root: TreeNode | null): number {
        return this.depth(root, 0);
    }

    depth(node: TreeNode | null, maxHt: number): number {
        if(node == null){
            return maxHt;
        }
        const maxLeftHt = this.depth(node.left, maxHt + 1);
        const maxRightHt = this.depth(node.right, maxHt + 1);
        return Math.max(maxLeftHt, maxRightHt);
    }
}
