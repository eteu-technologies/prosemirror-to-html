import { Node } from "../../../mod.ts";

export default class Div extends Node {
  matching() {
    return this.node.type === "div";
  }

  tag() {
    return "div";
  }
}
