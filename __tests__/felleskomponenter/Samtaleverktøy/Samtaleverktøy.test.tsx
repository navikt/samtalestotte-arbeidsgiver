import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import logEvent from '../../../src/amplitude/amplitude';
import { Samtaleverktøy } from '../../../src/felleskomponenter/Samtaleverktøy/Samtaleverktøy';

jest.mock('../../../src/amplitude/amplitude', () => jest.fn());

let container: HTMLDivElement | null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.useFakeTimers();
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
});

afterEach(() => {
    if (container !== null) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
        jest.useRealTimers();
    }
    jest.spyOn(global.Math, 'random').mockRestore();
});

test('Should trigger callback when clicked', () => {
    if (container === null) {
        fail();
    }

    const mockDispatch = jest.fn();

    act(() => {
        ReactDOM.render(
            <Samtaleverktøy dispatch={mockDispatch} samtaleverktøyState={{}} />,
            container
        );
    });

    let heads = container.getElementsByClassName('ekspanderbartPanel__hode');

    act(() => {
        Array.from(heads).forEach((element) => {
            element.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        });
    });

    expect(logEvent).not.toBeCalled();
    expect(mockDispatch).not.toBeCalled();

    act(() => {
        jest.advanceTimersByTime(500);
    });

    expect(logEvent).nthCalledWith(1, 'knapp', {
        funksjon: 'panel-lest',
        label: 'arbeidssituasjonSamtale',
        panelLestSituasjon: 'lest',
    });
    expect(logEvent).nthCalledWith(2, 'knapp', {
        funksjon: 'åpen',
        label: 'Når kan en samtale om arbeidssituasjonen være aktuelt?',
    });
    expect(logEvent).nthCalledWith(3, 'knapp', {
        funksjon: 'panel-lest',
        label: 'detteKanDuSpørreMedarbeiderenOm',
        panelLestSituasjon: 'lest',
    });
    expect(logEvent).nthCalledWith(4, 'knapp', {
        funksjon: 'åpen',
        label: 'Dette kan du spørre medarbeideren om',
    });
    expect(logEvent).nthCalledWith(5, 'knapp', {
        funksjon: 'panel-lest',
        label: 'suksesskriterier',
        panelLestSituasjon: 'lest',
    });
    expect(logEvent).nthCalledWith(6, 'knapp', {
        funksjon: 'åpen',
        label: 'Suksesskriterier',
    });

    expect(mockDispatch).nthCalledWith(1, { payload: 'lest', type: 'arbeidssituasjonSamtale' });
    expect(mockDispatch).nthCalledWith(2, { payload: 'lest', type: 'spørMedarbeiderOm' });
    expect(mockDispatch).nthCalledWith(3, { payload: 'lest', type: 'suksesskriterier' });

    expect(logEvent).toBeCalledTimes(6);
    expect(mockDispatch).toBeCalledTimes(3);
});

