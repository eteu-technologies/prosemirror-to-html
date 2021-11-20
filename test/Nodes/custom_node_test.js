import { assertEquals } from "https://deno.land/std@0.115.0/testing/asserts.ts";
import { describe, it } from "https://deno.land/x/test_suite@0.9.1/mod.ts";

import { Renderer } from "../../mod.ts";

import DivNode from "./Custom/Div.js";
import UserNode from "./Custom/User.js";

describe("CustomNode Test", () => {
  it("Single Node", () => {
    const json = {
      "type": "doc",
      "content": [
        {
          "type": "div",
        },
      ],
    };

    const renderer = new Renderer();
    renderer.addNode(DivNode);

    const expected = `<div></div>`;
    assertEquals(expected, renderer.render(json));
  });

  it("Array Node", () => {
    const json = {
      "type": "doc",
      "content": [
        {
          "type": "div",
        },
      ],
    };

    const renderer = new Renderer();
    renderer.addNodes([
      DivNode,
    ]);

    const expected = `<div></div>`;
    assertEquals(expected, renderer.render(json));
  });

  it("Custom Node with only Text", () => {
    const json = {
      "type": "doc",
      "content": [
        {
          "type": "user",
          "attrs": {
            "id": 123,
          },
        },
      ],
    };

    const renderer = new Renderer();
    renderer.addNodes([
      UserNode,
    ]);

    const expected = `Foobar`;
    assertEquals(expected, renderer.render(json));
  });
});
