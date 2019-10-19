import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import { terser } from 'rollup-plugin-terser';
import vue from 'rollup-plugin-vue';

const entrypoint = 'main';
const library = 'reporter';
const outputDir = 'dist';

export default {
  input: `src/${entrypoint}.js`,
  output: [
    { name: 'Reporter', file: `${outputDir}/${library}.js`, format: 'iife' },
    { name: 'Reporter', file: `${outputDir}/${library}.min.js`, format: 'iife' },
  ],
  plugins: [
    resolve(),
    commonjs(),
    vue(),
    babel({
      configFile: false,
      exclude: 'node_modules/**',
      presets: [
        ['@babel/preset-env', { modules: false }],
      ],
    }),
    terser({
      include: [/^.+\.min\.js$/, '*esm*'], 
    }),
  ],
};
