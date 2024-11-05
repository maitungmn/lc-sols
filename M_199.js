// https://leetcode.com/problems/binary-tree-right-side-view/description/

// class TreeNode {
//   constructor(val) {
//     this.val = val;
//     this.left = null;
//     this.right = null;
//   }
// }

// function findExponentOf2(num) {
//   let i = 1;
//   while ((num >> i) !== 0) {
//     i++
//   }
//   return i - 1
// }

// function rightSideView(root) {
//   if (!root.length) return []
//   // root will always have the length is a odd number (root contains one value)
//   const exponentOf2 = findExponentOf2(root.length + 1);

//   let lastIndex = 0;
//   const res = [root[lastIndex]];
//   let i = 1;
//   while (i < exponentOf2) {
//     lastIndex = (2 << i) - 2;
//     console.log(lastIndex)
//     res.push(root[lastIndex])
//     i++
//   }
//   return res;
// };
// console.log(rightSideView([1, 2, 3, null, 5, null, 4])) // [1,3,4]
// console.log(rightSideView([1, null, 3])) // [1,3]

// Correct way:
//1 
// var rightSideView = function (root) {
//   if (!root) return []

//   return treeCheck(root, [], 1);
// };

// const treeCheck = (node, path, level) => {
//   if (!node) return path
//   if (path.length < level) path.push(node.val);

//   treeCheck(node.right, path, level + 1);
//   treeCheck(node.left, path, level + 1)

//   return path
// }

// 2
var rightSideView = function (root) {
  const output = [];

  const getMaxHeight = (node) => {
    if (node === null) return 0;
    const leftHeight = getMaxHeight(node.left);
    const rightHeight = getMaxHeight(node.right);
    return leftHeight > rightHeight ? leftHeight + 1 : rightHeight + 1;
  }

  const getNodes = (node, level, currLevel) => {
    if (node === null) return;
    if (level === 1 && output.length === currLevel - 1) {
      // console.log(node.val);
      output.push(node.val);
    }

    if (level > 1) {
      getNodes(node.right, level - 1, currLevel);
      getNodes(node.left, level - 1, currLevel);
    }
  };

  const height = getMaxHeight(root);
  for (let i = 1; i <= height; i++) {
    getNodes(root, i, i);
  }
  return output;
};