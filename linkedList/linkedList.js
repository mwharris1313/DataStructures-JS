var Node = function (value) {
  this.value = value === undefined ? null : value;
  this.next = null;
}

var LinkedList = function (value) {
  this.head = value === undefined ? null : new Node(value);
  this.tail = this.head;
};

LinkedList.prototype.append = function (value) {
  var node = new Node(value);
  this.tail.next = node;
  this.tail = node;
};

LinkedList.prototype.print = function (node) {
  console.log('------------------- Linked List');
  if (node !== undefined) return console.log(node.value); // print single node

  var node = this.head;
  while (node !== null) {
    console.log(node.value);
    node = node.next;
  }
};

var linkedList = new LinkedList(2);
linkedList.append(3);
linkedList.append(5);
linkedList.append(6);
linkedList.print();
linkedList.print(linkedList.head);
linkedList.print(linkedList.tail);


