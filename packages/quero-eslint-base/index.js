module.exports = {
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'arrow-parens': ['error', 'as-needed', { 'requireForBlockBody': true }],
    'brace-style': ['error'],
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': ['error'],
    'curly': ['error', 'multi-line'],
    'eol-last': ['error', 'always'],
    'eqeqeq': ['error', 'always'],
    'indent': ['error', 2, { 'SwitchCase': 1 }],
    'key-spacing': [
      'error',
      {
        'afterColon': true,
        'beforeColon': false,
        'mode': 'strict',
      },
    ],
    'keyword-spacing': [
      'error',
      {
        'after': true,
        'before': true,
      },
    ],
    'no-duplicate-imports': ['error'],
    'no-extra-semi': ['error'],
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
        'maxEOF': 1,
      },
    ],
    'no-multi-spaces': ['error'],
    'no-return-await': ['error'],
    'no-trailing-spaces': ['error'],
    'no-undef': ['error'],
    'object-curly-newline': ['error', {
      'consistent': true,
    }],
    'object-curly-spacing': ['error', 'always'],
    'padding-line-between-statements': ['error',
      { 'blankLine': 'always', 'prev': '*', 'next': ['block-like', 'multiline-expression'] },
      { 'blankLine': 'always', 'prev': ['block-like', 'multiline-expression'], 'next': '*' },
    ],
    'prefer-const': ['error'],
    'quotes': ['error', 'single'],
    'semi': ['error'],
    'space-before-blocks': ['error'],
    'space-in-parens': ['error'],
    'space-infix-ops': ['error'],
    'no-unused-vars': [
      'error',
      {
        'vars': 'all',
        'args': 'all',
        'argsIgnorePattern': '^_',
        'ignoreRestSiblings': true,
      },
    ],
  },
};
