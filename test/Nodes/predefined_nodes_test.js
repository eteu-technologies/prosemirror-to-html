import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { describe, it } from "https://deno.land/x/test_suite@0.9.1/mod.ts";

import { Renderer } from "../../mod.ts";

describe("Predefined Nodes Test", () => {
  it("Blockquote", () => {
    const json = {
      type: "doc",
      content: [
        {
          type: "blockquote",
          content: [
            {
              type: "text",
              text: "Example Quote",
            },
          ],
        },
      ],
    };

    const expected = `<blockquote>Example Quote</blockquote>`;
    assertEquals(expected, new Renderer().render(json));
  });

  it("Bullet List", () => {
    const json = {
      "type": "doc",
      "content": [
        {
          "type": "bullet_list",
          "content": [
            {
              "type": "list_item",
              "content": [
                {
                  "type": "text",
                  "text": "first list item",
                },
              ],
            },
          ],
        },
      ],
    };

    const expected = `<ul><li>first list item</li></ul>`;
    assertEquals(expected, new Renderer().render(json));
  });

  it("CodeBlock", () => {
    const json = {
      "type": "doc",
      "content": [{
        "type": "code_block",
        "content": [{ "type": "text", "text": "Example Text" }],
      }],
    };

    const expected = "<pre><code>Example Text</code></pre>";
    assertEquals(expected, new Renderer().render(json));
  });

  it("Heading", () => {
    const json = {
      "type": "doc",
      "content": [{
        "type": "heading",
        "attrs": { "level": 2 },
        "content": [{ "type": "text", "text": "Example Headline" }],
      }],
    };

    const expected = `<h2>Example Headline</h2>`;
    assertEquals(expected, new Renderer().render(json));
  });

  it("Ordered List", () => {
    const json = {
      "type": "doc",
      "content": [{
        "type": "ordered_list",
        "content": [{
          "type": "list_item",
          "content": [{ "type": "text", "text": "first list item" }],
        }],
      }],
    };

    const expected = `<ol><li>first list item</li></ol>`;
    assertEquals(expected, new Renderer().render(json));
  });

  it("Paragraph", () => {
    const json = {
      "type": "doc",
      "content": [{
        "type": "paragraph",
        "content": [{ "type": "text", "text": "Example Paragraph" }],
      }],
    };

    const expected = `<p>Example Paragraph</p>`;
    assertEquals(expected, new Renderer().render(json));
  });
});
