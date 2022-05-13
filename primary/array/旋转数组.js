/* 
给你一个数组，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。

 

示例 1:

输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释: 
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]
 

提示：

1 <= nums.length <= 105
-231 <= nums[i] <= 231 - 1
0 <= k <= 105
 

进阶：

尽可能想出更多的解决方案，至少有 三种 不同的方法可以解决这个问题。
你可以使用空间复杂度为 O(1) 的 原地 算法解决这个问题吗？

链接：https://leetcode.cn/leetbook/read/top-interview-questions-easy/x2skh7/
 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var rotate = function (nums, k) {
    const length = nums.length
    k %= length
    if (k === 0 || length === 1) return
    const temp = [...nums]
    for (let i = 0; i < length; i++) {
        nums[(i + k) % length] = temp[i]
    }
}

var rotate = function (nums, k) {
    const length = nums.length
    if (length === 1) return
    k %= length
    if (k === 0) return
    const saved = nums.slice(length - k)
    for (let i = length - 1; i > k - 1; i--) {
        nums[i] = nums[i - k]
    }
    for (let i = 0; i < saved.length; i++) {
        nums[i] = saved[i]
    }
}

var rotate = function (nums, k) {
    const length = nums.length
    k %= length
    if (k === 0 || length === 1) return
    nums.reverse()

    reverse(nums, 0, k - 1)
    reverse(nums, k, length - 1)
    function reverse(arr, s, e) {
        while (s < e) {
            arr[s] = arr[s] ^ arr[e]
            arr[e] = arr[s] ^ arr[e]
            arr[s] = arr[s] ^ arr[e]
            s++
            e--
        }
    }
}
