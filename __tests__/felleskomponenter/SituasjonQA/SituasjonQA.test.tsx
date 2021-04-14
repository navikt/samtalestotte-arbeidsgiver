import React, { Dispatch } from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
// @ts-ignore
import preloadAll from 'jest-next-dynamic';
import logEvent from '../../../src/amplitude/amplitude';
import { SituasjonQA } from '../../../src/felleskomponenter/SituasjonQA/SituasjonQA';
import { SituasjonQAState } from '../../../src/cookie/CookieReducer';

jest.mock('../../../src/amplitude/amplitude', () => jest.fn());

let container: HTMLDivElement | null;

beforeAll(async () => {
    await preloadAll();
});

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
});

afterEach(() => {
    if (container !== null) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
    jest.spyOn(global.Math, 'random').mockRestore();
});

test.skip('Should use callback when clicked', async () => {
    if (container === null) {
        fail();
    }
    const mockDispatch = jest.fn();
    act(() => {
        ReactDOM.render(<SituasjonQA dispatch={mockDispatch} situasjonQAState={{}} />, container);
    });

    type QaSpørsmål = {
        ja: HTMLInputElement;
        nei: HTMLInputElement;
    };

    const [forutsigbar, kjent, tilrettelagt] = Array.from(
        container.getElementsByClassName('skjemagruppe')
    ).map((element) => {
        let radios = Array.from(element.getElementsByTagName('input'));
        return { ja: radios[0], nei: radios[1] } as QaSpørsmål;
    });

    expect(mockDispatch).not.toHaveBeenCalled();
    expect(logEvent).not.toHaveBeenCalled();

    act(() => {
        forutsigbar.ja.click();
    });

    expect(mockDispatch).nthCalledWith(1, { payload: 'ja', type: 'forutsigbar' });
    expect(logEvent).nthCalledWith(1, 'knapp', {
        funksjon: 'svar__radio',
        label: 'forutsigbar-spørsmål',
        svar: 'ja',
    });

    act(() => {
        forutsigbar.nei.click();
    });

    expect(mockDispatch).nthCalledWith(2, { payload: 'nei', type: 'forutsigbar' });
    expect(logEvent).nthCalledWith(2, 'knapp', {
        funksjon: 'svar__radio',
        label: 'forutsigbar-spørsmål',
        svar: 'nei',
    });

    act(() => {
        kjent.ja.click();
    });

    expect(mockDispatch).nthCalledWith(3, { payload: 'ja', type: 'kjent' });
    expect(logEvent).nthCalledWith(3, 'knapp', {
        funksjon: 'svar__radio',
        label: 'kjent-spørsmål',
        svar: 'ja',
    });

    act(() => {
        kjent.nei.click();
    });

    expect(mockDispatch).nthCalledWith(4, { payload: 'nei', type: 'kjent' });
    expect(logEvent).nthCalledWith(4, 'knapp', {
        funksjon: 'svar__radio',
        label: 'kjent-spørsmål',
        svar: 'nei',
    });

    act(() => {
        tilrettelagt.ja.click();
    });

    expect(mockDispatch).nthCalledWith(5, { payload: 'ja', type: 'tilrettelagt' });
    expect(logEvent).nthCalledWith(5, 'knapp', {
        funksjon: 'svar__radio',
        label: 'tilrettelagt-spørsmål',
        svar: 'ja',
    });

    act(() => {
        tilrettelagt.nei.click();
    });

    expect(mockDispatch).nthCalledWith(6, { payload: 'nei', type: 'tilrettelagt' });
    expect(logEvent).nthCalledWith(6, 'knapp', {
        funksjon: 'svar__radio',
        label: 'tilrettelagt-spørsmål',
        svar: 'nei',
    });

    expect(mockDispatch).toBeCalledTimes(6);
    expect(logEvent).toBeCalledTimes(6);
});

