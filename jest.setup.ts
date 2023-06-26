import { toHaveNoViolations } from "jest-axe";

expect.extend(toHaveNoViolations);

// @ts-ignore
jest.mock("react-collapse", () => {
    return {
        UnmountClosed: (props: { isOpened: any; children: any; }) => {
            return (props.isOpened ? props.children : null)
        },
        Collapse: (props: { isOpened: any; children: any; }) => {
            return (props.isOpened ? props.children : null)
        },
    };
});

jest.mock("next/router", () => {
    return {
        useRouter: () => ({
            locale: "no",
            query: {
                slug: "testside",
            },
        }),
    };
});

jest.mock("uuid", () => {
    return {
        v4: () => 'aaaaaaaaaaaaaa'
    }
})

import { loadEnvConfig } from '@next/env'
const projectDir = process.cwd()
loadEnvConfig(projectDir)

//jest.mock("react-use/lib/useKeyboardJs", () => () => [false]);