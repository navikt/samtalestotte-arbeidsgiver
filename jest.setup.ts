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

//jest.mock("react-use/lib/useKeyboardJs", () => () => [false]);