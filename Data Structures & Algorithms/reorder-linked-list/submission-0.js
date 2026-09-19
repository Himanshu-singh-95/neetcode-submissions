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
     * @return {void}
     */
    reorderList(head) {
            // Find Middle
    let slow = head;
    let fast = head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    // Reversing the Second Half
    let second = slow.next;
    slow.next = null;
    let prev = null;
    while (second != null) {
      const temp = second.next;
      second.next = prev;
      prev = second;
      second = temp;
    }

    // Now merge the two halves, weaving them together one by one
    let first = head; // This will traverse the first half
    second = prev; // This will traverse the reversed second half
    while (second !== null) {
      const tmp1 = first.next;
      const tmp2 = second.next;
      first.next = second;
      second.next = tmp1;
      first = tmp1;
      second = tmp2;
    }
    }
}
