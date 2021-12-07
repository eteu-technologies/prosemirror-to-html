import { assertEquals } from 'https://deno.land/std@0.115.1/testing/asserts.ts';
import { describe, it } from 'https://deno.land/x/test_suite@0.9.1/mod.ts';

import { Renderer } from '../mod.ts';

describe('Input Test', () => {
    it('JSON Input', () => {
        const json = {
            type: 'doc',
            content: [
                {
                    type: 'text',
                    text: 'Example Text',
                },
            ],
        };

        const expected = `Example Text`;
        assertEquals(expected, new Renderer().render(json));
    });

    it('Stringified JSON Input', () => {
        const json = JSON.stringify({
            type: 'doc',
            content: [
                {
                    type: 'text',
                    text: 'Example Text',
                },
            ],
        });

        const expected = 'Example Text';
        assertEquals(expected, new Renderer().render(json));
    });
});