test('Snapshot test', () => {
    if (container === null) {
        fail();
    }

    act(() => {
        ReactDOM.render(
            <Samtaleverktøy dispatch={jest.fn()} samtaleverktøyState={{}} />,
            container
        );
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
        "<h2 class=\\"typo-systemtittel samtaleverktøy__tittel\\">Samtaleverktøy</h2>
        <div class=\\"ekspanderbart-infopanel__root\\">
          <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__arbeidssituasjonSamtale-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
              <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-uten-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-tittel\\">Når kan en samtale om arbeidssituasjonen være aktuelt?</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
            </button>
            <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__arbeidssituasjonSamtale-base\\"></div>
          </div>
          <div class=\\"ekspanderbart-infopanel__print-innhold\\">
            <div>
              <div class=\\"ekspanderbart-infopanel__innhold\\">
                <p class=\\"typo-normal\\">En samtale om arbeidssituasjonen gjennomføres hvis
                <ul class=\\"samtaleverktøy__ul_tett\\">
                  <li>du eller din medarbeider opplever utfordringer med arbeidet og det skyldes sykdom eller andre forhold</li>
                  <li>medarbeideren står i fare for å bli sykmeldt</li>
                  <li>medarbeideren er sykmeldt</li>
                  <li>medarbeideren har vært sykmeldt</li>
                </ul>
                </p>
                <p class=\\"typo-normal ekspanderbart-infopanel__innhold-ny-avsnitt\\">Det finnes ingen oppskrift på en god samtale som gjelder alle situasjoner. Men det finnes noen grep som ofte bidrar til gode samtaler.</p>
              </div>
            </div>
          </div>
        </div>
        <div class=\\"ekspanderbart-infopanel__root\\">
          <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__detteKanDuSpørreMedarbeiderenOm-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
              <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-uten-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-tittel\\">Dette kan du spørre medarbeideren om</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
            </button>
            <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__detteKanDuSpørreMedarbeiderenOm-base\\"></div>
          </div>
          <div class=\\"ekspanderbart-infopanel__print-innhold\\">
            <div>
              <div class=\\"ekspanderbart-infopanel__innhold\\">
                <p class=\\"typo-normal\\">Du kan stille spørsmål til medarbeideren som handler om forhold på arbeidsplassen.</p>
                <p class=\\"typo-normal\\">
                <ul>
                  <li>Mulighetene til å utføre egne eller alternative arbeidsoppgaver.</li>
                  <li>Behov for tilrettelegging.</li>
                  <li>Om medarbeideren kjenner til rutiner og tilretteleggingsmuligheter i deres virksomhet.</li>
                  <li>Hvor lenge medarbeideren tror fraværet vil vare.</li>
                  <li>Om det er forhold på arbeidsplassen som påvirker sykefraværet eller helsesituasjonen.</li>
                  <li>Om medarbeideren ønsker kontakt med NAV, bedriftshelsetjenesten eller andre samarbeidspartnere for å få hjelp med tilrettelegging og oppfølging.</li>
                </ul>
                </p>
                <p class=\\"typo-undertekst-bold ekspanderbart-infopanel__innhold-ny-avsnitt\\">Husk at sykefravær ikke er en privatsak, det påvirker arbeidsplassen.<br> Diagnose, behandling og forhold hjemme er privat.</p>
              </div>
            </div>
          </div>
        </div>
        <div class=\\"ekspanderbart-infopanel__root\\">
          <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__suksesskriterier-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
              <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon-wrapper\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-ikon\\"><svg width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\"><path d=\\"M16.6666 35H23.3333V39.04C23.3333 39.5702 22.9035 40 22.3733 40H17.6266C17.0964 40 16.6666 39.5702 16.6666 39.04V35Z\\" fill=\\"#B7B1A9\\"></path><path fill-rule=\\"evenodd\\" d=\\"M20 8.33337C12.6482 8.33337 6.66663 14.2348 6.66663 21.4881C6.66663 27.2155 10.4225 32.2508 15.8974 33.9912V35.6548C15.8974 36.2134 16.3569 36.6667 16.923 36.6667H23.0769C23.643 36.6667 24.1025 36.2134 24.1025 35.6548V33.9912C29.5774 32.2487 33.3333 27.2155 33.3333 21.4881C33.3333 14.2348 27.3518 8.33337 20 8.33337\\" fill=\\"#FFA733\\"></path><path fill-rule=\\"evenodd\\" d=\\"M21.6666 38.3334H18.3333C17.4133 38.3334 16.6666 38.7067 16.6666 39.1667C16.6666 39.6267 17.4133 40 18.3333 40H21.6666C22.5866 40 23.3333 39.6267 23.3333 39.1667C23.3333 38.7067 22.5866 38.3334 21.6666 38.3334\\" fill=\\"#59514B\\"></path><path fill-rule=\\"evenodd\\" d=\\"M23.75 35H16.25C15.56 35 15 35.3733 15 35.8333C15 36.2933 15.56 36.6667 16.25 36.6667H23.75C24.44 36.6667 25 36.2933 25 35.8333C25 35.3733 24.44 35 23.75 35\\" fill=\\"#59514B\\"></path><path fill-rule=\\"evenodd\\" d=\\"M20.0001 6.66667C20.4801 6.66667 20.8696 6.16889 20.8696 5.55556V1.11111C20.8696 0.497778 20.4801 0 20.0001 0C19.5201 0 19.1305 0.497778 19.1305 1.11111V5.55556C19.1305 6.16889 19.5201 6.66667 20.0001 6.66667\\" fill=\\"#FFA733\\"></path><path fill-rule=\\"evenodd\\" d=\\"M39.1304 19.0972H35.6522C35.1722 19.0972 34.7826 19.4705 34.7826 19.9305C34.7826 20.3905 35.1722 20.7638 35.6522 20.7638H39.1304C39.6104 20.7638 40 20.3905 40 19.9305C40 19.4705 39.6104 19.0972 39.1304 19.0972\\" fill=\\"#FFA733\\"></path><path fill-rule=\\"evenodd\\" d=\\"M4.34783 19.0972H0.869565C0.389565 19.0972 0 19.4705 0 19.9305C0 20.3905 0.389565 20.7638 0.869565 20.7638H4.34783C4.82783 20.7638 5.21739 20.3905 5.21739 19.9305C5.21739 19.4705 4.82783 19.0972 4.34783 19.0972\\" fill=\\"#FFA733\\"></path><path fill-rule=\\"evenodd\\" d=\\"M9.00864 9.76612C9.17245 9.92311 9.38639 10 9.60033 10C9.81261 10 10.0265 9.92311 10.1904 9.76612C10.5163 9.45374 10.5163 8.94594 10.1904 8.63356L6.64356 5.23428C6.31763 4.92191 5.78779 4.92191 5.46185 5.23428C5.13592 5.54666 5.13592 6.05447 5.46185 6.36684L9.00864 9.76612Z\\" fill=\\"#FFA733\\"></path><path fill-rule=\\"evenodd\\" d=\\"M30.4011 10C30.6149 10 30.8288 9.92153 30.9926 9.76619L34.5382 6.3664C34.864 6.05413 34.864 5.54808 34.5382 5.23421C34.2107 4.92193 33.6827 4.92193 33.3569 5.23421L29.8096 8.6324C29.4837 8.94627 29.4837 9.45232 29.8096 9.76619C29.9733 9.92153 30.1872 10 30.4011 10\\" fill=\\"#FFA733\\"></path></svg></div>Suksesskriterier</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
            </button>
            <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__suksesskriterier-base\\"></div>
          </div>
          <div class=\\"ekspanderbart-infopanel__print-innhold\\">
            <div>
              <p class=\\"typo-normal ekspanderbart-infopanel__innhold\\">
              <ul>
                <li>Lytt til hva medarbeideren har å si.</li>
                <li>Snakk om arbeidsevne, ikke diagnose.</li>
                <li>Bygg på medarbeiderens motivasjon.</li>
                <li>La medarbeideren komme med de gode løsningene.</li>
                <li>Ikke hopp rett til konklusjoner og løsninger.</li>
                <li>Gjennomfør samtaler regelmessig.</li>
              </ul>
              </p>
            </div>
          </div>
        </div>
        <div class=\\"samtaleverktøy__page-break\\"></div>"
    `);
});
