const { default: nextJest } = require("next/jest")


const createJestConfig =nextJest({
    dir:"./",
});

/** @type {import('jest').config} */
const config={
    setupFilesAfterEnv:["<rootDir>/jest.setup.js"],
    testEnvironment:"jest-environment-jsdom", 
    verbose: true,
    collectCoverage: false,
    coveragePathIgnorePatterns: [ "<rootDir>/node_modules" ],
    coverageReporters: ["json", "html"],
    preset:"ts-jest"
};

module.exports = createJestConfig(config);