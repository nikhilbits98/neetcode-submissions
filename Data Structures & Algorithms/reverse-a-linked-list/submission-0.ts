/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head: ListNode | null): ListNode {
        if(!head || !head.next){
            return head;
        }
        let prev = null;
        let it = head;
        while(it !== null){
            const next = it.next;
            it.next = prev;
            prev = it;
            it = next;
        }
        return prev;
    }
}
