module.exports = {
    displayName: 'tests',
    collectCoverage: true,
    roots: ['<rootDir>/src'],
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};
