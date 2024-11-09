// https://leetcode.com/problems/count-subtrees-with-max-distance-between-cities/description/

/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
function getTreeDiameter(graph, nodes, n) {
  if (nodes.length === 1) return 0
  let root = nodes[0]
  let depths = Array(n).fill(0)
  let visited = new Set()
  function dfs(node, depth) {
    if (visited.has(node)) return
    visited.add(node)
    depths[node] = depth
    for (const to of graph.get(node) || []) {
      if (!visited.has(to) && nodes.includes(to)) {
        dfs(to, depth + 1)
      }
    }
  }
  function dfs2(node) {
    if (visited.has(node)) return
    visited.add(node)
    let dist = 0
    for (const to of graph.get(node) || []) {
      if (!visited.has(to) && nodes.includes(to)) {
        dist = Math.max(dist, dfs2(to) + 1)
      }
    }
    return dist
  }
  dfs(root, 0)
  let maxDepth = -1
  let furthestNode = -1
  for (const node of nodes) {
    if (depths[node] > maxDepth) {
      maxDepth = depths[node]
      furthestNode = node
    }
  }
  visited.clear()
  return dfs2(furthestNode)
}
function getComponentSize(graph, nodes, n) {
  let count = 0
  let visited = Array(n).fill(false)
  function dfs(node) {
    if (visited[node]) return
    visited[node] = true
    for (const to of graph.get(node) || []) {
      if (!visited[to] && nodes.includes(to)) {
        dfs(to)
      }
    }
  }
  for (const node of nodes) {
    if (!visited[node]) {
      dfs(node)
      count += 1
    }
  }
  return count
}
var countSubgraphsForEachDiameter = function (n, edges) {
  let graph = new Map()
  let distMap = new Map()
  for (const [a, b] of edges) {
    u = a - 1
    v = b - 1
    if (!graph.has(u)) {
      graph.set(u, [])
    }
    if (!graph.has(v)) {
      graph.set(v, [])
    }
    graph.get(u).push(v)
    graph.get(v).push(u)
  }
  for (let mask = 0; mask < (1 << n); mask++) {
    let select = []
    for (let j = 0; j < n; j++) {
      if (mask & (1 << j)) {
        select.push(j)
      }
    }
    let size = getComponentSize(graph, select, n)
    if (size === 1) {
      let dist = getTreeDiameter(graph, select, n)
      if (!distMap.has(dist)) {
        distMap.set(dist, [])
      }
      distMap.get(dist).push(select)
    }
  }
  let ans = Array(n - 1).fill(0)
  for (let d = 1; d <= n - 1; d++) {
    let count = 0
    if (distMap.has(d)) {
      count = distMap.get(d).length
    }
    ans[d - 1] = count
  }
  return ans
};

console.log(countSubgraphsForEachDiameter(4, [[1,2], [2,3], [2,4]]));  // [3,4,0]