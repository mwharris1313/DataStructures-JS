var Stack = function () {
  this.size = 0;
  this.storage = {};
};

Stack.prototype.push = function (item) {
  this.size++;
  this.storage[this.size] = item;
};

Stack.prototype.pop = function () {
  if (this.size < 1) return null;
  var item = this.storage[this.size];
  delete this.storage[this.size];
  this.size--;
  return item;
};

Stack.prototype.getSize = function () {
  return this.size;
};

Stack.prototype.print = function () {
  if (this.size < 1) return console.log('Stack Empty');
  var out = '';
  for (var i=1; i<=this.size; i++) {
    out += this.storage[i] + ' ';
  }
  console.log(out);
};

var stack = new Stack();
console.log(stack.getSize());
stack.push(1);
stack.push(2);
stack.print();
stack.push(8);
stack.push(4);
stack.print();
console.log('size:', stack.getSize());
stack.pop();
stack.print();
console.log('size:', stack.getSize());
stack.pop();
stack.pop();
stack.pop();
stack.pop();
stack.print();
console.log('size:', stack.getSize());
