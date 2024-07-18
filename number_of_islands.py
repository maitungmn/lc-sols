def countIslandsDFS(matrix):
    rows = len(matrix)
    cols = len(matrix[0])
    totalIslands = 0

    for i in range(rows):
        for j in range(cols):
            if int(matrix[i][j]) == 1:
                totalIslands += 1
                visitIslandDFS(matrix, i, j)

    return totalIslands


def visitIslandDFS(matrix, x, y):
    if x < 0 or x >= len(matrix) or y < 0 or y >= len(matrix[0]):
        return

    if int(matrix[x][y]) == 0:
        return

    matrix[x][y] = "0"

    visitIslandDFS(matrix, x + 1, y)
    visitIslandDFS(matrix, x - 1, y)
    visitIslandDFS(matrix, x, y + 1)
    visitIslandDFS(matrix, x, y - 1)


def main():
    case1 = [
        ["1", "1", "1", "1", "0"],
        ["1", "1", "0", "1", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "0", "0", "0"],
    ]
    case2 = [
        ["1", "1", "0", "0", "0"],
        ["1", "1", "0", "0", "0"],
        ["0", "0", "1", "0", "0"],
        ["0", "0", "0", "1", "1"],
    ]

    print(countIslandsDFS(case1))
    print(countIslandsDFS(case2))


main()
