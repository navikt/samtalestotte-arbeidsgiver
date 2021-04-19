import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import { Layout } from '../../../src/felleskomponenter/Layout/Layout';

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

test('Should call logEvent before printing', () => {
    expect.assertions(1);

    const logEvent = () =>
        new Promise((resolve) => {
            expect(true).toBe(true);
            resolve(undefined);
        });

    act(() => {
        ReactDOM.render(
            <Layout title={'Title for test'} isFrontPage={true} logEvent={logEvent}>
                <p>Children</p>
                <p>Children</p>
            </Layout>,
            container
        );
    });

    const printButton = document.getElementsByClassName('layout__knapp').item(0);

    act(() => {
        printButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
});

test('snapshot test', () => {
    if (container === null) {
        fail();
    }

    act(() => {
        ReactDOM.render(
            <Layout title={'Title for test'} isFrontPage={true} logEvent={jest.fn()}>
                <p>Children</p>
                <p>Children</p>
            </Layout>,
            container
        );
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
        "<div class=\\"layout\\">
          <div></div>
          <div id=\\"app\\" class=\\"app\\">
            <div class=\\"page-banner\\">
              <div class=\\"page-banner__innhold\\">
                <div class=\\"page-banner__tekst-og-kontekst\\">
                  <h1 class=\\"typo-sidetittel page-banner__tekst\\">Title for test</h1>
                  <p class=\\"typo-normal page-banner__kontekst-tekst\\">Du får hjelp til å gjennomføre samtaler med medarbeiderne og bruke erfaringene til forebyggende arbeid</p>
                </div>
              </div>
            </div>
            <div class=\\"layout__wrapper\\">
              <div class=\\"layout__content\\">
                <div class=\\"layout__print-header\\">
                  <p class=\\"typo-normal\\">https://arbeidsgiver.nav.no/samtalestotte</p>
                </div>
                <div class=\\"layout__react-to-print-wrapper\\"><button class=\\"layout__knapp knapp\\">Skriv ut</button></div>
                <p>Children</p>
                <p>Children</p>
              </div>
            </div>
          </div>
          <div></div>
          <div id=\\"scripts\\">
            <div id=\\"decorator-env\\" data-src=\\"\\"></div>
          </div>
        </div>"
    `);
});
