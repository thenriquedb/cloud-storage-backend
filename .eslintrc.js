module.exports = {
  env: {
    commonjs: true,
    es6: true,
    node: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    "comma-dangle": "off",
    "object-curly-newline": ["error", { multiline: true, minProperties: 5 }],
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }]
  }
};
