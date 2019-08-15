const path = require('path');
module.exports = {
    "parser": "@typescript-eslint/parser",
    "plugins": [
        "@typescript-eslint"
    ],
    "parserOptions": {
        
        "project": path.resolve(__dirname, './tsconfig.json'),
        "tsconfigRootDir": __dirname,
        "ecmaVersion": 2018, // Allows for the parsing of modern ECMAScript features
        "sourceType": "module" // Allows for the use of imports
    },
    "extends": [ 
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "plugin:prettier/recommended"
    ]
}