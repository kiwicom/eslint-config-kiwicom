// @flow

import rule from '../no-newline-string';

const RuleTester = require('eslint').RuleTester;

const ruleTester = new RuleTester({
  parserOptions: {
    ecmaVersion: 7,
  },
});

const errors = [
  { message: 'Unexpected newline character (use os.EOL instead).' },
];

ruleTester.run('no-newline-string', rule, {
  // please note: characters are double-escaped here

  valid: [
    { code: 'var x = true' },
    { code: 'var x = "just a normal string"' },
    { code: 'var x = "\\\\n"' },
  ],

  invalid: [
    {
      code: 'var x = "\\n"',
      errors,
    },
    {
      code: 'var x = "just a normal\\nstring"',
      errors,
    },
  ],
});
