module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    // setupFiles: ['./jest.setup.cjs'],
    moduleNameMapper: { 
        "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js", "\\.(css|less|scss|sass)$": "identity-obj-proxy",
        "^animate.css$": "<rootDir>/mocks/animate.css.js",
        // '^query-string$': '<rootDir>/node_modules/query-string/index.js',
    },
    transformIgnorePatterns: ["/node_modules/(?!query-string)/"],
}

