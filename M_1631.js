// https://leetcode.com/problems/path-with-minimum-effort/description/

var minimumEffortPath = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const efforts = Array.from({ length: rows }, () => Array(cols).fill(Infinity));

  efforts[0][0] = 0;
  const minHeap = new MinHeap();
  minHeap.insert(new Cell(0, 0, 0));

  while (!minHeap.isEmpty()) {
    const { effort, x, y } = minHeap.extractMin();

    if (x === rows - 1 && y === cols - 1) {
      return effort;
    }

    for (const [dx, dy] of directions) {
      const newX = x + dx;
      const newY = y + dy;

      if (newX >= 0 && newX < rows && newY >= 0 && newY < cols) {
        const currentEffort = Math.max(effort, Math.abs(heights[newX][newY] - heights[x][y]));

        if (currentEffort < efforts[newX][newY]) {
          efforts[newX][newY] = currentEffort;
          minHeap.insert(new Cell(newX, newY, currentEffort));
        }
      }
    }
  }

  return 0;
};

class MinHeap {
  constructor() {
    this.heap = [];
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  insert(cell) {
    this.heap.push(cell);
    this.bubbleUp(this.heap.length - 1);
  }

  extractMin() {
    const min = this.heap[0];
    const end = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = end;
      this.sinkDown(0);
    }
    return min;
  }

  bubbleUp(index) {
    const element = this.heap[index];
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      const parent = this.heap[parentIndex];
      if (element.effort >= parent.effort) break;
      this.heap[index] = parent;
      this.heap[parentIndex] = element;
      index = parentIndex;
    }
  }

  sinkDown(index) {
    const length = this.heap.length;
    const element = this.heap[index];
    while (true) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild, rightChild;
      let swapIndex = null;

      if (leftChildIndex < length) {
        leftChild = this.heap[leftChildIndex];
        if (leftChild.effort < element.effort) {
          swapIndex = leftChildIndex;
        }
      }

      if (rightChildIndex < length) {
        rightChild = this.heap[rightChildIndex];
        if (
          (swapIndex === null && rightChild.effort < element.effort) ||
          (swapIndex !== null && rightChild.effort < leftChild.effort)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      if (swapIndex === null) break;
      this.heap[index] = this.heap[swapIndex];
      this.heap[swapIndex] = element;
      index = swapIndex;
    }
  }
}

class Cell {
  constructor(x, y, effort) {
    this.x = x;
    this.y = y;
    this.effort = effort;
  }
}

console.log(minimumEffortPath([[1,2,3],[3,8,4],[5,3,5]])) // 1
console.log(minimumEffortPath([[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]])) // 0