import Mark from './Mark.js';

export default class Link extends Mark {
    matching() {
        return this.mark.type === 'link';
    }

    tag() {
        return [
            {
                tag: 'a',
                attrs: {
                    href: this.mark.attrs.href,
                },
            },
        ];
    }
}
