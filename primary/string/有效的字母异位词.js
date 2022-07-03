/* 
给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

 

示例 1:

输入: s = "anagram", t = "nagaram"
输出: true
示例 2:

输入: s = "rat", t = "car"
输出: false
 

提示:

1 <= s.length, t.length <= 5 * 104
s 和 t 仅包含小写字母
 

进阶: 如果输入字符串包含 unicode 字符怎么办？你能否调整你的解法来应对这种情况？

链接：https://leetcode.cn/leetbook/read/top-interview-questions-easy/xn96us/
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const map = new Map()
    for (let i = 0; i < s.length; i++) {
        const sv = map.get(s[i])
        map.set(s[i], sv === undefined ? 1 : sv + 1)
        const value = map.get(t[i])
        map.set(t[i], value === undefined ? -1 : value - 1)
    }

    for (const value of map.values()) {
        if (value !== 0) return false
    }
    return true
}

var isAnagram = function (s, t) {
    if (s.length !== t.length) return false
    const sa = [...s].sort()
    const ta = [...t].sort()
    for (let i = 0; i < sa.length; i++) {
        if (sa[i] !== ta[i]) return false
    }
    return true
}

var isAnagram = function (s, t) {
    if (s.length !== t.length) return
    const map = new Map()
    for (const item of s) {
        map.set(item, map.get(item) + 1 || 1)
    }
    for (const str of t) {
        const num = map.get(str)
        if (num === 0) return false
        map.set(str, -1)
    }
    for (const value of map.values()) {
        if (value !== 0) return false
    }
    return true
}
