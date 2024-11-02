
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Construct objects
const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');

// Set pointers
a.next = b;
b.next = c;
c.next = d;

// A -> B -> C -> D -> Null

/* const printLinkedList = (head) => {
    let curr = head;

    while (curr) {
        console.log(curr.val)
        curr = curr.next
    }
}; */

const printLinkedList = (head) => {
    // Base case
    if (!head) return

    // Recursive case
    console.log(head.val)
    printLinkedList(head.next)
};

// printLinkedList(a)

// Create values of a linked list
const createListValues = (head, values = []) => {
    // Base case
    if (!head) return values

    values.push(head.val);

    return createListValues(head.next, values);
};

console.log(createListValues(a));