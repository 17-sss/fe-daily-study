function solution(nodeinfo) {
 const preorderArr = [];
 const postorderArr = [];

 const nodes = nodeinfo
  .map((node, idx) => [idx + 1, node[0], node[1]])
  .sort((a, b) => b[2] - a[2]);

 const bTree = new BinaryTree(nodes[0][0], nodes[0][1]);
 for (let i = 1; i < nodes.length; i++) {
  bTree.insert(nodes[i][0], nodes[i][1]);
 }

 preorder(bTree, preorderArr);
 postorder(bTree, postorderArr);

 return [preorderArr, postorderArr];
}

class BinaryTree {
 constructor(value, x_pos) {
  this.value = value;
  this.x_pos = x_pos;
  this.left = null;
  this.right = null;
 }

 insert(value, x_pos) {
  this.x_pos >= x_pos
   ? this._toLeft(value, x_pos)
   : this._toRight(value, x_pos);
 }

 _toLeft(value, x_pos) {
  this.left
   ? this.left.insert(value, x_pos)
   : (this.left = new BinaryTree(value, x_pos));
 }

 _toRight(value, x_pos) {
  this.right
   ? this.right.insert(value, x_pos)
   : (this.right = new BinaryTree(value, x_pos));
 }
}

const preorder = (bTree, arr) => {
 if (bTree !== null) {
  arr.push(bTree.value);
  preorder(bTree.left, arr);
  preorder(bTree.right, arr);
 }
};

const postorder = (bTree, arr) => {
 if (bTree !== null) {
  postorder(bTree.left, arr);
  postorder(bTree.right, arr);
  arr.push(bTree.value);
 }
};
