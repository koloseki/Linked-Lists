import Node from './Node.ts';

export default class LinkedList {
  constructor(public listHead: Node | null = null) {
    // Remove the second initialization
  }

  //Append a node to the end of the list
  append(value: any) {
    const newNode = new Node(value);

    if (!this.listHead) {
      this.listHead = newNode;
      return;
    }

    let current = this.listHead;

    while (current.link) {
      current = current.link;
    }

    current.link = newNode;
  }

  //Prepend a node to the beginning of the list
  prepend(value: any) {
    const newNode = new Node(value);

    newNode.link = this.listHead;
    this.listHead = newNode;
  }

  //Return the size of the list
  size() {
    let counter = 0;
    let current = this.listHead;

    while (current) {
      counter++;
      current = current.link;
    }

    return counter;
  }

  //Return the first node on the list
  head() {
    return this.listHead;
  }

  //Return the last node on the list
  tail() {
    if (!this.listHead) {
      return null;
    }

    let current = this.listHead;

    while (current.link) {
      current = current.link;
    }

    return current;
  }


  //Return the node at the given index
  at(index:any){
    if (!this.listHead) {
      return null;
    }

    let counter = 0;
    let current = this.listHead;

    while (current) {
      if (counter === index) {
        return current;
      }

      counter++;
      current = current.link;
    }

    return null;
  }

  //Remove the last node
  pop() {
    if (!this.listHead) {
      return null; // Empty list
    }

    if (!this.listHead.link) {
      // Only one node in the list
      const node = this.listHead;
      this.listHead = null;
      return node;
    }

    let current = this.listHead;
    let previous = null;

    while (current.link) {
      previous = current;
      current = current.link;
    }

    if (previous) {
      // If there is more than one node, update the link of the previous node
      previous.link = null;
    } else {
      // If there was only one node, update the listHead
      this.listHead = null;
    }

    return current;
  }

  //Checks if the list contains the given value
  contains(value: any) {
    if (!this.listHead) {
      return false;
    }

    let current = this.listHead;

    while (current) {
      if (current.value === value) {
        return true;
      }

      current = current.link;
    }

    return false;
  }

  //Find the first node with the given value
  find(value: any) {
    if (!this.listHead) {
      return null;
    }

    let current = this.listHead;

    while (current) {
      if (current.value === value) {
        return current;
      }

      current = current.link;
    }

    return null;
  }

  //Convert the list to a string
  toString() {
    if (!this.listHead) {
      return '';
    }

    let current = this.listHead;
    let str = '';

    while (current) {
      str += current.value + ' -> ';
      current = current.link;
    }

    return str;
  }

  //Insert a node with the given value at the given index
  insert (value: any, index: any) {
    if (!this.listHead) {
      return null;
    }

    if (index === 0) {
      this.prepend(value);
      return;
    }

    const newNode = new Node(value);
    const previous = this.at(index - 1);

    if (!previous) {
      return null;
    }

    newNode.link = previous.link;
    previous.link = newNode;
  }

  //Remove the node at the given index
  removeAt(index: any) {
    if (!this.listHead) {
      return null;
    }

    if (index === 0) {
      const node = this.listHead;
      this.listHead = this.listHead.link;
      return node;
    }

    const previous = this.at(index - 1);

    if (!previous || !previous.link) {
      return null;
    }

    const node = previous.link;
    previous.link = node.link;

    return node;
  }

}
