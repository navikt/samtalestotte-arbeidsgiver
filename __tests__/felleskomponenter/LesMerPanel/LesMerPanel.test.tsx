import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import LesMerPanel from '../../../src/felleskomponenter/LesMerPanel/LesMerPanel';

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

test('Should toggle rendering of children when clicked', () => {
    if (container === null) {
        fail();
    }

    act(() => {
        ReactDOM.render(
            <LesMerPanel åpneLabel={'åpneLabel'}>
                <p id="testChild">Children</p>
            </LesMerPanel>,
            container
        );
    });

    const toggleButton = container.getElementsByClassName('infoToggler')[0];
    let innhold = container.getElementsByClassName('les-mer-panel__innhold')[0];
    expect(innhold.textContent).toBe('');

    act(() => {
        toggleButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    innhold = container.getElementsByClassName('les-mer-panel__innhold')[0];
    expect(innhold.textContent).toBe('Children');

    act(() => {
        toggleButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    innhold = container.getElementsByClassName('les-mer-panel__innhold')[0];
    expect(innhold.textContent).toBe('');
});

test('Snapshot test closed', () => {
    if (container === null) {
        fail();
    }

    act(() => {
        ReactDOM.render(
            <LesMerPanel åpneLabel={'åpneLabel'}>
                <p id="testChild">Children</p>
            </LesMerPanel>,
            container
        );
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
        "<div class=\\"les-mer-panel\\">
          <div class=\\"les-mer-panel__toggler\\"><button class=\\"infoToggler\\" type=\\"button\\" aria-expanded=\\"false\\"><span class=\\"infoToggler__label\\"><span class=\\"typo-normal\\">åpneLabel</span></span><span class=\\"nav-frontend-chevron chevronboks chevron--ned\\"></span></button></div>
          <div class=\\"les-mer-panel__innhold\\"></div>
          <div class=\\"les-mer-panel__print-innhold\\">
            <p id=\\"testChild\\">Children</p>
          </div>
        </div>"
    `);
});

test('Snapshot test open', () => {
    if (container === null) {
        fail();
    }

    act(() => {
        ReactDOM.render(
            <LesMerPanel åpneLabel={'åpneLabel'}>
                <p id="testChild">Children</p>
            </LesMerPanel>,
            container
        );
    });

    const toggleButton = container.getElementsByClassName('infoToggler')[0];

    act(() => {
        toggleButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
        "<div class=\\"les-mer-panel\\">
          <div class=\\"les-mer-panel__toggler les-mer-panel__toggler--åpen\\"><button class=\\"infoToggler\\" type=\\"button\\" aria-expanded=\\"true\\"><span class=\\"infoToggler__label\\"><span class=\\"typo-normal\\">åpneLabel</span></span><span class=\\"nav-frontend-chevron chevronboks chevron--opp\\"></span></button></div>
          <div class=\\"les-mer-panel__innhold\\">
            <p id=\\"testChild\\">Children</p>
          </div>
          <div class=\\"les-mer-panel__print-innhold\\">
            <p id=\\"testChild\\">Children</p>
          </div>
        </div>"
    `);
});
