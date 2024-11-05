// https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
function buildTree(preorder, inorder) {
  // Handle edge cases
  if (!preorder.length || !inorder.length) return null;

  // Create a map of value to index for inorder array for O(1) lookup
  const inorderMap = new Map();
  for (let i = 0; i < inorder.length; i++) {
    inorderMap.set(inorder[i], i);
  }

  // Helper function to construct tree recursively
  function buildTreeHelper(preStart, preEnd, inStart, inEnd) {
    if (preStart > preEnd || inStart > inEnd) return null;

    // The first element in preorder is always the root
    const rootVal = preorder[preStart];
    const root = new TreeNode(rootVal);

    // Find root's position in inorder
    const rootInorderIndex = inorderMap.get(rootVal);

    // Calculate size of left subtree
    const leftSubtreeSize = rootInorderIndex - inStart;

    // Recursively construct left and right subtrees
    root.left = buildTreeHelper(
      preStart + 1,                    // left subtree preorder start
      preStart + leftSubtreeSize,      // left subtree preorder end
      inStart,                         // left subtree inorder start
      rootInorderIndex - 1             // left subtree inorder end
    );

    root.right = buildTreeHelper(
      preStart + leftSubtreeSize + 1,  // right subtree preorder start
      preEnd,                          // right subtree preorder end
      rootInorderIndex + 1,            // right subtree inorder start
      inEnd                            // right subtree inorder end
    );

    return root;
  }

  return buildTreeHelper(0, preorder.length - 1, 0, inorder.length - 1);
}

// Function to serialize the tree for output verification
function serializeTree(root) {
  if (!root) return [];

  const result = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (node === null) {
      result.push("null");
    } else {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  // Remove trailing nulls
  while (result[result.length - 1] === "null") {
    result.pop();
  }

  return result;
}

// Test cases
const test1 = {
  preorder: [3, 9, 20, 15, 7],
  inorder: [9, 3, 15, 20, 7]
};

const test2 = {
  preorder: [-1],
  inorder: [-1]
};

console.log("Test 1:", serializeTree(buildTree(test1.preorder, test1.inorder)));
console.log("Test 2:", serializeTree(buildTree(test2.preorder, test2.inorder)));