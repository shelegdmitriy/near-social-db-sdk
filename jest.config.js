module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: ['ts', 'tsx', 'js'],
  transform: {
    '<transform_regex>': ['ts-jest', { tsconfig: 'tsconfig.json' }],
    '^.+\\.tsx?$': 'ts-jest',
  },
  testMatch: ['**/tests/*.test.ts'],
};
