import { Node } from '../../../mod.ts';

export default class User extends Node {
    matching() {
        return this.node.type === 'user';
    }

    text() {
        return 'Foobar';
    }
}
