module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: ["airbnb-base"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  rules: {
    "class-methods-use-this": "off",
    "no-param-reassign": "off",
    camelcase: "off",
    quotes: [2, "single", { avoidEscape: true }],
    "comma-dangle": "off",
    "object-curly-newline": ["error", { multiline: true, minProperties: 5 }],
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }]
  }
};
