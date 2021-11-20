import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { describe, it } from "https://deno.land/x/test_suite@0.9.1/mod.ts";

import { Renderer } from "../../mod.ts";

describe("ExampleJson Test", () => {
  it("Nested Long JSON", () => {
    const json = {
      "type": "doc",
      "content": [{
        "type": "heading",
        "attrs": { "level": 2 },
        "content": [{ "type": "text", "text": "Export HTML or JSON" }],
      }, {
        "type": "paragraph",
        "content": [
          { "type": "text", "text": "You are able to export your data as " },
          { "type": "text", "marks": [{ "type": "code" }], "text": "HTML" },
          { "type": "text", "text": " or " },
          { "type": "text", "marks": [{ "type": "code" }], "text": "JSON" },
          { "type": "text", "text": ". To pass " },
          { "type": "text", "marks": [{ "type": "code" }], "text": "HTML" },
          { "type": "text", "text": " to the editor use the " },
          { "type": "text", "marks": [{ "type": "code" }], "text": "content" },
          { "type": "text", "text": " slot. To pass " },
          { "type": "text", "marks": [{ "type": "code" }], "text": "JSON" },
          { "type": "text", "text": " to the editor use the " },
          { "type": "text", "marks": [{ "type": "code" }], "text": "doc" },
          { "type": "text", "text": " prop." },
        ],
      }],
    };

    const expected =
      `<h2>Export HTML or JSON</h2><p>You are able to export your data as <code>HTML</code> or <code>JSON</code>. To pass <code>HTML</code> to the editor use the <code>content</code> slot. To pass <code>JSON</code> to the editor use the <code>doc</code> prop.</p>`;
    assertEquals(expected, new Renderer().render(json));
  });
});
