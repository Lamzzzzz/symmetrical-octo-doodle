/* 
给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。

 

示例 1：

输入: s = "leetcode"
输出: 0
示例 2:

输入: s = "loveleetcode"
输出: 2
示例 3:

输入: s = "aabb"
输出: -1
 

提示:

1 <= s.length <= 105
s 只包含小写字母

链接：https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn5z8r/
 */

/**
 * @param {string} s
 * @return {number}
 */

var firstUniqChar = function (s) {
    const all = new Set()
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        if (all.has(s[i])) {
            map.delete(s[i])
            continue
        }
        all.add(s[i])
        map.set(s[i], i)
    }
    for (const [s, i] of map) {
        return i
    }
    return -1
}

var firstUniqChar = function (s) {
    const map = new Map()

    for (let i = 0; i < s.length; i++) {
        const val = map.get(s[i])
        if (val) map.set(s[i], val + 1)
        else map.set(s[i], 1)
    }
    for (let i = 0; i < s.length; i++) {
        if (map.get(s[i]) === 1) {
            return i
        }
    }
    return -1
}
