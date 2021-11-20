import Node from "./Node.js";

export default class Heading extends Node {
  matching() {
    return this.node.type === "heading";
  }

  tag() {
    return `h${this.node.attrs.level}`;
  }
}
