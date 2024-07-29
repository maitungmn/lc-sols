# https://leetcode.com/problems/maximal-rectangle/description/?envType=daily-question&envId=2024-04-19

def maximalRectangle(matrix):
    if not matrix or not matrix[0]:
        return 0
    
    rows, cols = len(matrix), len(matrix[0])
    heights = [0] * cols
    max_area = 0
    
    for row in range(rows):
        for col in range(cols):
            # Update the heights
            if matrix[row][col] == "1":
                heights[col] += 1
            else:
                heights[col] = 0
        
        # Calculate the max area for the current row
        max_area = max(max_area, largestRectangleArea(heights))
    
    return max_area

def largestRectangleArea(heights):
    stack = []
    max_area = 0
    heights.append(0)  # Add a sentinel value to handle the last iteration
    
    for i, h in enumerate(heights):
        start = i
        while stack and stack[-1][1] > h:
            index, height = stack.pop()
            max_area = max(max_area, height * (i - index))
            start = index
        stack.append((start, h))
    
    return max_area

# Example usage
matrix = [["1","0","1","0","0"],
          ["1","0","1","1","1"],
          ["1","1","1","1","1"],
          ["1","0","0","1","0"]]

result = maximalRectangle(matrix)
print(result)  # Output: 6