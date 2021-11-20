import { assertEquals } from "https://deno.land/std@0.115.1/testing/asserts.ts";
import { describe, it } from "https://deno.land/x/test_suite@0.9.1/mod.ts";

import { Renderer } from "../../mod.ts";

describe("Predefined Mark Test", () => {
  it("Code", () => {
    const json = {
      type: "doc",
      content: [
        {
          type: "text",
          text: "Example Text",
          marks: [
            {
              type: "code",
            },
          ],
        },
      ],
    };

    const expected = `<code>Example Text</code>`;
    assertEquals(expected, new Renderer().render(json));
  });

  it("Link", () => {
    let json = JSON.parse(
      `{"type":"doc","content":[{"type":"text","text":"Example Link","marks":[{"type":"link","attrs":{"href":"https://scrumpy.io"}}]}]}`,
    );

    const expected = `<a href="https://scrumpy.io">Example Link</a>`;
    assertEquals(expected, new Renderer().render(json));
  });
});
