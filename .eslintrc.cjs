module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  parserOptions: {
    ecmaFeatures: {
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  plugins: ['react-refresh'],
  settings: {
    react: {
      version: 'detect',
    },
  }
};
