import Mark from './Mark.js';

export default class Code extends Mark {
    matching() {
        return this.mark.type === 'code';
    }

    tag() {
        return 'code';
    }
}
