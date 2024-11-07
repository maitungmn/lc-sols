// https://leetcode.com/problems/insert-into-a-binary-search-tree/description/

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
    const leftIndex = 2 * i + 1;  // Left child index
    const rightIndex = 2 * i + 2; // Right child index

    if (leftIndex < nodes.length) {
      nodes[i].left = nodes[leftIndex];
    }
    if (rightIndex < nodes.length) {
      nodes[i].right = nodes[rightIndex];
    }
  }

  return nodes[0]; // The root of the tree
}

var insertIntoBST = function (root, val) {


  function dfs(node) {
    if (!node) {
      return new TreeNode(val);
    }

    if (val < node.val) {
      node.left = dfs(node.left);
    } else {
      node.right = dfs(node.right);
    }

    return node;

  }

  return dfs(root)
};

console.log(insertIntoBST(buildTreeFromArray([4, 2, 7, 1, 3]), 5));