import { assertEquals } from "https://deno.land/std@0.115.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/x/test_suite@0.9.1/mod.ts";

import { Renderer } from "../../mod.ts";

import HardBreakNode from "./Custom/HardBreak.js";

describe("HardBreakNode Test", () => {
  it("Self Closing Tag", () => {
    const json = {
      "type": "doc",
      "content": [{
        "type": "paragraph",
        "content": [{ "type": "text", "text": "some text" }, {
          "type": "hard_break",
        }, { "type": "text", "text": "some more text" }],
      }],
    };

    const renderer = new Renderer();
    renderer.addNode(HardBreakNode);

    const expected = `<p>some text<br>some more text</p>`;
    assertEquals(expected, renderer.render(json));
  });
});
