const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Element {
  data;
  rightChild;
  leftChild;
  constructor(data) {
    this.data = data;
    this.rightChild = null;
    this.leftChild = null;
  }
}

class BinarySearchTree {
  rootElement = null;

  root() {
    return this.rootElement;
  }

  add(data, nextChild = this.root()) {
    if(!this.rootElement) {
      this.rootElement = new Element(data);
    }
    else {
      if(nextChild.data < data) {
        if(nextChild.rightChild) {
          this.add(data, nextChild.rightChild);
        }
        else {
          nextChild.rightChild = new Element(data)
        }
      }
      else {
        if(nextChild.leftChild) {
          this.add(data, nextChild.leftChild);
        }
        else {
          nextChild.leftChild = new Element(data)
        }
      }
    }
  }

  has(data, thisChild = this.root()) {
    if(!thisChild.data) {
      return false;
    }
    if (thisChild.data === data) {
      return true;
    }
    if(data > thisChild.data) {
      if(thisChild.rightChild !== null) {
        return this.has(data, thisChild.rightChild);
      }
      else return  false;
    }
    else {
      if(thisChild.leftChild !== null) {
        return this.has(data, thisChild.leftChild);
      }
      else return  false;
    }
  }

  find(data, thisChild = this.root()) {
    if (!this.has(data)) {
      return null;
    }
    if(thisChild.data === data) {
      return thisChild;
    }
    if(thisChild.data < data) {
      if(thisChild.rightChild) {
        return this.find(data, thisChild.rightChild)
      }
    }
    else {
      if(thisChild.leftChild) {
        return this.find(data, thisChild.leftChild)
      }
    }
  }

  remove(data, thisChild = this.root()) {
    // if(this.has(data)) {
    //   if(thisChild.data === data) {
    //     thisChild = null;
    //   }
    //   else {
    //     if(thisChild.data < data) {
    //       if(thisChild.rightChild.data === data) {
    //         thisChild.rightChild = thisChild.rightChild.rightChild ? thisChild.rightChild.rightChild : thisChild.rightChild.leftChild ?  thisChild.rightChild.leftChild: null;
    //       }
    //       else {
    //         this.remove(data, thisChild.rightChild);
    //       }
    //     }
    //     else  {
    //       if(thisChild.leftChild.data === data) {
    //         thisChild.leftChild = thisChild.leftChild.rightChild ? thisChild.leftChild.rightChild : thisChild.leftChild.leftChild ?  thisChild.leftChild.leftChild: null;
    //       }
    //       else {
    //         this.remove(data, thisChild.leftChild);
    //       }
    //     }
    //   }
    // }
  }

  min(thisChild = this.root()) {
    if(!this.root().data) {
      return null;
    }
    if(thisChild.leftChild) {
      return this.min(thisChild.leftChild)
    }
    else {
      return thisChild.data;
    }
  }

  max(thisChild = this.root()) {
    if(!this.root().data) {
      return null;
    }
    if(thisChild.rightChild) {
      return this.max(thisChild.rightChild)
    }
    else {
      return thisChild.data;
    }
  }
}

module.exports = {
  BinarySearchTree
};