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
        if (value > node.data) {
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
      if (value > node.data) {
        node.right = newNode
      } else {
        node.left = newNode
      }
    }
  }

  has(value) {
    return hasValue(this.root, value);

    function hasValue(node, value) {
      if (!node) {
        return false
      }

      if (node.data === value) {
        return true
      }

      return node.data > value ? searchWithIn(node.left, value) : searchWithIn(node.right, value)

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
      if (node.value < value) {
        return search(value, node.right)
      } else {
        return search(value, node.left)
      }
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