class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Construct objects
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);

a.next = b;
b.next = c;
c.next = d;

/* const linkedListSum = (head) => {
    if (!head) return 0;
    return head.val + linkedListSum(head.next);
} */

const linkedListSum = (head) => {
    let sum = 0;

    while (head) {
        sum += head.val;
        head = head.next;
    }

    return sum;
}

console.log(linkedListSum(a));