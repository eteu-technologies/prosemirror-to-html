import { build } from 'https://deno.land/x/dnt@0.7.3/mod.ts';

const outDir = './dist';

await Deno.remove(outDir, { recursive: true }).catch((_) => {});

await build({
    outDir,
    entryPoints: ['./mod.ts'],
    package: {
        name: '@eteu-technologies/prosemirror-to-html-js',
        version: Deno.args[0],
        description: 'Takes ProseMirror JSON and outputs HTML',
        keywords: [
            'prosemirror',
            'text-editor',
        ],
        contributors: [
            'Mark Vainomaa',
            'Andrei Vanvu',
            'Ashwani Agarwal',
        ],
        license: 'ISC',
        repository: {
            type: 'git',
            url: 'git+https://github.com/eteu-technologies/prosemirror-to-html.git',
        },
        bugs: {
            url: 'https://github.com/eteu-technologies/prosemirror-to-html/issues',
        },
    },
    test: false, // test_suite is broken under Node.js
});

// post build steps
//Deno.copyFileSync("LICENSE", `${outDir}/LICENSE`);
Deno.copyFileSync('README.md', `${outDir}/README.md`);
