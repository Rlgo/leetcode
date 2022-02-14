/**
 * @param {string} s
 * @return {number}
 * {@link https://leetcode.com/submissions/detail/640929875/}
 */
var lengthOfLongestSubstring = function (s) {
  const chars = s.split("");
  let ans = 0;

  chars.forEach((char, i) => {
    let set = new Set(char)
    for (let j = i + 1; j < chars.length; j++) {
      const char2 = chars[j];
      if (set.has(char2))
        break;
      else set.add(char2)
    }
    ans = Math.max(ans, set.size);
  })
  return ans;
};