/* 
给你一个单链表的头节点 head ，请你判断该链表是否为回文链表。如果是，返回 true ；否则，返回 false 。

 

示例 1：


输入：head = [1,2,2,1]
输出：true
示例 2：


输入：head = [1,2]
输出：false
 

提示：

链表中节点数目在范围[1, 105] 内
0 <= Node.val <= 9
 

进阶：你能否用 O(n) 时间复杂度和 O(1) 空间复杂度解决此题？

链接：https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnv1oc/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

var isPalindrome = function (head) {
    const set = []
    while (head) {
        set.push(head.val)
        head = head.next
    }
    let x = 0
    let y = set.length - 1
    while (x < y) {
        if (set[x] !== set[y]) return false
        x++
        y--
    }
    return true
}
