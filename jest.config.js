module.exports = {
    setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
    testPathIgnorePatterns: ["/node_modules/", "/.next/"],
    moduleNameMapper: {
        "@navikt/ds-react(.*)": "@navikt/ds-react/cjs$1",
        "@navikt/ds-icons(.*)": "@navikt/ds-icons/cjs$1"
    },
    testEnvironment: "jsdom"
};