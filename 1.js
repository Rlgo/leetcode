/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Brute force {@link https://leetcode.com/submissions/detail/640642988/}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (target === nums[i] + nums[j])
        return [i, j];
    }
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Brute force 2 {@link https://leetcode.com/submissions/detail/640653818/}
 */
var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    nums[i] = null;
    const remainder = target - current;
    const index = nums.indexOf(remainder);
    if (index !== -1)
      return [i, index];
  }
};

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * Hash table {@link https://leetcode.com/submissions/detail/640668588/}
 */
var twoSum = function (nums, target) {
  const obj = {};
  nums.forEach((num, i) => obj[num] = i);

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    const remainder = target - current;
    const index = obj[remainder];
    if (index !== undefined && index !== i)
      return [index, i];
  }
};