import Node from "./Node.js";

export default class ItemList extends Node {
  matching() {
    return this.node.type === "list_item";
  }

  tag() {
    return "li";
  }
}
