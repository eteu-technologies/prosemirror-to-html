import { Mark } from "../../../mod.ts";

export default class Superscript extends Mark {
  matching() {
    return this.mark.type === "superscript";
  }

  tag() {
    return "sup";
  }
}
