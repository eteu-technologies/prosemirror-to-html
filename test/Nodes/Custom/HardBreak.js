import { Node } from "../../../mod.ts";

export default class HardBreak extends Node {
  matching() {
    return this.node.type === "hard_break";
  }

  selfClosing() {
    return true;
  }

  tag() {
    return "br";
  }
}