test('Test that all state permutations render correctly', () => {
    if (container === null) {
        fail();
    }
    const mockDispatch = jest.fn();

    for (let forutsigbar = 0; forutsigbar < 3; forutsigbar++) {
        for (let kjent = 0; kjent < 3; kjent++) {
            for (let tilrettelagt = 0; tilrettelagt < 3; tilrettelagt++) {
                let state: Partial<SituasjonQAState> = {};
                let expectedJa = 0;
                let expectedNei = 0;
                let expectedEnNei = 0;

                if (forutsigbar === 1) {
                    state.forutsigbar = 'ja';
                    expectedJa++;
                }
                if (forutsigbar === 2) {
                    state.forutsigbar = 'nei';
                    expectedNei++;
                }
                if (kjent === 1) {
                    state.kjent = 'ja';
                    expectedJa++;
                }
                if (kjent === 2) {
                    state.kjent = 'nei';
                    expectedNei++;
                }
                if (tilrettelagt === 1) {
                    state.tilrettelagt = 'ja';
                    expectedJa++;
                }
                if (tilrettelagt === 2) {
                    state.tilrettelagt = 'nei';
                    expectedNei++;
                }

                if (expectedNei > 0) expectedEnNei = 1;

                renderWithProps(mockDispatch, state);

                expect(container.getElementsByClassName('situasjonqa__info-panel-ja').length).toBe(
                    expectedJa
                );
                expect(container.getElementsByClassName('situasjonqa__info-panel-nei').length).toBe(
                    expectedNei
                );
                expect(
                    container.getElementsByClassName('situasjonqa__info-panel-en-nei').length
                ).toBe(expectedEnNei);

                unmountComponent(container);
            }
        }
    }

    expect.assertions(81);
});

