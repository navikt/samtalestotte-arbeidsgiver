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
                callBack={() => {}}
            >
                Test Child
            </EkspanderbartInfopanel>,
            container
        );
    });

    let head = container?.getElementsByClassName('navds-accordion__header').item(0);
    let body = container?.getElementsByClassName('navds-accordion__content').item(0);

    expect(body).toBeNull();

    act(() => {
        if (head !== null) {
            head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        } else {
            fail();
        }
    });

    body = container?.getElementsByClassName('navds-accordion__content').item(0);

    expect(body?.textContent).toBe('Test ChildLukk dette panelet');

    act(() => {
        if (head !== null) {
            head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        } else {
            fail();
        }
    });

    body = container?.getElementsByClassName('navds-accordion__content').item(0);

    expect(body).toBeNull();
});

test('should use callback after 500ms delay on  click', async () => {
    const callback = jest.fn();

    act(() => {
        ReactDOM.render(
            <EkspanderbartInfopanel
                unikId={'RenderTest'}
                tittel={'Test title'}
                panelLestSituasjon={'ulest'}
                callBack={callback}
            >
                Test Child
            </EkspanderbartInfopanel>,
            container
        );
    });
    expect(callback).not.toHaveBeenCalled();

    let head = container?.getElementsByClassName('navds-accordion__header').item(0);

    act(() => {
        if (head !== null) {
            head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        } else {
            fail();
        }
    });

    expect(callback).not.toHaveBeenCalled();

    act(() => {
        jest.advanceTimersByTime(500);
    });

    expect(callback).toHaveBeenCalled();
});