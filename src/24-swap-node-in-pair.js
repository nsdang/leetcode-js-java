var swapPairs = function(head) {
    if (head == null || head.next == null) return head
    
    // create a dummy to keep track of the new linked list
    let dummy = new ListNode(0, null)
    // tail would keep track of the dummy and move as it link more nodes
    let tail = dummy
    
    while (head != null && head.next != null) {
        let currHead = head
        let nextHead = head.next
        let skipHead = head.next.next    
        
        // reverse the second node with the first node
        nextHead.next = currHead
        currHead.next = null
        
        // nextHead = [2,1]
        tail.next = nextHead
        // dummy = [0,2,1] so tail = [1]
        tail = tail.next.next
        // point the head to the next part so it can reverse and repeat again
        head = skipHead
    }
    
    // this is for odd amount of nodes
    // since previous is tail.next = nextHead, which skips 2
    // for even, it won't affect it
    tail.next = head
    
    // dummy.next holds the newly reversed linked list
    return dummy.next
};

var swapPairs = function(head) {
    if (head == null || head.next == null) return head
    
    let currHead = head
    let nextHead = head.next
    let skipHead = head.next.next
    
    // relink the second node to the first node
    nextHead.next = currHead
    
    // the firstNode's next would be the result of the swap
    currHead.next = swapPairs(skipHead)
    
    // nextHead targets the 2nd node, which would be the first node if it reversed
    return nextHead
};