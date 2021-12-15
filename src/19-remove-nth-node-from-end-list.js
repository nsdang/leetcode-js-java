/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let temp = head;
    let hashMap = new Map();
    let i = 1;
    while(temp){
        hashMap.set(i, temp);
        temp = temp.next;
        i++;
    }
    let deleteI = Math.max(hashMap.size) - n + 1;
    if (deleteI === 1)  return head.next;
    if (deleteI === hashMap.size){
        hashMap.get(deleteI - 1).next = null;
        return head;
    }
    if (deleteI > hashMap.size) return head;
    hashMap.get(deleteI - 1).next = hashMap.get(deleteI + 1);
    //console.log(hashMap.get(deleteI - 1).next);
    return head;
};