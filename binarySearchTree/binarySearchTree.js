var BinarySearchTree = function (value) {
  this.value = value === undefined ? null : value;
  this.left = null;
  this.right = null;
}

BinarySearchTree.prototype.insert = function (value) {
  if (value === undefined) return null;
  if (value <= this.value) {
    if (this.left === null) return this.left = new BinarySearchTree(value);
    this.left.insert(value);
  } else if (value > this.value) {
    if (this.right === null) return this.right = new BinarySearchTree(value);
    this.right.insert(value);
  }
  return null;
};

BinarySearchTree.prototype.print = function () {
  console.log('------------------- Binary Search Tree');

  (function recPrint(node) {
    var left = node.left === null ? null : node.left.value;
    var right = node.right === null ? null : node.right.value;

    if (left !== null || right !== null)  {
      console.log(node.value);
      console.log(left, right);
      console.log('-------------------');
    }
    if (node === undefined) return;
    if (node.left !== null) recPrint(node.left, true);
    if (node.right !== null) recPrint(node.right, false);
  })(this);
};

var root = new BinarySearchTree(0);
root.insert(-1);
root.insert(-2);
root.insert(2);
root.insert(3);

root.print();
