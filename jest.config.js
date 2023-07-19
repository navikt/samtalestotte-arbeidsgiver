module.exports = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    moduleNameMapper: {
        '@navikt/ds-react(.*)': '@navikt/ds-react/cjs$1',
        '\\.(css|less)$': 'identity-obj-proxy',
    },
    testEnvironment: 'jsdom',
};
