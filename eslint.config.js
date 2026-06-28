import eslintTsConfig from 'super-configs/eslint/ts';

export default [
  ...eslintTsConfig,
  {
    ignores: ['dist/**', 'node_modules/**', 'docs/**'],
  },
];
