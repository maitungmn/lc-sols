# https://leetcode.com/problems/balance-a-binary-search-tree/description/?envType=daily-question&envId=2024-04-19


class TreeNode:
    def __init__(self, val=0, left=None, right=None):
        self.val = val
        self.left = left
        self.right = right


def balanceBST(root):
    # Step 1: Perform an inorder traversal to get sorted values
    def inorder(node):
        if not node:
            return []
        return inorder(node.left) + [node.val] + inorder(node.right)

    # Step 2: Build a balanced BST from sorted array
    def buildBalancedBST(arr, start, end):
        if start > end:
            return None
        mid = (start + end) // 2
        node = TreeNode(arr[mid])
        node.left = buildBalancedBST(arr, start, mid - 1)
        node.right = buildBalancedBST(arr, mid + 1, end)
        return node

    # Get sorted array of values
    sorted_values = inorder(root)

    # Build and return balanced BST
    return buildBalancedBST(sorted_values, 0, len(sorted_values) - 1)


# Helper function to convert list representation to TreeNode
def listToTreeNode(lst):
    if not lst:
        return None
    root = TreeNode(lst[0])
    queue = [root]
    i = 1
    while queue and i < len(lst):
        node = queue.pop(0)
        if i < len(lst) and lst[i] is not None:
            node.left = TreeNode(lst[i])
            queue.append(node.left)
        i += 1
        if i < len(lst) and lst[i] is not None:
            node.right = TreeNode(lst[i])
            queue.append(node.right)
        i += 1
    return root


# Helper function to convert TreeNode to list representation
def treeNodeToList(root):
    if not root:
        return []
    result = []
    queue = [root]
    while queue:
        node = queue.pop(0)
        if node:
            result.append(node.val)
            queue.append(node.left)
            queue.append(node.right)
        else:
            result.append(None)
    while result[-1] is None:
        result.pop()
    return result


# Test the function
input1 = [1, None, 2, None, 3, None, 4, None, None]
root1 = listToTreeNode(input1)
balanced_root1 = balanceBST(root1)
output1 = treeNodeToList(balanced_root1)
print("Example 1 Output:", output1)

input2 = [2, 1, 3]
root2 = listToTreeNode(input2)
balanced_root2 = balanceBST(root2)
output2 = treeNodeToList(balanced_root2)
print("Example 2 Output:", output2)


# # Definition for a binary tree node.
# # class TreeNode:
# #     def __init__(self, val=0, left=None, right=None):
# #         self.val = val
# #         self.left = left
# #         self.right = right
# class Solution:
#     def balanceBST(self, root: TreeNode) -> TreeNode:
#         if root is None:
#             return None
#         inorder_traversal = []
#         self.inorder(root, inorder_traversal)
#         return self.solve(inorder_traversal, 0, len(inorder_traversal) - 1)

#     def inorder(self, root: TreeNode, nodes: list) -> None:
#         if root is None:
#             return
#         self.inorder(root.left, nodes)
#         nodes.append(root)
#         self.inorder(root.right, nodes)

#     def solve(self, nodes: list, start: int, end: int) -> TreeNode:
#         if start > end:
#             return None
#         mid = (start + end) // 2
#         root = nodes[mid]
#         root.left = self.solve(nodes, start, mid - 1)
#         root.right = self.solve(nodes, mid + 1, end)
#         return root