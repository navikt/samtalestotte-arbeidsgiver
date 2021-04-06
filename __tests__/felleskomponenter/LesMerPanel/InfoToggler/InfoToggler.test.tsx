import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import InfoToggler from '../../../../src/felleskomponenter/LesMerPanel/InfoToggler/InfoToggler';

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

test('Calls onToggle on click', () => {
    if (container === null) {
        fail();
    }

    const toggleFn = jest.fn();

    act(() => {
        ReactDOM.render(
            <InfoToggler onToggle={toggleFn}>
                <p>Children</p>
            </InfoToggler>,
            container
        );
    });

    const infoTogglerButton = document.getElementsByClassName('infoToggler').item(0);

    act(() => {
        infoTogglerButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(toggleFn).toBeCalledTimes(1);
});

test('Snapshot test closed', () => {
    if (container === null) {
        fail();
    }

    act(() => {
        ReactDOM.render(
            <InfoToggler åpen={false} onToggle={() => {}}>
                <p>Children</p>
            </InfoToggler>,
            container
        );
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
        `"<button class=\\"infoToggler\\" type=\\"button\\" aria-expanded=\\"false\\"><span class=\\"infoToggler__label\\"><p>Children</p></span><span class=\\"nav-frontend-chevron chevronboks chevron--ned\\"></span></button>"`
    );
});

test('Snapshot test open', () => {
    if (container === null) {
        fail();
    }

    act(() => {
        ReactDOM.render(
            <InfoToggler åpen={true} onToggle={() => {}}>
                <p>Children</p>
            </InfoToggler>,
            container
        );
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(
        `"<button class=\\"infoToggler\\" type=\\"button\\" aria-expanded=\\"true\\"><span class=\\"infoToggler__label\\"><p>Children</p></span><span class=\\"nav-frontend-chevron chevronboks chevron--opp\\"></span></button>"`
    );
});
