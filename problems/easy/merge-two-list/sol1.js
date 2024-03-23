class ListNode {
  constructor (val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

function printList (head) {
  let cur = head;
  while (cur) {
    console.log(cur.val);
    cur = cur.next;
  }
}

function testMerge () {
  const list1 = new ListNode(1);
  list1.next = new ListNode(3);
  list1.next.next = new ListNode(5);

  const list2 = new ListNode(2);
  list2.next = new ListNode(8);
  list2.next.next = new ListNode(10);

  const mergedHead = mergeTwoList(list1, list2);
  printList(mergedHead);
}

const mergeTwoList = function (list1, list2) {
  let mergedHead = new ListNode();
  let cur = mergedHead;
  while (list1 && list2) {
    if (list1.val < list2.val) {
      cur.next = list1;
      list1 = list1.next;
    } else {
      cur.next = list2;
      list2 = list2.next;
    }
    cur = cur.next;
  }
  cur.next = list1 ? list1 : list2;
  return mergedHead.next; 
}

testMerge();