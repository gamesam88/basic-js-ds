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
    if (!this.root) {
      return null
    } else {
      return this.root
    }
  }

  add(data) {
    if (!this.root) {
      this.root = new Node(data)
    } else {
      let node = this.root
      let newNode = new Node(data)
      while (node) {
        if (data > node.data) {
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
      if (data > node.data) {
        node.right = newNode
      } else {
        node.left = newNode
      }
    }
  }

  has(data) {
    function hasValue(node, data) {
      if (!node) {
        return false
      }
      if (node.data === data) {
        return true
      }
      return node.data > data ? hasValue(node.left, data) : hasValue(node.right, data)
    }
    return hasValue(this.root, data);
  }

  find(data) {
    function search(data, node) {
      if (!node) {
        return null
      }
      if (node.data === data) {
        return node
      }
      if (node.data < data) {
        return search(data, node.right)
      } else {
        return search(data, node.left)
      }
    }
    return search(data, this.root)
  }

  remove(data) {
    function removeValue(node, data) {
      if (!node) {
        return null;
      }
      if (node.data < data) {
        node.right = removeValue(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = removeValue(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let righ = node.right;
        while (righ.left) {
          righ = righ.left;
        }
        node.data = righ.data;
        node.right = removeValue(node.right, righ.data);
        return node;
      }
    }
    this.root = removeValue(this.root, data);
  }

  min() {
    if (!this.root) {
      return null
    } else {
      let cur = this.root
      while (cur.left) {
        cur = cur.left
      }
      return cur.data
    }

  }

  max() {
    if (!this.root) {
      return null
    } else {
      let cur = this.root
      while (cur.right) {
        cur = cur.right
      }
      return cur.data
    }
  }
}

module.exports = {
  BinarySearchTree
};