module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    "plugins": [
        "jest",
        "prettier",
        "@typescript-eslint/eslint-plugin"
    ],

    extends: [
        "plugin:jest/all",
        'airbnb',
        'airbnb/hooks',
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'plugin:@typescript-eslint/eslint-recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        "plugin:import/typescript",
        "prettier",
        'prettier/@typescript-eslint',
        "prettier/react",
    ],
    overrides: [
        {
            files: ["*.js", "*.jsx"],
            rules: {
                "@typescript-eslint/explicit-function-return-type": 'off',
                "@typescript-eslint/no-var-requires": 'off'
            }
        }
    ],
    parserOptions: {
        warnOnUnsupportedTypeScriptVersion: false,
        project: './tsconfig.json',
        ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    env: {
        browser: true,
        jasmine: true,
        jest: true,
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
    },
    rules: {
        "jest/prefer-expect-assertions": "off",
        "jest/require-top-level-describe": "off",
        "no-console": "warn",
        '@typescript-eslint/prefer-readonly': 'error',
        "import/no-unresolved": ['error', { commonjs: true }],
        "import/no-default-export": 'error',
        "import/prefer-default-export": 'off',
        "no-unused-expressions": ["error", { "allowTaggedTemplates": true }],
        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["error", {
            "ignoreRestSiblings": true
        }],
        "react/jsx-filename-extension": ['error', { "extensions": [".ts", ".tsx"] }],
        "react/jsx-props-no-spreading": "off",
        "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],
        "global-require": "off",
        "prettier/prettier": "error"
    },
};
