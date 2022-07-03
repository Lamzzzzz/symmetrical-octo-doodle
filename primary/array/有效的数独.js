/* 
请你判断一个 9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。

数字 1-9 在每一行只能出现一次。
数字 1-9 在每一列只能出现一次。
数字 1-9 在每一个以粗实线分隔的 3x3 宫内只能出现一次。（请参考示例图）
 

注意：

一个有效的数独（部分已被填充）不一定是可解的。
只需要根据以上规则，验证已经填入的数字是否有效即可。
空白格用 '.' 表示。
 

示例 1：


输入：board = 
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
输出：true
示例 2：

输入：board = 
[["8","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]
输出：false
解释：除了第一行的第一个数字从 5 改为 8 以外，空格内其他数字均与 示例1 相同。 但由于位于左上角的 3x3 宫内有两个 8 存在, 因此这个数独是无效的。
 

提示：

board.length == 9
board[i].length == 9
board[i][j] 是一位数字（1-9）或者 '.'

链接：https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2f9gg/
*/

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
    const length = board.length

    const lineSet = new Set()
    const verticalSet = new Set()
    const squareSets = [new Set(), new Set(), new Set()]

    for (let y = 0; y < length; y++) {
        for (let x = 0; x < length; x++) {
            const val = board[y][x]
            const vertical = board[x][y]

            if (val !== '.') {
                if (lineSet.has(val)) return false
                lineSet.add(val)

                const vx = Math.floor(x / 3)
                if (squareSets[vx].has(val)) return false
                squareSets[vx].add(val)
            }

            if (vertical !== '.') {
                if (verticalSet.has(vertical)) return false
                verticalSet.add(vertical)
            }

            if (x === length - 1) {
                lineSet.clear()
                verticalSet.clear()
            }
        }

        if (y === 2 || y === 5) {
            squareSets.forEach((item) => item.clear())
        }
    }

    return true
}
