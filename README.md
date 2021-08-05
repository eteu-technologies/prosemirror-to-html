# ProseMirror to HTML (JS)

(This package is based on [prosemirror-to-html](https://github.com/scrumpy/prosemirror-to-html), which was originally written for PHP.)

Takes ProseMirror JSON and outputs HTML.

## Installation
```bash
yarn add @eteu-technologies/prosemirror-to-html-js
```

## Usage

```js
const { Renderer } = require("@eteu-technologies/prosemirror-to-html-js");

const renderer = new Renderer();

console.log(renderer.render({
  "type": "doc",
  "content": [
    {
      "type": "paragraph",
      "content": [
        {
          "type": "text",
          "text": "Example Paragraph"
        }
      ]
    }
  ]
}));

// Outputs `<p>Example Text</p>`
```

## Supported Nodes

* Blockquote
* BulletList
* CodeBlock
* Heading
* ListItem
* OrderedList
* Paragraph

## Supported Marks

* Bold
* Code
* Italic
* Link

## Custom Nodes

Define your node as a class -

```js
const { Node } = require("@eteu-technologies/prosemirror-to-html-js");

class CustomNode extends Node {
    matching () {
        return this.node.type === "custom_node";
    }

    tag () {
        return "cnode";
    }
}
```

Feed it to `renderer` instance -
```js
renderer.addNode(CustomNode);
```
