/* 
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

 

示例 1：

输入：strs = ["flower","flow","flight"]
输出："fl"
示例 2：

输入：strs = ["dog","racecar","car"]
输出：""
解释：输入不存在公共前缀。
 

提示：

1 <= strs.length <= 200
0 <= strs[i].length <= 200
strs[i] 仅由小写英文字母组成

链接：https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnmav1/
 */

/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
    return strs.reduce((pre, current) => {
        while (current.indexOf(pre) !== 0) {
            pre = pre.slice(0, pre.length - 1)
        }
        return pre
    })
}

var longestCommonPrefix = function (strs) {
    return strs.reduce((pre, current) => {
        let i = 0
        while (i < pre.length) {
            if (pre[i] !== current[i]) {
                break
            }
            i++
        }
        return pre.slice(0, i)
    })
}

var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0]
    let index = 0
    const first = strs[0]
    outer: while (index < first.length) {
        for (let i = 1; i < strs.length; i++) {
            if (strs[i][index] !== first[index]) {
                break outer
            }
        }
        index++
    }
    return first.slice(0, index)
}
