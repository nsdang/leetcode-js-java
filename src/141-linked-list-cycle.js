/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    let map = new Map();
    let temp = head;
    while (temp){
        if (map.has(temp))  return true;
        map.set(temp, true);
        temp = temp.next;
    }
    return false;
};