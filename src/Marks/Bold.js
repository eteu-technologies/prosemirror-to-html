import Mark from "./Mark.js";

export default class Bold extends Mark {
  matching() {
    return this.mark.type === "bold";
  }

  tag() {
    return "strong";
  }
}
