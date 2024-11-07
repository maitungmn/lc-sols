// https://leetcode.com/problems/delete-node-in-a-bst/

class TreeNode {
  constructor(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}

function buildTreeFromArray(arr) {
  if (arr.length === 0) return null;

  const nodes = arr.map(value => new TreeNode(value));

  for (let i = 0; i < nodes.length; i++) {
    const leftIndex = 2 * i + 1;  // Left child index
    const rightIndex = 2 * i + 2; // Right child index

    if (leftIndex < nodes.length) {
      nodes[i].left = nodes[leftIndex];
    }
    if (rightIndex < nodes.length) {
      nodes[i].right = nodes[rightIndex];
    }
  }

  return nodes[0]; // The root of the tree
}

function findMinNode(node) {
  while (node.left) {
    node = node.left;
  }
  return node;
}

var deleteNode = function (root, key) {

  function dfs(node) {
    if (!node) return null;

    if (node.val === key) {
      if (!node.left) return node.right;
      if (!node.right) return node.left;
      let successor = findMinNode(node.right);
      node.val = successor.val;
      node.right = deleteNode(node.right, successor.val);
    } else if (node.val < key) {
      node.right = deleteNode(node.right, key);
    } else {
      node.left = deleteNode(node.left, key);
    }
    return node;
  }

  return dfs(root)
};

console.log(deleteNode(buildTreeFromArray([5, 3, 6, 2, 4, null, 7]), 3));