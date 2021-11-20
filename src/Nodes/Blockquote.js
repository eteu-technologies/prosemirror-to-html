import Node from "./Node.js";

export default class Blockquote extends Node {
  matching() {
    return this.node.type === "blockquote";
  }

  tag() {
    return "blockquote";
  }
}
