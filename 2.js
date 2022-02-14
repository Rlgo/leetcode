function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * {@link https://leetcode.com/submissions/detail/640904178/}
 */
var addTwoNumbers = function (l1, l2) {
  const ans = new ListNode();
  let cur;
  let ten = 0;

  while (l1 || l2) {
    const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + ten;
    const remainder = sum % 10;
    ten = Math.floor(sum / 10);
    if (cur) {
      cur.next = new ListNode(remainder);
      cur = cur.next;
    }
    else {
      ans.val = remainder;
      cur = ans;
    }
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  if (ten) cur.next = new ListNode(ten);

  return ans;
};

