module.exports = {
  plugins: ["eslint-comments", "mocha", "promise", "unicorn"],
  extends: [
    "airbnb-base",
    "plugin:eslint-comments/recommended",
    "plugin:mocha/recommended",
    "plugin:promise/recommended",
    "plugin:unicorn/recommended",
    "prettier",
  ],
  env: {
    node: true,
    browser: true,
    mocha: true,
  },
  rules: {
    // Too restrictive, writing ugly code to defend against a very unlikely scenario: https://eslint.org/docs/rules/no-prototype-builtins
    "no-prototype-builtins": "off",

    // https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html
    "import/prefer-default-export": "off",
    "import/no-default-export": "error",

    // Use function hoisting to improve code readability
    "no-use-before-define": [
      "error",
      { functions: false, classes: true, variables: true },
    ],

    // Common abbreviations are known and readable
    "unicorn/prevent-abbreviations": "off",

    // Airbnb prefers forEach
    "unicorn/no-array-for-each": "off",

    // Allow CJS until ESM support improves
    "unicorn/prefer-module": "off",

    // It's not accurate in the monorepo style
    "import/no-extraneous-dependencies": "off",
  },
};
