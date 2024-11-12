/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  preset: "ts-jest",
  rootDir: "./",
  displayName: "postgrest",
  setupFilesAfterEnv: ["<rootDir>/test/jest.setup.ts"],
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^(..?/.+).js?$": "$1",
  },
};
