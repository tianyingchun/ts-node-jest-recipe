const { pathsToModuleNameMapper } = require("ts-jest");
const { compilerOptions } = require("./tsconfig.json");

/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: "ts-jest",
  testEnvironment: "node",
  globals: {
    "ts-jest": {
      // ts-jest configuration goes here
      tsconfig: {
        sourceMap: true,
      },
    },
  },
  // this enables us to use tsconfig-paths with jest
  modulePaths: [compilerOptions.baseUrl],
  // some-module and another-module will be transformed.
  // transformIgnorePatterns: ["node_modules/(?!(some-module|another-module))"]
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths),
};
