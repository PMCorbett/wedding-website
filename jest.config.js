module.exports = {
  cacheDirectory: '.jest',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|md)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupTestFrameworkScriptFile: './configure-jest.js',
  testResultsProcessor: './node_modules/jest-junit',
};
