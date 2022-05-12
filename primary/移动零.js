/* 
给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

请注意 ，必须在不复制数组的情况下原地对数组进行操作。

 

示例 1:

输入: nums = [0,1,0,3,12]
输出: [1,3,12,0,0]
示例 2:

输入: nums = [0]
输出: [0]
 

提示:

1 <= nums.length <= 104
-231 <= nums[i] <= 231 - 1
 

进阶：你能尽量减少完成的操作次数吗？
 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function (nums) {
    const idxs = []
    nums.forEach((item, index) => {
        if (item === 0) idxs.push(index)
    })

    idxs.forEach((item, i) => {
        const end = (idxs[i + 1] || nums.length) - 1
        while (item < end) {
            nums[item - i] = nums[++item]
        }
    })

    for (let i = 1; i <= idxs.length; i++) {
        nums[nums.length - i] = 0
    }
    return nums
}

/* // 慢
var moveZeroes = function(nums) {
    let count = 0
    for(let i = 0; i< nums.length;i++) {
        if(nums[i] === 0) {
            nums.splice(i,1)
            count++
            i--
        }
    }
    return nums.push(...Array(count).fill(0))
} */

/* // 慢
var moveZeroes = function(nums) {
    const idxs = new Set()
    nums.forEach((item, index) => {
        if (item === 0) idxs.add(index)
    })
    let ofs = 0
    for (const i of idxs.values()){
        nums.splice(i-ofs,1)
        nums.push(0)
        ofs++
    }
    return nums
}; */
