import Node from './Node.js';

export default class CodeBlock extends Node {
    matching() {
        return this.node.type === 'code_block';
    }

    tag() {
        return [
            {
                tag: 'pre',
            },
            {
                tag: 'code',
            },
        ];
    }
}
