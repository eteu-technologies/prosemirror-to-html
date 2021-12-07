import { assertEquals } from 'https://deno.land/std@0.115.1/testing/asserts.ts';
import { describe, it } from 'https://deno.land/x/test_suite@0.9.1/mod.ts';

import { Renderer } from '../../mod.ts';

describe('MultipleMarks Test', () => {
    it('Nested Marks', () => {
        const json = {
            'type': 'doc',
            'content': [{
                'type': 'paragraph',
                'content': [{
                    'type': 'text',
                    'text': 'Example Text',
                    'marks': [{ 'type': 'bold' }, { 'type': 'italic' }],
                }],
            }],
        };

        const expected = `<p><strong><em>Example Text</em></strong></p>`;
        assertEquals(expected, new Renderer().render(json));
    });
});
