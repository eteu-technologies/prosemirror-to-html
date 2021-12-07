import { assertEquals } from 'https://deno.land/std@0.115.1/testing/asserts.ts';
import { describe, it } from 'https://deno.land/x/test_suite@0.9.1/mod.ts';

import { Renderer } from '../../mod.ts';
import SuperscriptMark from './Custom/SuperScript.js';

describe('Custom Mark Test', () => {
    it('Single Mark', () => {
        const json = {
            type: 'doc',
            content: [
                {
                    type: 'text',
                    text: 'Example Text',
                    marks: [
                        {
                            type: 'superscript',
                        },
                    ],
                },
            ],
        };

        const expected = `<sup>Example Text</sup>`;

        const renderer = new Renderer();
        renderer.addMark(SuperscriptMark);

        assertEquals(expected, renderer.render(json));
    });

    it('Array Mark', () => {
        const json = {
            type: 'doc',
            content: [
                {
                    type: 'text',
                    text: 'Example Text',
                    marks: [
                        {
                            type: 'superscript',
                        },
                    ],
                },
            ],
        };

        const expected = `<sup>Example Text</sup>`;

        const renderer = new Renderer();
        renderer.addMarks([
            SuperscriptMark,
        ]);

        assertEquals(expected, renderer.render(json));
    });
});
