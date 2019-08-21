/* eslint-disable @typescript-eslint/typedef */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
module.exports = function(wallaby) {
    return {
        files: ['src/**/*.ts', '!src/**/__tests__/*.ts', 'src/**/*.json'],

        tests: ['src/**/__tests__/*.ts'],
        env: {
            type: 'node',
        },

        compilers: {
            '**/*.ts?(x)': wallaby.compilers.typeScript({ module: 'commonjs' }),
        },
        testFramework: 'jest',
    };
};
