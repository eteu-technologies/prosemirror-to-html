import Mark from "./Mark.js";

export default class Italic extends Mark {
  matching() {
    return this.mark.type === "italic";
  }

  tag() {
    return "em";
  }
}
