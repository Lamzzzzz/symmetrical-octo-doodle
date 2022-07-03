/* 
给你单链表的头节点 head ，请你反转链表，并返回反转后的链表。
 

示例 1：


输入：head = [1,2,3,4,5]
输出：[5,4,3,2,1]
示例 2：


输入：head = [1,2]
输出：[2,1]
示例 3：

输入：head = []
输出：[]
 

提示：

链表中节点的数目范围是 [0, 5000]
-5000 <= Node.val <= 5000
 

进阶：链表可以选用迭代或递归方式完成反转。你能否用两种方法解决这道题？

链接：https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnnhm6/
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
 * @return {ListNode}
 */

var reverseList = function (head) {
    const stack = [head]
    while (head?.next) {
        stack.push(head.next)
        const current = head
        head = head.next
        current.next = null
    }
    for (let i = 0; i < stack.length; i++) {
        if (stack[i + 1]) {
            stack[i + 1].next = stack[i]
        }
    }
    return head
}

var reverseList = function (head) {
    let prev = null

    while (head) {
        const next = head.next
        head.next = prev
        prev = head
        head = next
    }
    head = prev
    return head
}

let result = null

var reverseList = function (head) {
    if (!head) {
        return null
    } else if (head.next === null) {
        result = head
        return result
    }
    reverseList(head.next)
    head.next.next = head
    head.next = null
    return result
}
