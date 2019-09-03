module.exports = {
    parser: '@typescript-eslint/parser', // Specifies the ESLint parser
    "plugins": [
        "jest",
        "prettier",
        "import",
        "@typescript-eslint"
    ],
    extends: [
        "plugin:jest/all",
        "plugin:import/errors",
        "plugin:import/warnings",
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        "plugin:import/typescript",
        'plugin:@typescript-eslint/eslint-recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended', // Uses the recommended rules from @typescript-eslint/eslint-plugin
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'prettier/@typescript-eslint',
        'prettier',
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
        createDefaultProgram: true,
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
        "no-console": "warn",
        '@typescript-eslint/prefer-readonly': 'error',
        "import/no-unresolved": [2, { commonjs: true }],
        "import/named": "error",
        "import/namespace": "error",
        "import/default": "error",
        "import/export": "error"
    },
};
