import Node from "./Node.js";

export default class OrderedList extends Node {
  matching() {
    return this.node.type === "ordered_list";
  }

  tag() {
    return "ol";
  }
}
