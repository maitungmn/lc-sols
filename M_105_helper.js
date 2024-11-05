// Simple class for tree nodes
class TreeNode {
  constructor(val) {
      this.val = val;
      this.left = null;
      this.right = null;
  }
}

function buildTree(preorder, inorder) {
  // Step 1: If array is empty, return null
  if (preorder.length === 0) return null;
  
  // Step 2: First element in preorder is always the root
  const root = new TreeNode(preorder[0]);
  
  // Step 3: Find the root's position in inorder array
  const rootIndex = inorder.indexOf(root.val);
  
  // Step 4: Split inorder array
  const leftInorder = inorder.slice(0, rootIndex);
  const rightInorder = inorder.slice(rootIndex + 1);
  
  // Step 5: Split preorder array
  const leftPreorder = preorder.slice(1, leftInorder.length + 1);
  const rightPreorder = preorder.slice(leftInorder.length + 1);
  
  // Step 6: Recursively build left and right subtrees
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);
  
  return root;
}

// Helper function to print the tree in a readable format
function printTree(root, prefix = "", isLeft = true) {
  if (!root) return;
  
  console.log(prefix + (isLeft ? "├── " : "└── ") + root.val);
  
  // Print left subtree
  printTree(root.left, prefix + (isLeft ? "│   " : "    "), true);
  // Print right subtree
  printTree(root.right, prefix + (isLeft ? "│   " : "    "), false);
}

// Test Example
const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

const tree = buildTree(preorder, inorder);
console.log("Tree Structure:");
printTree(tree);

/* Let's solve step by step with example:
 preorder = [3, 9, 20, 15, 7]
 inorder = [9, 3, 15, 20, 7]

 Step 1: Root is first element in preorder = 3
 
 Step 2: Find 3 in inorder:
 [9, (3), 15, 20, 7]
 
 Step 3: Split:
 Left: 
 - inorder: [9]
 - preorder: [9]
 
 Right:
 - inorder: [15, 20, 7]
 - preorder: [20, 15, 7]
 
 Step 4: Repeat for each subtree */