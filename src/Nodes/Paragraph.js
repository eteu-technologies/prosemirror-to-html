import Node from './Node.js';

export default class Paragraph extends Node {
    matching() {
        return this.node.type === 'paragraph';
    }

    tag() {
        return 'p';
    }
}
