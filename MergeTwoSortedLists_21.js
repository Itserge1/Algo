// You are given the heads of two sorted linked lists list1 and list2.
// Merge the two lists in a one sorted list. The list should be made by 
// splicing together the nodes of the first two lists.
// Return the head of the merged linked list.

// Input: list1 = [1,2,4], list2 = [1,3,4]
// Output: [1,1,2,3,4,4]

// Input: list1 = [], list2 = []
// Output: []

// Input: list1 = [], list2 = [0]
// Output: [0]

class ListNode {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
    }
    // methodes

    addToFront(value) {
        var new_node = new ListNode(value);

        // If the list is empty
        if (this.head == null) {
            this.head = new_node;
            this.tail = new_node;
        }

        // If the list is not empty
        else {
            new_node.next = this.head;
            this.head = new_node;
        }
    }

    addToBack(value){
        let new_node = new ListNode(value);

        // If the list is empty
        if(this.head == null){
            this.head = new_node;
            this.tail = new_node;
        }

        // If the list is not empty
        else{
            this.tail.next = new_node;
            this.tail = new_node;
        }
    }
}

var list1 = new SinglyLinkedList();
var list2 = new SinglyLinkedList();

list1.addToFront(4);
list1.addToFront(2);
list1.addToFront(1);

console.log(list1)

list2.addToFront(4);
list2.addToFront(3);
list2.addToFront(1);

console.log(list2)


var mergeTwoLists = (list1, list2) => {
    // setting up variable
    let runner = list1.head;
    let pointer = list1.head;
    let tracker = list1.head.next;

    // creating the logic
    if(list1.head.value <= list2.head.value){
        list1.head.next = list2.head;
        runner = list1.head.next;
        pointer = runner.next;
    }
    while(runner.next){
        if(runner == list1.tail ){
            runner.next = pointer;
            runner = pointer;
        }
        else if(runner == list2.tail ){
            runner.next = tracker;
            runner = tracker;
        }
        else if(runner.value <= pointer.value && runner.value <= tracker.value && tracker.value <= pointer.value){
            runner.next = tracker;
            runner = tracker;
            tracker = tracker.next;
        } else if (runner.value <= pointer.value && runner.value <= tracker.value && tracker.value > pointer.value){
            runner.next = pointer;
            runner = pointer;
            pointer = pointer.next
        }
    }
    return list1
};


console.log(mergeTwoLists(list1 ,list2));