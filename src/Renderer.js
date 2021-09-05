const { htmlEntities, arrayify } = require("./utils");

class Renderer {
    constructor () {
        this.document = undefined;
        this.nodes = [
            require("./Nodes/Blockquote"),
            require("./Nodes/BulletList"),
            require("./Nodes/CodeBlock"),
            require("./Nodes/Heading"),
            require("./Nodes/ListItem"),
            require("./Nodes/OrderedList"),
            require("./Nodes/Paragraph"),
            require("./Nodes/Image")
        ];
        this.marks = [
            require("./Marks/Bold"),
            require("./Marks/Code"),
            require("./Marks/Italic"),
            require("./Marks/Link")
        ];
    }

    setDocument (value) {
        if (typeof value === "string") {
            value = JSON.parse(value);
        } else if (typeof value === "array") {
            value = JSON.parse(JSON.stringify(value));
        }

        this.document = value;
    }

    renderNode (node) {
        let html = [];

        if (node.marks) {
            node.marks.forEach(mark => {
                for (let i in this.marks) {
                    const MarkClass = this.marks[i];
                    const renderClass = new MarkClass(mark);
                    if (renderClass.matching()) {
                        html.push(this.renderOpeningTag(renderClass.tag()));
                    }
                }
            })
        }

        let renderClass;

        for (let i in this.nodes) {
            const NodeClass = this.nodes[i];
            renderClass = new NodeClass(node);

            if (renderClass.matching()) {
                html.push(this.renderOpeningTag(renderClass.tag()));
                break;
            }
        }
        // converting custom content into proper html
        if (node.hasOwnProperty('attrs') && Array.isArray(node.attrs.displayFields) && node.attrs.mfVal){
            const values = Array.isArray(node.attrs.mfVal) ? node.attrs.mfVal : [node.attrs.mfVal];
            values.forEach(val => {
                node.attrs.displayFields.forEach(field => {
                    const printableVal = this.getJsonVal(val, field);
                    if (printableVal) {
                        html.push(...[this.renderOpeningTag('p'), printableVal, this.renderClosingTag('p')]);
                    }
                    html.push(this.renderOpeningTag('br'));
                })
            });
        } else if (node.content) {
            for (let i in node.content) {
                const nestedNode = node.content[i];
                html.push(this.renderNode(nestedNode));
            }
        } else if (node.text) {
            html.push(htmlEntities(node.text));
        } else if (renderClass.text()) {
            html.push(renderClass.text());
        }

        // renderClass;
        for (let i in this.nodes) {
            let NodeClass = this.nodes[i];
            renderClass = new NodeClass(node);

            if (renderClass.selfClosing()) {
                continue;
            }

            if (renderClass.matching()) {
                html.push(this.renderClosingTag(renderClass.tag()));
            }
        }

        if (node.marks) {
            node.marks.slice().reverse().forEach((mark) => {
                for (let i in this.marks) {
                    const MarkClass = this.marks[i];
                    const renderClass = new MarkClass(mark);

                    if (renderClass.matching()) {
                        html.push(this.renderClosingTag(renderClass.tag()));
                    }
                }
            })
        }

        return html.join("");
    }

    renderOpeningTag (tags) {
        tags = arrayify(tags);

        if (!tags || !tags.length) {
            return null;
        }

        return tags.map(item => {
            if (typeof item === "string") {
                return `<${item}>`;
            }
            let attrs = "";

            if (item.attrs) {
                for (let attribute in item.attrs) {
                    const value = item.attrs[attribute];
                    if (value) {
                        attrs += ` ${attribute}="${value}"`;
                    }
                }
            }

            return `<${item.tag}${attrs}>`;
        }).join("");
    }

    renderClosingTag (tags) {
        tags = arrayify(tags);
        tags = tags.slice().reverse();

        if (!tags || !tags.length) {
            return null;
        }

        return tags.map(item => {
            if (typeof item === "string") {
                return `</${item}>`;
            }

            return `</${item.tag}>`;
        }).join("")
    }

    render (value) {
        this.setDocument(value);

        let html = [];

        for (const i in this.document.content) {
            let node = this.document.content[i];
            html.push(this.renderNode(node));
        }

        return html.join("");
    }

    addNode (node) {
        this.nodes.push(node);
    }

    addNodes (nodes) {
        for (const i in nodes) {
            this.addNode(nodes[i]);
        }
    }

    addMark (mark) {
        this.marks.push(mark);
    }

    addMarks (marks) {
        for (const i in marks) {
            this.addMark(marks[i]);
        }
    }

    getJsonVal = (json, key) => {
        let result = null;
        if (json && typeof key === 'string') {
            key.split('.').forEach((nested, index) => {
                if (index === 0) {
                    if (json.hasOwnProperty(nested)) {
                        result = json[nested];
                    }
                } else if (result && result.hasOwnProperty(nested)) {
                    result = result[nested];
                } else {
                    result = null;
                }
            });
        }
        return result;
    };
}

module.exports = Renderer;