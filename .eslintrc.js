module.exports = {
  extends: ["airbnb-base", "prettier"],
  plugins: ["prettier"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 6,
    ecmaFeatures: {
      impliedStrict: true,
      classes: true,
      jsx: true
    }
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
    jasmine: true
  },
  rules: {
    "import/extensions": 0,
    "import/no-unresolved": 0,
    "import/no-named-as-default": 0,
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    camelcase: 0,
    semi: "off",
    "no-prototype-builtins": 0,
    "arrow-body-style": [2, "as-needed"],
    "no-nested-ternary": 0,
    "no-param-reassign": [
      2,
      {
        props: false
      }
    ],
    "no-unused-vars": [
      1,
      {
        args: "none",
        ignoreRestSiblings: true,
        varsIgnorePattern: "^_",
        argsIgnorePattern: "res|next|^err"
      }
    ],
    "no-console": "off",
    import: 0,
    "func-names": 0,
    "space-before-function-paren": 0,
    "comma-dangle": [2, "always-multiline"],
    "max-len": 0,
    "no-underscore-dangle": 0,
    "no-template-curly-in-string": 0,
    "consistent-return": 0,
    radix: 0,
    "no-shadow": [
      2,
      {
        hoist: "all",
        allow: ["resolve", "reject", "done", "next", "err", "error"]
      }
    ],
    "no-return-assign": 0,
    quotes: [
      2,
      "single",
      {
        avoidEscape: true,
        allowTemplateLiterals: true
      }
    ],
    "prettier/prettier": [
      "error",
      {
        semi: true,
        trailingComma: "es5",
        singleQuote: true,
        printWidth: 120
      }
    ]
  }
};
