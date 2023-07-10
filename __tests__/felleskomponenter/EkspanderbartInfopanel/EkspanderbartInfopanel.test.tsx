import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { EkspanderbartInfopanel } from '../../../src/felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';

let container: HTMLDivElement | null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.useFakeTimers();
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
});

afterEach(() => {
    if (container !== null) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
    jest.useRealTimers();
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Should expand and display innhold when clicked', () => {
    act(() => {
        ReactDOM.render(
            <EkspanderbartInfopanel
                unikId={'RenderTest'}
                tittel={'Test title'}
                panelLestSituasjon={undefined}
            >
                Test Child
            </EkspanderbartInfopanel>,
            container
        );
    });

    let head = container?.getElementsByClassName('navds-accordion__header').item(0);
    let body = container?.getElementsByClassName('navds-accordion__content').item(0);

    expect(body?.className).toContain('navds-accordion__content--closed');

    act(() => {
        if (head !== null) {
            head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        } else {
            fail();
        }
    });

    body = container?.getElementsByClassName('navds-accordion__content').item(0);

    expect(body?.textContent).toBe('Test ChildLukk dette panelet');
    expect(body?.className).not.toContain('navds-accordion__content--closed');

    act(() => {
        if (head !== null) {
            head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        } else {
            fail();
        }
    });

    body = container?.getElementsByClassName('navds-accordion__content').item(0);

    expect(body?.className).toContain('navds-accordion__content--closed');
});
