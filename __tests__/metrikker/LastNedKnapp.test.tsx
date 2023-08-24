import React from 'react';
import { render, screen } from '@testing-library/react';
import { sendUinnloggetIATjenesteMetrikk } from '../../src/utils/ia-tjeneste-metrikker';
import LastNedKnapp from '../../src/felleskomponenter/Knapper/LastNedKnapp';

jest.mock('../../src/utils/ia-tjeneste-metrikker', () => ({
    ...jest.requireActual('../../src/utils/ia-tjeneste-metrikker'),
    sendUinnloggetIATjenesteMetrikk: jest.fn(() => Promise.resolve(true)),
}));

beforeEach(() => {
    jest.useFakeTimers();
    jest.resetAllMocks();
    jest.fn().mockClear();
});

afterEach(() => {
    jest.useRealTimers();
});

test('Bør prøve å sende metrikker etter klikk', async () => {
    render(<LastNedKnapp knappetekst="Skriv ut nettside" label="label" href="href" />);

    const head = screen.getByText('Skriv ut nettside');

    expect(sendUinnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(0);

    if (head !== null) {
        head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
    jest.runAllTimers();

    expect(sendUinnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(1);
});
