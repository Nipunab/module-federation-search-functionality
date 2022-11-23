const { resolve } = require('path');

// add base names of packages to array that you wish tslint to transpile
const esModules = [
  'natural-compare',
  'lit-element',
  'lit-html',
  '@nucleus',
].join('|');

module.exports = {
  preset: 'ts-jest',
  coverageDirectory: './coverage/',
  coverageReporters: ['lcov', 'cobertura', 'json-summary', 'text-summary'],
  coveragePathIgnorePatterns: ['node_modules', 'apps'],
  globals: {
    'ts-jest': {
      tsconfig: resolve('./tsconfig.spec.json'),
    },
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFiles: [
    '<rootDir>/jest.setup.js',
    '<rootDir>/node_modules/regenerator-runtime/runtime',
  ],
  snapshotSerializers: ['jest-serializer-vue'],
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/dist/', '/node_modules/', 'apps/'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '^.+\\.jsx?$': 'babel-jest',
  },
  transformIgnorePatterns: [`\/?node_modules/(?!(${esModules})\/)`],
  verbose: true,
};
