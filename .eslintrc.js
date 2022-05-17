module.exports = {
  extends: ['plugin:@typescript-eslint/strict'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  }
};
