/* 
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

 

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
解释："amanaplanacanalpanama" 是回文串
示例 2:

输入: "race a car"
输出: false
解释："raceacar" 不是回文串
 

提示：

1 <= s.length <= 2 * 105
字符串 s 由 ASCII 字符组成


链接：https://leetcode.cn/leetbook/read/top-interview-questions-easy/xne8id/
 */

/**
 * @param {string} s
 * @return {boolean}
 */

var isPalindrome = function (s) {
    s = s.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase()
    return s === s.split('').reverse().join('')
}

var isPalindrome = function (s) {
    s = s.replaceAll(/[^a-zA-Z0-9]/g, '').toLowerCase()
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (s[left] !== s[right]) return false
        left++
        right--
    }
    return true
}

var isPalindrome = function (s) {
    s = s.replaceAll(/[^a-zA-Z0-9]/g, '')
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (s[left].toLowerCase() !== s[right].toLowerCase()) return false
        left++
        right--
    }
    return true
}

var isPalindrome = function (s) {
    s = s.toLowerCase()
    let left = 0
    let right = s.length - 1
    while (left < right) {
        if (!isValid(s[left])) {
            left++
            continue
        }
        if (!isValid(s[right])) {
            right--
            continue
        }
        console.log('left', s[left])
        console.log('right', s[right])
        if (s[left] !== s[right]) return false
        left++
        right--
    }
    return true
}

function isValid(s) {
    const code = s.charCodeAt()
    return (code >= 48 && s <= 57) || (code >= 97 && code <= 122)
}
