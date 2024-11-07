// https://leetcode.com/problems/sum-root-to-leaf-numbers/description/

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

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




/**
 * @param {TreeNode} root
 * @return {number}
 */
function sumNumbers(root) {
  const res = [];
  function dfs(node, path) {
    if (!node) return;

    path += node.val;
    if (!node.left && !node.right) {
      res.push(parseInt(path));
      return;
    }

    dfs(node.left, path);
    dfs(node.right, path);
  }

  dfs(root, '');
  return res.reduce((sum, num) => sum + num, 0);
};

// console.log(sumNumbers(buildTreeFromArray([1, 2, 3])));
console.log(sumNumbers(buildTreeFromArray([4, 9, 0, 5, 1]))); 