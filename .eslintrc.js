module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: ['airbnb', 'prettier'],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 120,
        bracketSpacing: true,
        semi: true,
      },
    ],
    'func-names': ['error', 'as-needed'],
    'space-before-function-paren': [
      'error',
      {
        anonymous: 'never',
        named: 'never',
        asyncArrow: 'ignore',
      },
    ],
    'jsx-a11y/label-has-associated-control': 0,
    'no-console': 0,
    'react/jsx-filename-extension': 0,
    'react/forbid-prop-types': 0,
    curly: ['error', 'multi-line'],
    'prefer-const': [
      'error',
      {
        destructuring: 'any',
        ignoreReadBeforeAssign: false,
      },
    ],
    'no-underscore-dangle': 0,
  },
};
