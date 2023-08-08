import React from 'react';
import { EkspanderbartInfopanel } from '../../src/felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { kanSendeIaTjenesteMetrikker } from '../../src/utils/ia-tjeneste-metrikker';

jest.mock('../../src/utils/ia-tjeneste-metrikker', () => ({
    ...jest.requireActual('../../src/utils/ia-tjeneste-metrikker'),
    kanSendeIaTjenesteMetrikker: jest.fn(() => true),
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
    const { container } = render(
        <EkspanderbartInfopanel
            unikId={'RenderTest'}
            tittel={'Test title'}
            panelLestSituasjon={undefined}
        >
            Test Child
        </EkspanderbartInfopanel>
    );

    const head = container?.getElementsByClassName('navds-expansioncard__header-button').item(0);

    expect(kanSendeIaTjenesteMetrikker).toHaveBeenCalledTimes(0);
    act(() => {
        if (head !== null) {
            head?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }
    });
    act(() => {
        jest.runAllTimers();
    });
    expect(kanSendeIaTjenesteMetrikker).toHaveBeenCalledTimes(1);
});
