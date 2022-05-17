module.exports = {
  extends: ['plugin:@typescript-eslint/strict'],
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ['./tsconfig.json']
  }
};
