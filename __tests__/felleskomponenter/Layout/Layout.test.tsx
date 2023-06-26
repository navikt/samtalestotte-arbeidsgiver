import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { Layout } from '../../../src/felleskomponenter/Layout/Layout';
import { render } from '@testing-library/react';
import { axe } from 'jest-axe';

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

test('uu-feil fra axe', async () => {
    const logEvent = () =>
        new Promise((resolve) => {
            expect(true).toBe(true);
            resolve(undefined);
        });
    const { container: myContainer } = render(
        <Layout title={'Title for test'} isFrontPage={true} logEvent={logEvent}>
            <p>Children</p>
            <p>Children</p>
        </Layout>
    );
    const results = await axe(myContainer);
    expect(results).toHaveNoViolations();
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

    const printButton = document.getElementById('skriv-ut-knapp');

    act(() => {
        printButton?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    });
});
