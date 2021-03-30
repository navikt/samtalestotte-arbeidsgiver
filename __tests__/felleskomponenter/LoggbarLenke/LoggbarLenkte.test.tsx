import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import LoggbarLenke from '../../../src/felleskomponenter/LoggbarLenke/LoggbarLenke';
import logEvent from '../../../src/amplitude/amplitude';

jest.mock("../../../src/amplitude/amplitude", () => jest.fn());

let container: HTMLDivElement | null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    if (container !== null) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
});

test('Should call logEvent when clicked', () => {
    if (container === null) {
        fail();
    }

    act(() => {
        ReactDOM.render(
            <LoggbarLenke href={"mockHrefTil"} className={'loggbarlenkeTest'}>
                TestText
            </LoggbarLenke>,
            container
        );
    });

    const lenkeTag = container.getElementsByTagName('a')[0];

    act(() => {
        lenkeTag?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(logEvent).toBeCalledTimes(1)
    expect(logEvent).toBeCalledWith('lenke', {
        'URL-fra': 'http://localhost/',
        'URL-til': 'mockHrefTil',
        lenketekst: 'TestText',
    })
})

