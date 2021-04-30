import { getStickyHeaderOffset, onLukkScroll } from '../../src/utils/scrollUtils';



beforeEach(() => {
    jest.spyOn(window, 'scrollTo').mockImplementation(() => {});
})

afterEach(() => {
    jest.restoreAllMocks()
})

test('Should return rect height when height + top is greater than zero', () => {
    let htmlElement = document.createElement('button');

    htmlElement.getBoundingClientRect = () => generateDOMRect(100, 0);
    expect(getStickyHeaderOffset(htmlElement)).toBe(100)

    htmlElement.getBoundingClientRect = () => generateDOMRect(10, 500);
    expect(getStickyHeaderOffset(htmlElement)).toBe(10)

    htmlElement.getBoundingClientRect = () => generateDOMRect(60, -50);
    expect(getStickyHeaderOffset(htmlElement)).toBe(60)

    htmlElement.getBoundingClientRect = () => generateDOMRect(101, -100);
    expect(getStickyHeaderOffset(htmlElement)).toBe(101)
})

test('Should return zero when height + top is less than or equal to zero', () => {
    let htmlElement = document.createElement('button');

    htmlElement.getBoundingClientRect = () => generateDOMRect(100, -100);
    expect(getStickyHeaderOffset(htmlElement)).toBe(0)

    htmlElement.getBoundingClientRect = () => generateDOMRect(10, -500);
    expect(getStickyHeaderOffset(htmlElement)).toBe(0)

    htmlElement.getBoundingClientRect = () => generateDOMRect(-60, 50);
    expect(getStickyHeaderOffset(htmlElement)).toBe(0)

    htmlElement.getBoundingClientRect = () => generateDOMRect(0, 0);
    expect(getStickyHeaderOffset(htmlElement)).toBe(0)
})

test('Should call scrollTo if element top is above viewscreen', () => {
    let htmlElement = document.createElement('button');
    htmlElement.getBoundingClientRect = () => generateDOMRect(100, -500);

    const originalWindow = { ...window };
    const windowSpy = jest.spyOn(global, "window", "get");
    // @ts-ignore
    windowSpy.mockImplementation((): Window => <Window>({
        ...originalWindow,
        pageYOffset: 1000,
    }));

    onLukkScroll(htmlElement, 110)

    expect(window.scrollTo).toBeCalledWith({
        top: 374,
        behavior: "auto"
    });

    windowSpy.mockRestore();
})

test('Should NOT call scrollTo if element top is NOT above viewscreen', () => {
    let htmlElement = document.createElement('button');
    htmlElement.getBoundingClientRect = () => generateDOMRect(100, 0);

    const originalWindow = { ...window };
    const windowSpy = jest.spyOn(global, "window", "get");
    // @ts-ignore
    windowSpy.mockImplementation((): Window => <Window>({
        ...originalWindow,
        pageYOffset: 1000,
    }));

    onLukkScroll(htmlElement, 110)

    expect(window.scrollTo).not.toBeCalled()
    windowSpy.mockRestore();
})


const generateDOMRect = (height: number, top: number): DOMRect => {
    return {
        x: 0,
        y: 0,
        toJSON(): any {},
        bottom: 0,
        height: height,
        left: 0,
        right: 0,
        top: top,
        width: 0
    };
}