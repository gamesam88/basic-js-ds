const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.root = null
  }

  root() {
    return this.root ? this.root : null
  }

  add(value) {
    if (!this.root) {
      this.root = new Node(value)
    } else {
      let node = this.root
      let newNode = new Node(value)
      while (node) {
        if (value > node.value) {
          if (!node.right) {
            break
          }
          node = node.right
        } else {
          if (!node.left) {
            break
          }
          node = node.left
        }
      }
      if (value > node.value) {
        node.right = newNode
      } else {
        node.left = newNode
      }
    }
  }
  print(root = this.root) {
    if (!root) {
      return true;
    }
    console.log(root.value);
    this.print(root.left)
    this.print(root.right)
  }

  has(value) {
    if (!this.root) {
      return false
    }
  }

  find(value) {
    function search(value, node) {
      if (!node) {
        return null
      }
      if (node.value === value) {
        return node
      }
      return node.data < data ? findData(node.right, data) : findData(node.left, data)
    }
    return search(value, this.root)
  }

  remove(/* data */) {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  min() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }

  max() {
    throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree
};