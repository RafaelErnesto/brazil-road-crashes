module.exports = {
  preset: '@shelf/jest-mongodb',
  collectCoverageFrom: ['<rootDir>/src/**/*.ts'],
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  roots: ['src'],
  transform: { '.+\\.ts$': 'ts-jest' },
  watchPathIgnorePatterns: ['globalConfig'],
};
