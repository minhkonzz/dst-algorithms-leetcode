function ListNode(val, next) {
   this.val = val === undefined? 0 : val;
   this.next = next === undefined? null : next;
}

const addTwoNumbers = function (l1, l2) {
   let carry = 0;
   let result = new ListNode();
   let current = result;

   while (l1 || l2 || carry) {
      const x = l1? l1.val : 0;
      const y = l2? l2.val : 0;
      const sum = carry + x + y;

      carry = Math.floor(sum / 10);
      current.next = new ListNode(sum % 10);
      current = current.next;

      if (l1) l1 = l1.next;
      if (l2) l2 = l2.next;
   }
   return result.next;
}

const n1 = new ListNode(3);
const n2 = new ListNode(4, n1);
const n3 = new ListNode(2, n2);

const k1 = new ListNode(4);
const k2 = new ListNode(6, k1);
const k3 = new ListNode(5, k2);

let result = addTwoNumbers(n3, k3);
while (true) {
   console.log(result.val);
   result = result.next;
   if (!result) break;
}