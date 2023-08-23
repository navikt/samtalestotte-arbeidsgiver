import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Layout } from '../../src/felleskomponenter/Layout/Layout';
import {
    sendUinnloggetIATjenesteMetrikk,
    sendInnloggetIATjenesteMetrikk,
} from '../../src/utils/ia-tjeneste-metrikker';
import { hentOrgnrFraLocalStorage } from '../../src/utils/localStorage';

jest.mock('../../src/utils/ia-tjeneste-metrikker', () => ({
    ...jest.requireActual('../../src/utils/ia-tjeneste-metrikker'),
    sendUinnloggetIATjenesteMetrikk: jest.fn(() => Promise.resolve(true)),
    sendInnloggetIATjenesteMetrikk: jest.fn(() => Promise.resolve(true)),
}));

jest.mock('../../src/utils/localStorage', () => ({
    ...jest.requireActual('../../src/utils/localStorage'),
    hentOrgnrFraLocalStorage: jest.fn(),
}));

describe('Tester metrikkutsendelser fra Layout', () => {
    afterEach(() => {
        jest.clearAllMocks();
        (hentOrgnrFraLocalStorage as jest.Mock).mockImplementation(jest.fn());
    });

    test('Bør prøve å sende uinnloggede metrikker etter print-klikk', async () => {
        render(
            <Layout
                title="knappetekst"
                isFrontPage={true}
                logEvent={() => new Promise((resolve) => resolve(undefined))}
            >
                <p>Children</p>
                <p>Children</p>
            </Layout>
        );

        const knapp = screen.getByText('Skriv ut nettside');

        expect(sendUinnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(0);
        expect(sendInnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(0);
        expect(knapp).toBeDefined();

        if (knapp !== null) {
            knapp?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }

        await waitFor(() => {
            expect(sendUinnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(1);
        });
        expect(sendInnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(0);
    });

    test('Bør prøve å sende innloggede metrikker etter print-klikk', async () => {
        (hentOrgnrFraLocalStorage as jest.Mock).mockImplementation(() => '123456789');
        render(
            <Layout
                title="knappetekst"
                isFrontPage={true}
                logEvent={() => new Promise((resolve) => resolve(undefined))}
            >
                <p>Children</p>
                <p>Children</p>
            </Layout>
        );

        const knapp = screen.getByText('Skriv ut nettside');

        expect(sendInnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(0);
        expect(sendUinnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(0);
        expect(knapp).toBeDefined();

        if (knapp !== null) {
            knapp?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }
        jest.runAllTimers();

        await waitFor(() => {
            expect(sendInnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(1);
        });
        expect(sendUinnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(0);
    });
});
