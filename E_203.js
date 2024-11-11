// https://leetcode.com/problems/remove-linked-list-elements/

class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

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

function linkedListToArray(head) {
  let result = [];
  let current = head;
  while (current) {
    result.push(current.val);
    current = current.next;
  }
  return result;
}

function removeElements(head, val) {
  if (!head) return null;

  const dummy = new ListNode(0);
  dummy.next = head;
  let current = dummy;

  // Traverse the list
  while (current.next) {
    if (current.next.val === val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  if (current.val === val) {
    current = null;

  }

  return dummy.next;
}

// const testHead1 = createLinkedList([1, 2, 6, 3, 4, 5, 6]);
// console.log(linkedListToArray(removeElements(testHead1, 6)));
const testHead2 = createLinkedList([1]);
console.log(linkedListToArray(removeElements(testHead2, 1)));