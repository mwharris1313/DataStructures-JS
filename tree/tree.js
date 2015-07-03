var Tree = function (value) {
  this.value = value === undefined ? null : value;
  this.children = null;
}

Tree.prototype.addChild = function (value) {
  if (this.children === null) this.children = [];
  var tree = new Tree(value)
  this.children.push(tree);
  return tree;
};

Tree.prototype.print = function () {
  console.log('------------------- Tree');

  (function recPrint(node) {
    console.log(node.value);
    if (node === undefined || node.children === null) return;
    for (var i=0; i<node.children.length; i++) {
      recPrint(node.children[i]);
    }
  })(this);
};


var root = new Tree(0);
var branch1 = root.addChild(1);
var branch2 = root.addChild(2);
branch1.addChild(1.1);
branch1.addChild(1.2);
branch2.addChild(2.1);
branch2.addChild(2.2);

root.print();
