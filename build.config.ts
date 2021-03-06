import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  stub: false,
  entries: [
    {
      input: './src/index.ts',
      builder: 'rollup',
      name: 'index'
    },
    {
      input: './src/formats.ts',
      builder: 'rollup',
      name: 'formats'
    },
    {
      input: './src/generate.ts',
      builder: 'rollup',
      name: 'generate'
    }
  ],
  externals: [
    // ??
    'formats.mjs',
    'generate.mjs',
    // ??
    '#design-tokens',
    'browser-style-dictionary',
    'ufo',
    'jiti',
    'pathe',
    'defu',
    'chalk',
    'ansi-styles',
    'supports-color',
    'has-flag',
    'color-convert',
    'color-name'
  ]
})
