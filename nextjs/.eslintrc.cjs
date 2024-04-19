const perfectionist = {
  "perfectionist/sort-imports": [
    "error",
    {
      groups: [["react", "external"], 'sibling', 'internal', 'assets', 'style'],
      "newlines-between": "always",
      "custom-groups": {
        value: {
          react: ["react", "react-*"],
          assets: ["@/assets/**"],
          styles: ['.scss']
        },
      },
      'internal-pattern': ['@/',]
    },
  ],

  "perfectionist/sort-jsx-props": [
    "error",
    {
      groups: ["key", "className", "multiline", "unknown", "shorthand", "callback", "test"],
      "custom-groups": { callback: "on*", key: "key", className: "className", test: 'data-testid' },
    },
  ],
};

const prettier = {
  "prettier/prettier": [
    "error",
    {
      printWidth: 100,
      trailingComma: "es5",
      semi: true,
      jsxSingleQuote: true,
      singleQuote: true,
      useTabs: false,
      endOfLine: "auto",
      "max-len": ["error", { code: 100 }],
    },
  ],
};

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "next/core-web-vitals",
    "prettier",
  ],
  plugins: ["prettier", "unused-imports", "perfectionist"],
  rules: {
    ...prettier,

    ...perfectionist,

    "no-duplicate-imports": "error",
    "no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",

    "unused-imports/no-unused-vars": [
      "error",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],

    "no-restricted-imports": [
      "error",
      {
        patterns: [{group: ["../"], message: "Parent imports are not allowed",},],
        paths: [{name: "react", importNames: ["React", "FC"], message: "No need to import React in 18 version.",},],
      },
    ],
  },
};
