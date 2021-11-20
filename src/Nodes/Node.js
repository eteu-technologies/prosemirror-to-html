export default class Node {
  constructor(node) {
    this.node = node;
  }

  matching() {
    return false;
  }

  selfClosing() {
    return false;
  }

  tag() {
    return null;
  }

  text() {
    return null;
  }
}
