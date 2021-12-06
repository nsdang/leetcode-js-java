/**

Definition for singly-linked list.
function ListNode(val, next) {
this.val = (val===undefined ? 0 : val)
this.next = (next===undefined ? null : next)
}
/
/*
@param {ListNode} head
@return {ListNode}
*/
var deleteDuplicates = function(head) {
    let dict = new Map();
    let p = head;
    let dupP = null;
    while (p){
    if (dict.has(p.val)){
    p = p.next;
    continue;
    }
    else if (dupP){
    dupP.next = p;
    }
    dict.set(p.val, true);
    dupP = p;
    p = p.next;
    }
    if (p !== dupP){
    dupP.next = p;
    }
    return head;
    };