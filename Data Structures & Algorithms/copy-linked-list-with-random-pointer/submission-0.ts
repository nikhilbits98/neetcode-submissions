// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head: Node | null): Node {
        if(!head){
            return null;
        }
        const map = new Map<Node, Node>();        
        const root: Node = new Node(head.val, null, null);
        map.set(head, root);
        let it = head;
        let newIt = root;
        while(it.next !== null){
            const newNode = new Node(it.next.val, null, null);
            newIt.next = newNode;
            newIt = newIt.next;
            it = it.next;
            map.set(it, newIt);
        }
        it = head;
        newIt = root;
        while(it !== null){
            if(it.random){
                newIt.random = map.get(it.random);
            }
            newIt = newIt.next;
            it = it.next;
        }
        return root;
    }
}
