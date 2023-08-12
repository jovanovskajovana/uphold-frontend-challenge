module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  rules: {
    'no-console': 0,
    quotes: [2, 'single', { avoidEscape: true, allowTemplateLiterals: true }],
    'react/react-in-jsx-scope': 'off',
    'spaced-comment': 'error',
    'no-duplicate-imports': 'error',
    'prettier/prettier': [
      'error',
      {
        trailingComma: 'all',
        singleQuote: true,
        printWidth: 80,
        endOfLine: 'lf',
        semi: false,
        tabWidth: 2,
      },
    ],
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', 'prettier'],
  settings: {
    'import/resolver': {
      typescript: {},
    },
    react: {
      version: 'detect',
    },
  },
}
