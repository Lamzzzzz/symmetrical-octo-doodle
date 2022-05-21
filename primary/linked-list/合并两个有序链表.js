/* 
将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。 

 

示例 1：


输入：l1 = [1,2,4], l2 = [1,3,4]
输出：[1,1,2,3,4,4]
示例 2：

输入：l1 = [], l2 = []
输出：[]
示例 3：

输入：l1 = [], l2 = [0]
输出：[0]
 

提示：

两个链表的节点数目范围是 [0, 50]
-100 <= Node.val <= 100
l1 和 l2 均按 非递减顺序 排列

链接：https://leetcode.cn/leetbook/read/top-interview-questions-easy/xnnbp2/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
    let node1 = list1
    let node2 = list2
    while (node1 && node2) {
        if (node1.val === node2.val) {
            const temp = node1.next
            node1.next = node2
            node1 = temp
        } else if (node1.val < node2.val) {
            if (node1.next.val <= node2.val) {
                node1 = node1.next
            } else {
                const temp = node1.next
                node1.next = node2
                node1 = temp
            }
        } else {
            if (node1.val > node2.next.val) {
                node2 = node2.next
            } else {
                const temp = node2.next
                node2.next = node1
                node2 = temp
            }
        }
    }
    return list1.val < list2.val ? list1 : list2
}
