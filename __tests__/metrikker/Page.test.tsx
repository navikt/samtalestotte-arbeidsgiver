import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import {
    sendUinnloggetIATjenesteMetrikk,
    sendInnloggetIATjenesteMetrikk,
} from '../../src/utils/ia-tjeneste-metrikker';
import { hentOrgnrFraLocalStorage } from '../../src/utils/localStorage';
import Home from '../../src/pages';

jest.mock('../../src/utils/ia-tjeneste-metrikker', () => ({
    ...jest.requireActual('../../src/utils/ia-tjeneste-metrikker'),
    sendUinnloggetIATjenesteMetrikk: jest.fn(() => Promise.resolve(true)),
    sendInnloggetIATjenesteMetrikk: jest.fn(() => Promise.resolve(true)),
}));

jest.mock('../../src/utils/localStorage', () => ({
    ...jest.requireActual('../../src/utils/localStorage'),
    hentOrgnrFraLocalStorage: jest.fn(),
}));

describe('Tester kall til metrikkutsendelser fra full page render', () => {
    afterEach(() => {
        jest.clearAllMocks();
        (hentOrgnrFraLocalStorage as jest.Mock).mockImplementation(jest.fn());
    });
    function renderPage() {
        render(
            <Home
                urls={{
                    AUTH_URL: 'AUTH_URL',
                    MINSIDE_URL: 'MINSIDE_URL',
                    FOREBYGGE_URL: 'FOREBYGGE_URL',
                    SAMTALESTOTTE_URL: 'SAMTALESTOTTE_URL',
                    GRAFANA_AGENT_COLLECTOR_URL: 'GRAFANA_AGENT_COLLECTOR_URL',
                }}
            />
        );
    }

    test('Render av hele siden fungerer', () => {
        renderPage();
        expect(screen.getByText('Samtalestøtte for arbeidsgiver')).toBeDefined();
        expect(screen.getByText('Last ned i Word')).toBeDefined();
        expect(screen.getByText('Tips om tilrettelegging')).toBeDefined();
        expect(screen.getByText('Skriv ut nettside')).toBeDefined();
    });

    describe('EkspanderbartInfopanel', () => {
        test('Bør prøve å sende uinnloggede metrikker etter expand.', async () => {
            renderPage();
            const head = screen.getAllByRole('button')[0];

            expect(sendUinnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(0);
            expect(sendInnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(0);

            head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            jest.runAllTimers();

            await waitFor(() => {
                expect(sendUinnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(1);
            });
        });
        test('Bør prøve å sende innloggede metrikker etter expand.', async () => {
            (hentOrgnrFraLocalStorage as jest.Mock).mockImplementation(() => '123456789');
            renderPage();
            const head = screen.getAllByRole('button')[0];

            expect(sendUinnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(0);
            expect(sendInnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(0);

            head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            jest.runAllTimers();

            await waitFor(() => {
                expect(sendInnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(1);
            });
        });
    });
    describe('Layout', () => {
        test('Bør prøve å sende uinnloggede metrikker etter print-klikk', async () => {
            renderPage();

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

            renderPage();

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
    describe('LastNedKnapp', () => {
        test('Bør prøve å sende metrikker etter klikk', async () => {
            renderPage();

            const head = screen.getByText('Skriv ut nettside');

            expect(sendUinnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(0);

            if (head !== null) {
                head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
            }
            jest.runAllTimers();

            await waitFor(() => {
                expect(sendUinnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(1);
            });
        });
    });
});
