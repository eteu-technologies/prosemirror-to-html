import Node from "./Node.js";

export default class BulletList extends Node {
  matching() {
    return this.node.type === "bullet_list";
  }

  tag() {
    return "ul";
  }
}
