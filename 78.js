/**
 * @param {number[]} nums
 * @return {number[][]}
 * Iteration {@link https://leetcode.com/submissions/detail/640566965/}
 */
var subsets = function (nums) {
  const res = [[]];
  while (nums.length > 0) {
    const cur = nums.shift();
    const arr = res.map(val => [...val, cur]);
    res.push(...arr);
  }
  return res;
};

/**
 * @param {number[]} nums
 * @return {number[][]}
 * Recursion {@link https://leetcode.com/submissions/detail/640630914/}
 */
var subsets = function (nums) {
  const result = []
  const subset = []

  backtrack(0)
  return result

  function backtrack(index) {
    if (index >= nums.length) {
      result.push([...subset])
      return
    }
    subset.push(nums[index])
    backtrack(index + 1)
    subset.pop()
    backtrack(index + 1)
  }
};