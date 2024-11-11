// https://leetcode.com/problems/remove-duplicates-from-sorted-list/description/

// Definition for singly-linked list node
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

function deleteDuplicates(head) {
  // If list is empty or has only one node
  if (!head || !head.next) {
    return head;
  }

  // Start with the first node
  let current = head;

  // Traverse the list
  while (current && current.next) {
    // If current node's value equals next node's value
    if (current.val === current.next.val) {
      // Skip the duplicate node
      current.next = current.next.next;
    } else {
      // Move to next node only if no duplicate was found
      current = current.next;
    }
  }

  return head;
}

// Helper function to create a linked list from array (for testing)
function createLinkedList(arr) {
  if (!arr.length) return null;
  let head = new ListNode(arr[0]);
  let current = head;
  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }
  return head;
}

// Helper function to convert linked list to array (for testing)
function linkedListToArray(head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

// Test cases
let test1 = createLinkedList([1, 1, 2]);
let test2 = createLinkedList([1, 1, 2, 3, 3]);

console.log(linkedListToArray(deleteDuplicates(test1))); // [1, 2]
console.log(linkedListToArray(deleteDuplicates(test2))); // [1, 2, 3]