import React from 'react';
import { EkspanderbartInfopanel } from '../../src/felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import { render, screen, waitFor } from '@testing-library/react';
import { sendUinnloggetIATjenesteMetrikk } from '../../src/utils/ia-tjeneste-metrikker';

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

test('Bør prøve å sende metrikker etter expand.', async () => {
    render(
        <EkspanderbartInfopanel
            unikId={'RenderTest'}
            tittel={'Test title'}
            panelLestSituasjon={undefined}
        >
            Test Child
        </EkspanderbartInfopanel>
    );

    const head = screen.getAllByRole('button')[0];

    expect(sendUinnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(0);
    head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    jest.runAllTimers();

    await waitFor(() => {
        expect(sendUinnloggetIATjenesteMetrikk).toHaveBeenCalledTimes(1);
    });
});