test('Snapshot test', () => {
    if (container === null) {
        fail();
    }

    act(() => {
        ReactDOM.render(<SituasjonQA dispatch={jest.fn()} situasjonQAState={{}} />, container);
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
        "<div class=\\"situasjonqa situasjonqa__innhold-no-print\\">
          <h2 class=\\"typo-systemtittel situasjonqa__tittel\\">Hvordan er situasjonen hos dere?</h2>
          <div class=\\"les-mer-panel\\">
            <div class=\\"les-mer-panel__toggler slik-kan-disse-spørsmålene-hjelpe-deg\\"><button class=\\"infoToggler\\" type=\\"button\\" aria-expanded=\\"false\\"><span class=\\"infoToggler__label\\"><span class=\\"typo-normal\\">Slik kan disse spørsmålene hjelpe deg</span></span><span class=\\"nav-frontend-chevron chevronboks chevron--ned\\"></span></button></div>
            <div class=\\"les-mer-panel__innhold\\"></div>
            <div class=\\"les-mer-panel__print-innhold slik-kan-disse-spørsmålene-hjelpe-deg\\">
              <div class=\\"slik-kan-disse-spørsmålene-hjelpe-deg__innhold\\">
                <ul>
                  <li>Lavt sykefravær og god dialog fører til motiverte medarbeidere og god lønnsomhet.</li>
                  <li>Systematisk arbeid med arbeidsmiljøet er en lovpålagt oppgave. Evaluering av samtaler om arbeidssituasjonen gir en verdifull kartlegging. Denne bør du bruke når du jobber med forebyggende arbeidsmiljøarbeid.</li>
                  <li>Vi hjelper deg videre med relevante tips ut fra dine svar.</li>
                </ul>
              </div>
            </div>
          </div>
          <h2 class=\\"typo-undertittel situasjonqa__undertittel\\">Bidro sykefraværsrutinene på arbeidsplassen til forutsigbarhet rundt oppgaver og ansvar?</h2>
          <fieldset class=\\"skjemagruppe inputPanelGruppe svar__radio-panel-gruppe\\" aria-invalid=\\"false\\">
            <div class=\\"inputPanelGruppe__inner\\"><label class=\\"inputPanel radioPanel\\" for=\\"83048304-8304-8304-8304-830483048304\\"><input id=\\"83048304-8304-8304-8304-830483048304\\" class=\\"inputPanel__field\\" type=\\"radio\\" aria-checked=\\"false\\" aria-invalid=\\"false\\" aria-errormessage=\\"83048304-8304-8304-8304-830483048304\\" name=\\"svar-forutsigbar\\" aria-label=\\"Ja svar til spørsmål Bidro sykefraværsrutinene til forutsigbarhet rundt oppgaver og ansvar?\\" value=\\"ja\\"><span class=\\"inputPanel__label\\">Ja</span></label><label class=\\"inputPanel radioPanel\\" for=\\"83048304-8304-8304-8304-830483048304\\"><input id=\\"83048304-8304-8304-8304-830483048304\\" class=\\"inputPanel__field\\" type=\\"radio\\" aria-checked=\\"false\\" aria-invalid=\\"false\\" aria-errormessage=\\"83048304-8304-8304-8304-830483048304\\" name=\\"svar-forutsigbar\\" aria-label=\\"Nei svar til spørsmål Bidro sykefraværsrutinene til forutsigbarhet rundt oppgaver og ansvar?\\" value=\\"nei\\"><span class=\\"inputPanel__label\\">Nei</span></label></div>
            <div id=\\"83048304-8304-8304-8304-830483048304\\" aria-live=\\"polite\\"></div>
          </fieldset>
          <hr aria-label=\\"\\" class=\\"skillelinje\\">
          <h2 class=\\"typo-undertittel situasjonqa__undertittel\\">Var rutinene kjent for både deg og medarbeideren i forkant av samtalen?</h2>
          <fieldset class=\\"skjemagruppe inputPanelGruppe svar__radio-panel-gruppe\\" aria-invalid=\\"false\\">
            <div class=\\"inputPanelGruppe__inner\\"><label class=\\"inputPanel radioPanel\\" for=\\"83048304-8304-8304-8304-830483048304\\"><input id=\\"83048304-8304-8304-8304-830483048304\\" class=\\"inputPanel__field\\" type=\\"radio\\" aria-checked=\\"false\\" aria-invalid=\\"false\\" aria-errormessage=\\"83048304-8304-8304-8304-830483048304\\" name=\\"svar-kjent\\" aria-label=\\"Ja svar til spørsmål Var rutinene kjent i forkant av samtalen?\\" value=\\"ja\\"><span class=\\"inputPanel__label\\">Ja</span></label><label class=\\"inputPanel radioPanel\\" for=\\"83048304-8304-8304-8304-830483048304\\"><input id=\\"83048304-8304-8304-8304-830483048304\\" class=\\"inputPanel__field\\" type=\\"radio\\" aria-checked=\\"false\\" aria-invalid=\\"false\\" aria-errormessage=\\"83048304-8304-8304-8304-830483048304\\" name=\\"svar-kjent\\" aria-label=\\"Nei svar til spørsmål Var rutinene kjent i forkant av samtalen?\\" value=\\"nei\\"><span class=\\"inputPanel__label\\">Nei</span></label></div>
            <div id=\\"83048304-8304-8304-8304-830483048304\\" aria-live=\\"polite\\"></div>
          </fieldset>
          <hr aria-label=\\"\\" class=\\"skillelinje\\">
          <h2 class=\\"typo-undertittel situasjonqa__undertittel\\">Kjente du og medarbeideren til tilretteleggingsmuligheter på egen arbeidsplass?</h2>
          <fieldset class=\\"skjemagruppe inputPanelGruppe svar__radio-panel-gruppe\\" aria-invalid=\\"false\\">
            <div class=\\"inputPanelGruppe__inner\\"><label class=\\"inputPanel radioPanel\\" for=\\"83048304-8304-8304-8304-830483048304\\"><input id=\\"83048304-8304-8304-8304-830483048304\\" class=\\"inputPanel__field\\" type=\\"radio\\" aria-checked=\\"false\\" aria-invalid=\\"false\\" aria-errormessage=\\"83048304-8304-8304-8304-830483048304\\" name=\\"svar-tillrettelagt\\" aria-label=\\"Ja svar til spørsmål Kjente du og medarbeideren til tilretteleggingsmuligheter på egen arbeidsplass?\\" value=\\"ja\\"><span class=\\"inputPanel__label\\">Ja</span></label><label class=\\"inputPanel radioPanel\\" for=\\"83048304-8304-8304-8304-830483048304\\"><input id=\\"83048304-8304-8304-8304-830483048304\\" class=\\"inputPanel__field\\" type=\\"radio\\" aria-checked=\\"false\\" aria-invalid=\\"false\\" aria-errormessage=\\"83048304-8304-8304-8304-830483048304\\" name=\\"svar-tillrettelagt\\" aria-label=\\"Nei svar til spørsmål Kjente du og medarbeideren til tilretteleggingsmuligheter på egen arbeidsplass?\\" value=\\"nei\\"><span class=\\"inputPanel__label\\">Nei</span></label></div>
            <div id=\\"83048304-8304-8304-8304-830483048304\\" aria-live=\\"polite\\"></div>
          </fieldset>
          <hr aria-label=\\"\\" class=\\"skillelinje\\">
        </div>"
    `);
});

const renderWithProps = (
    mockDispatch: Dispatch<any>,
    situasjonQAState: Partial<SituasjonQAState>
) => {
    act(() => {
        ReactDOM.render(
            <SituasjonQA dispatch={mockDispatch} situasjonQAState={situasjonQAState} />,
            container
        );
    });
};

const unmountComponent = (container: HTMLDivElement | null) => {
    act(() => {
        if (container !== null) {
            unmountComponentAtNode(container);
        }
    });
};
