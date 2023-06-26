import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { EkspanderbartInfopanel } from '../../../src/felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

test('uu-feil fra axe', async () => {
    const { container: myContainer } = render(
        <EkspanderbartInfopanel
            unikId={'RenderTest'}
            tittel={'Test title'}
            panelLestSituasjon={undefined}
        >
            Test Child
        </EkspanderbartInfopanel>
    );
    const results = await axe(myContainer);
    expect(results).toHaveNoViolations();
});

test('Should expand and display innhold when clicked', () => {
    let container: HTMLDivElement | null;
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.useFakeTimers();
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);

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

    if (container !== null) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
    jest.useRealTimers();
    jest.spyOn(global.Math, 'random').mockRestore();
});
