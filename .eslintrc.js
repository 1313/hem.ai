const path = require('path');
module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "jest",
        "prettier",
        "@typescript-eslint",
        "sonarjs"
    ],
    "parserOptions": {
        createDefaultProgram: true,
        project: './tsconfig.json',
        tsconfigRootDir: __dirname
    },
    "extends": [
        "plugin:jest/all",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended",
        "plugin:sonarjs/recommended"
    ],
    "rules": {
        "jest/prefer-expect-assertions": "off",
        "no-console": "error"
    }
}