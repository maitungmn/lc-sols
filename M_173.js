// https://leetcode.com/problems/binary-search-tree-iterator/description/
class TreeNode {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

var BSTIterator = function (root) {
  this.nodeSorted = [];
  this._inorder(root);
  this.index = -1;
};

BSTIterator.prototype._inorder = function (root) {

  if (!root) return;
  this._inorder(root.left);
  this.nodeSorted.push(root.val);
  this._inorder(root.right);

}

BSTIterator.prototype.next = function () {
  return this.nodeSorted[++this.index];
};

BSTIterator.prototype.hasNext = function () {
  return this.index + 1 < this.nodeSorted.length;
};

/** 
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/

// Helper function to create the example tree
function createExampleTree() {
  const root = new TreeNode(7);
  root.left = new TreeNode(3);
  root.right = new TreeNode(15);
  root.right.left = new TreeNode(9);
  root.right.right = new TreeNode(20);
  return root;
}

// Test the implementation
const root = createExampleTree();
const iterator = new BSTIterator(root);

// Test sequence from the example
console.log(iterator.next());    // 3
console.log(iterator.next());    // 7
console.log(iterator.hasNext()); // true
console.log(iterator.next());    // 9
console.log(iterator.hasNext()); // true
console.log(iterator.next());    // 15
console.log(iterator.hasNext()); // true
console.log(iterator.next());    // 20
console.log(iterator.hasNext()); // false