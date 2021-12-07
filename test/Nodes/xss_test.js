import { assertEquals } from 'https://deno.land/std@0.115.1/testing/asserts.ts';
import { describe, it } from 'https://deno.land/x/test_suite@0.9.1/mod.ts';

import { Renderer } from '../../mod.ts';

describe('XSS Test', () => {
    it('Text should not get rendered as html', () => {
        const json = {
            'type': 'doc',
            'content': [{ 'type': 'text', 'text': '<script>alert(1)<\/script>' }],
        };

        const expected = `&lt;script&gt;alert(1)&lt;/script&gt;`;
        assertEquals(expected, new Renderer().render(json));
    });
});
