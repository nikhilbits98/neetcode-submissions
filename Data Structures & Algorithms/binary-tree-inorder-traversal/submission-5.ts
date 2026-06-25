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
    inorderTraversal(root: TreeNode | null): number[] {
        const result: number[] = [];
        let curr: TreeNode | null = root;
        while(curr){
            if(curr.left == null){
                result.push(curr.val);
                curr = curr.right;
            } else {
                let pred = curr.left;
                while(pred.right !== null && pred.right !== curr){
                    pred = pred.right;
                }
                if(!pred.right){
                    // Make a chain from predecessor to root.
                    pred.right = curr;
                    curr = curr.left;
                } else {
                    pred.right = null;
                    result.push(curr.val);
                    curr = curr.right;
                }
            }
        }
        return result;
    }
}
