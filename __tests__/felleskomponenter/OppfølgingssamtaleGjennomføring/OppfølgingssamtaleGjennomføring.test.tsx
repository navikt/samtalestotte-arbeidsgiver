import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import { OppfølgingssamtaleGjennomføring } from '../../../src/felleskomponenter/OppfølgingssamtaleGjennomføring/OppfølgingssamtaleGjennomføring';
import logEvent from '../../../src/amplitude/amplitude';

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
            <OppfølgingssamtaleGjennomføring dispatch={mockDispatch} oppfølgingSamtaleState={{}} />,
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
        label: 'steg1Forberedelse',
        panelLestSituasjon: 'lest',
    });
    expect(logEvent).nthCalledWith(2, 'knapp', {
        funksjon: 'åpen',
        label: 'Slik forbereder du samtalen',
    });
    expect(logEvent).nthCalledWith(3, 'knapp', {
        funksjon: 'panel-lest',
        label: 'steg2Innledning',
        panelLestSituasjon: 'lest',
    });
    expect(logEvent).nthCalledWith(4, 'knapp', {
        funksjon: 'åpen',
        label: 'Slik innleder du samtalen',
    });
    expect(logEvent).nthCalledWith(5, 'knapp', {
        funksjon: 'panel-lest',
        label: 'steg3Snakk',
        panelLestSituasjon: 'lest',
    });
    expect(logEvent).nthCalledWith(6, 'knapp', {
        funksjon: 'åpen',
        label: 'Slik snakker dere om arbeidssituasjonen',
    });
    expect(logEvent).nthCalledWith(7, 'knapp', {
        funksjon: 'panel-lest',
        label: 'steg4FinnLøsning',
        panelLestSituasjon: 'lest',
    });
    expect(logEvent).nthCalledWith(8, 'knapp', {
        funksjon: 'åpen',
        label: 'Slik finner dere løsninger sammen',
    });
    expect(logEvent).nthCalledWith(9, 'knapp', {
        funksjon: 'panel-lest',
        label: 'steg5Avslutning',
        panelLestSituasjon: 'lest',
    });
    expect(logEvent).nthCalledWith(10, 'knapp', {
        funksjon: 'åpen',
        label: 'Slik avslutter du samtalen',
    });

    expect(mockDispatch).nthCalledWith(1, { payload: 'lest', type: 'steg1Forberedelse' });
    expect(mockDispatch).nthCalledWith(2, { payload: 'lest', type: 'steg2Innledning' });
    expect(mockDispatch).nthCalledWith(3, { payload: 'lest', type: 'steg3Snakk' });
    expect(mockDispatch).nthCalledWith(4, { payload: 'lest', type: 'steg4FinnLøsning' });
    expect(mockDispatch).nthCalledWith(5, { payload: 'lest', type: 'steg5Avslutning' });

    expect(logEvent).toBeCalledTimes(10);
    expect(mockDispatch).toBeCalledTimes(5);
});

test('Snapshot test', () => {
    if (container === null) {
        fail();
    }

    act(() => {
        ReactDOM.render(
            <OppfølgingssamtaleGjennomføring dispatch={jest.fn()} oppfølgingSamtaleState={{}} />,
            container
        );
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
        "<h2 class=\\"typo-systemtittel oppfølgingssamtaleGjennomføring__tittel\\">Slik gjennomfører du en nyttig samtale om arbeidssituasjonen</h2>
        <p class=\\"typo-ingress oppfølgingssamtaleGjennomføring__ingress\\">Samtalen kan deles inn i faser. Vi har gjort det enkelt for deg å forstå innholdet og bruke det aktivt i din hverdag.</p>
        <div class=\\"ekspanderbart-infopanel__root\\">
          <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__steg1Forberedelse-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
              <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon-wrapper\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-ikon\\"><svg width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" aria-label=\\"Fase 1\\"><circle cx=\\"20\\" cy=\\"20\\" r=\\"19.5\\" fill=\\"white\\" stroke=\\"black\\"></circle><path d=\\"M14.22 28V25.18H18.48V12.64H14.97V10.48C15.93 10.3 16.75 10.09 17.43 9.85C18.13 9.59 18.78 9.28 19.38 8.92H21.96V25.18H25.71V28H14.22Z\\" fill=\\"#3E3832\\"></path></svg></div>Slik forbereder du samtalen</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
            </button>
            <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__steg1Forberedelse-base\\"></div>
          </div>
          <div class=\\"ekspanderbart-infopanel__print-innhold\\">
            <div>
              <div class=\\"ekspanderbart-infopanel__innhold\\">
                <p class=\\"typo-element\\">Lederens rolle i en samtale om arbeidssituasjonen</p>
                <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                  <li>Du er ansvarlig for å gjennomføre og dokumentere samtaler om arbeidssituasjonen.</li>
                  <li>Ditt ansvar begrenser seg til å snakke om forhold på arbeidsplassen.</li>
                  <li>Din viktigste oppgave er å få medarbeideren til å snakke.</li>
                </ul>
                <p class=\\"typo-element ekspanderbart-infopanel__innhold-ny-avsnitt\\">Kjente fallgruver</p>
                <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                  <li>Du påtar deg for stort ansvar for helsa til medarbeideren.</li>
                  <li>Fokuset handler om behandling eller forhold i privatlivet.</li>
                </ul>
                <p class=\\"typo-element ekspanderbart-infopanel__innhold-ny-avsnitt\\">Tema for samtalen</p><span>En samtale om arbeidssituasjon handler om</span>
                <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                  <li>gjennomgang av arbeidsoppgaver</li>
                  <li>vurdering av hvilke oppgaver som kan gjennomføres med eller uten tilrettelegging eventuelt alternative arbeidsoppgaver</li>
                  <li>plan for videre oppfølging</li>
                </ul>
              </div>
              <div class=\\"ekspanderbart-infopanel__innhold-avsnitt-med-bakgrunn\\">
                <p class=\\"typo-element\\">Noen tips til egen forberedelse før samtalen</p>
                <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                  <li>Hva er dine mål med samtalen?</li>
                  <li>Hvordan er din relasjon og holdninger til medarbeideren, og hvordan kan dette påvirke dialogen?</li>
                  <li>Hva har du observert? Du kan være tydelig på dine observasjoner og hvordan du tolker disse, men gi medarbeideren anledning til å korrigere hvis du har tatt feil.</li>
                  <li>Hvilke tilretteleggingsmuligheter finnes på egen arbeidsplass og eventuelt ellers i organisasjonen og hvor er grensene for ditt handlingsrom?</li>
                  <li><a href=\\"https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/relatert-informasjon/slik-folger-du-opp-sykmeldte/tilrettelegging_kap\\" class=\\"lenke\\">Les mer om tilrettelegging.</a></li>
                  <li><a href=\\"https://arbeidsgiver.nav.no/veiviserarbeidsgiver/tilrettelegge/du-onsker-a-tilrettelegge\\" class=\\"lenke\\">Les mer om NAVs virkemidler.</a></li>
                </ul>
                <div class=\\"ekspanderbart-infopanel__innhold-ny-avsnitt\\">
                  <p class=\\"typo-element\\">Praktiske råd</p>
                  <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                    <li>Avtal tid og sted som passer deg og medarbeideren.</li>
                    <li>Samtalen kan gjennomføres digitalt eller utenfor arbeidsplassen hvis det passer best.</li>
                    <li>Gjør medarbeideren kjent med mål og tema for møtet på forhånd. Når begge er forberedt, blir det enklere å finne løsninger sammen.</li>
                    <li>Du kan sende spørsmål til medarbeideren på forhånd. Velg noen av de viktigste for deg fra eksemplene i fase tre og fire.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class=\\"oppfølgingssamtaleGjennomføring__page-break\\"></div>
        <div class=\\"ekspanderbart-infopanel__root\\">
          <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__steg2Innledning-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
              <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon-wrapper\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-ikon\\"><svg width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" aria-label=\\"Fase 2\\"><circle cx=\\"20\\" cy=\\"20\\" r=\\"19.5\\" fill=\\"white\\" stroke=\\"black\\"></circle><path d=\\"M13.14 28V25.99C14.46 24.71 15.65 23.53 16.71 22.45C17.79 21.37 18.7 20.37 19.44 19.45C20.2 18.53 20.78 17.67 21.18 16.87C21.58 16.07 21.78 15.31 21.78 14.59C21.78 13.57 21.51 12.77 20.97 12.19C20.43 11.59 19.65 11.29 18.63 11.29C17.89 11.29 17.21 11.5 16.59 11.92C15.99 12.34 15.43 12.84 14.91 13.42L12.99 11.5C13.87 10.56 14.77 9.84 15.69 9.34C16.63 8.82 17.76 8.56 19.08 8.56C20 8.56 20.83 8.7 21.57 8.98C22.31 9.26 22.94 9.66 23.46 10.18C23.98 10.68 24.38 11.29 24.66 12.01C24.96 12.73 25.11 13.53 25.11 14.41C25.11 15.25 24.92 16.11 24.54 16.99C24.18 17.85 23.68 18.73 23.04 19.63C22.42 20.51 21.69 21.42 20.85 22.36C20.01 23.3 19.12 24.27 18.18 25.27C18.68 25.23 19.22 25.19 19.8 25.15C20.38 25.09 20.9 25.06 21.36 25.06H26.04V28H13.14Z\\" fill=\\"#3E3832\\"></path></svg></div>Slik innleder du samtalen</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
            </button>
            <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__steg2Innledning-base\\"></div>
          </div>
          <div class=\\"ekspanderbart-infopanel__print-innhold\\">
            <div>
              <div class=\\"ekspanderbart-infopanel__innhold\\">
                <p class=\\"typo-normal\\">Å innlede en samtale handler om å skape trygghet, sette rammer og klargjøre mål og hensikt.<br>Rammene hjelper dere med å holde fokus og tid.</p>
                <p class=\\"typo-element ekspanderbart-infopanel__innhold-ny-avsnitt\\">Vanlige tema i innledning:</p>
                <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                  <li>ønske velkommen</li>
                  <li>informere om tidsrammene for møtet</li>
                  <li>informere om målet med møtet</li>
                  <li>gå igjennom agenda</li>
                  <li>spørre hva medarbeideren tenker om mål og agenda</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class=\\"oppfølgingssamtaleGjennomføring__page-break\\"></div>
        <div class=\\"ekspanderbart-infopanel__root\\">
          <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__steg3Snakk-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
              <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon-wrapper\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-ikon\\"><svg width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" aria-label=\\"Fase 3\\"><circle cx=\\"20\\" cy=\\"20\\" r=\\"19.5\\" fill=\\"white\\" stroke=\\"black\\"></circle><path d=\\"M19.2 28.36C17.64 28.36 16.34 28.1 15.3 27.58C14.26 27.06 13.4 26.42 12.72 25.66L14.37 23.44C14.95 24.02 15.61 24.52 16.35 24.94C17.09 25.34 17.94 25.54 18.9 25.54C19.94 25.54 20.78 25.29 21.42 24.79C22.08 24.27 22.41 23.56 22.41 22.66C22.41 22.16 22.32 21.71 22.14 21.31C21.96 20.91 21.65 20.57 21.21 20.29C20.79 20.01 20.22 19.8 19.5 19.66C18.78 19.5 17.88 19.42 16.8 19.42V16.9C17.74 16.9 18.52 16.83 19.14 16.69C19.78 16.53 20.29 16.32 20.67 16.06C21.07 15.78 21.35 15.45 21.51 15.07C21.69 14.69 21.78 14.28 21.78 13.84C21.78 13.04 21.53 12.42 21.03 11.98C20.53 11.52 19.84 11.29 18.96 11.29C18.2 11.29 17.51 11.46 16.89 11.8C16.29 12.12 15.7 12.55 15.12 13.09L13.35 10.96C14.17 10.24 15.04 9.66 15.96 9.22C16.9 8.78 17.94 8.56 19.08 8.56C20 8.56 20.84 8.67 21.6 8.89C22.36 9.11 23.01 9.44 23.55 9.88C24.09 10.3 24.51 10.83 24.81 11.47C25.11 12.09 25.26 12.8 25.26 13.6C25.26 14.68 24.96 15.58 24.36 16.3C23.78 17.02 22.97 17.58 21.93 17.98V18.1C23.07 18.4 24.01 18.95 24.75 19.75C25.51 20.55 25.89 21.58 25.89 22.84C25.89 23.72 25.71 24.5 25.35 25.18C25.01 25.86 24.53 26.44 23.91 26.92C23.31 27.38 22.6 27.74 21.78 28C20.98 28.24 20.12 28.36 19.2 28.36Z\\" fill=\\"#3E3832\\"></path></svg></div>Slik snakker dere om arbeidssituasjonen</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
            </button>
            <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__steg3Snakk-base\\"></div>
          </div>
          <div class=\\"ekspanderbart-infopanel__print-innhold\\">
            <div>
              <div class=\\"ekspanderbart-infopanel__innhold\\">
                <p class=\\"typo-normal\\">En samtale om arbeidssituasjonen handler om medarbeideren. Din oppgave er å legge til rette for at medarbeideren kan beskrive hvordan arbeidsoppgavene og arbeidsdagen oppleves. Unngå å stille for mange spørsmål etter hverandre uten å la medarbeideren få tid til å svare.</p>
                <p class=\\"typo-element ekspanderbart-infopanel__innhold-ny-avsnitt\\">Vanlige tema i samtalen om arbeidssituasjonen:</p>
                <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                  <li>arbeidsoppgaver</li>
                  <li>arbeidstid</li>
                  <li>samarbeid</li>
                  <li>arbeidsmiljø</li>
                  <li>tidligere tiltak</li>
                </ul>
                <p class=\\"typo-element ekspanderbart-infopanel__innhold-ny-avsnitt\\">Eksempler på spørsmål:</p>
                <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                  <li>Hvordan vil du beskrive arbeidsdagen din?</li>
                  <li>Hvilke av arbeidsoppgavene dine kan du fortsatt utføre?</li>
                  <li>Hvilke av arbeidsoppgavene dine er vanskelige å utføre?</li>
                  <li>Hvordan vil du beskrive arbeidsmiljøet?</li>
                  <li>Hva synes du er positivt, og hva tenker du kan forbedres?</li>
                  <li>Hvordan vil du beskrive stressnivået?</li>
                  <li>Hvordan påvirker arbeidsmiljøet sykefraværet ditt?</li>
                  <li>Hvordan opplever du samarbeidet med kolleger/ledere?</li>
                  <li>Hva motiverer deg mest akkurat nå?</li>
                  <li>Hva oppfatter du som dine styrker nå?</li>
                </ul>
                <p>Velg noen av eksemplene som er relevante for akkurat denne samtalen.</p>
              </div>
            </div>
          </div>
        </div>
        <div class=\\"oppfølgingssamtaleGjennomføring__page-break\\"></div>
        <div class=\\"ekspanderbart-infopanel__root\\">
          <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__steg4FinnLøsning-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
              <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon-wrapper\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-ikon\\"><svg width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" aria-label=\\"Fase 4\\"><circle cx=\\"20\\" cy=\\"20\\" r=\\"19.5\\" fill=\\"white\\" stroke=\\"black\\"></circle><path d=\\"M20.97 28V23.08H12.54V20.74L20.1 8.92H24.21V20.41H26.61V23.08H24.21V28H20.97ZM15.96 20.41H20.97V16.09C20.97 15.53 20.98 14.87 21 14.11C21.04 13.35 21.08 12.69 21.12 12.13H21C20.76 12.63 20.51 13.12 20.25 13.6C19.99 14.08 19.72 14.58 19.44 15.1L15.96 20.41Z\\" fill=\\"#3E3832\\"></path></svg></div>Slik finner dere løsninger sammen</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
            </button>
            <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__steg4FinnLøsning-base\\"></div>
          </div>
          <div class=\\"ekspanderbart-infopanel__print-innhold\\">
            <div>
              <div class=\\"ekspanderbart-infopanel__innhold\\">
                <p class=\\"typo-normal ekspanderbart-infopanel__innhold-ny-avsnitt\\">Det er nyttig å sikre en felles forståelse av arbeidssituasjonen før dere går videre til å snakke om løsninger og tiltak. Medarbeidere som uttrykker løsningsforslag selv, vil ofte få økt motivasjon ved gjennomføring.</p>
                <p class=\\"typo-element ekspanderbart-infopanel__innhold-avsnitt-med-bakgrunn ekspanderbart-infopanel__innhold-display-flex\\">
                <p class=\\"typo-normal\\"><span class=\\"ekspanderbart-infopanel__innhold-bold\\">Husk</span> at dersom medarbeideren har negative erfaringer, for eksempel at tiltak ikke har fungert, bør du anerkjenne dette. Fokuset bør ligge framover i tid og på hvilke muligheter som finnes.</p>
                </p>
                <div class=\\"ekspanderbart-infopanel__innhold-ny-avsnitt\\">
                  <p class=\\"typo-element\\">Vanlige tema når dere finner løsninger sammen:</p>
                  <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                    <li>tilpasse arbeidsoppgaver eller arbeidsinnhold</li>
                    <li>tilpasse arbeidstid, arbeidstempo eller tidskrav</li>
                    <li>tilpasse organisering av arbeidet</li>
                    <li>tilpasse samarbeid og samhandling med andre</li>
                    <li>alternative arbeidsoppgaver</li>
                    <li>behov for informasjon og tilbakemeldinger</li>
                    <li>arbeidsmiljø</li>
                    <li>kompetanse</li>
                    <li>fysisk utforming av arbeidsplassen</li>
                    <li><a href=\\"https://www.nav.no/no/bedrift/hjelpemidler/funksjonsassistanse\\" class=\\"lenke\\">hjelpemidler</a></li>
                    <li>andre forhold</li>
                  </ul>
                </div>
                <p class=\\"typo-element ekspanderbart-infopanel__innhold-ny-avsnitt\\">Eksempler på spørsmål:</p>
                <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                  <li>Hvilke av arbeidsoppgavene dine kan du utføre med tilrettelegging?</li>
                  <li>Hvilke alternative arbeidsoppgaver kan du utføre?</li>
                  <li>Hvordan bør tiden disponeres?</li>
                  <li>Hvordan kan endringer i tempo, arbeidstid eller arbeidssted øke mulighetene for arbeid?</li>
                  <li>Hvordan bør arbeidsdagen se ut dersom du skal kunne klare den, helt eller delvis?</li>
                  <li>Hvilke løsninger ser du for deg?</li>
                  <li>Hvordan vil den ideelle arbeidssituasjonen være for deg akkurat nå?</li>
                  <li>Hvordan ser du for deg veien videre?</li>
                  <li>Hvordan ser du for deg det videre sykmeldingsforløpet?</li>
                  <li>Hvilke tiltak bør vi prøve først?</li>
                </ul><span>Velg noen av eksemplene som er relevante for akkurat denne samtalen.</span>
              </div>
            </div>
          </div>
        </div>
        <div class=\\"oppfølgingssamtaleGjennomføring__page-break\\"></div>
        <div class=\\"ekspanderbart-infopanel__root\\">
          <div class=\\"ekspanderbartPanel ekspanderbart-infopanel__panel ekspanderbartPanel--lukket ekspanderbartPanel--border\\"><button id=\\"ekspanderbart-infopanel__steg5Avslutning-base\\" class=\\"ekspanderbartPanel__hode\\" aria-expanded=\\"false\\" aria-controls=\\"83048304-8304-8304-8304-830483048304\\" type=\\"button\\">
              <div class=\\"ekspanderbartPanel__flex-wrapper\\"><span class=\\"ekspanderbartPanel__tittel\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon-wrapper\\"><div class=\\"ekspanderbart-infopanel__tittel-med-ikon\\"><div class=\\"ekspanderbart-infopanel__kun-ikon\\"><svg width=\\"40\\" height=\\"40\\" viewBox=\\"0 0 40 40\\" fill=\\"none\\" xmlns=\\"http://www.w3.org/2000/svg\\" aria-label=\\"Fase 5\\"><circle cx=\\"20\\" cy=\\"20\\" r=\\"19.5\\" fill=\\"white\\" stroke=\\"black\\"></circle><path d=\\"M19.23 28.36C17.69 28.36 16.39 28.1 15.33 27.58C14.29 27.04 13.42 26.42 12.72 25.72L14.31 23.5C14.89 24.04 15.54 24.52 16.26 24.94C16.98 25.34 17.82 25.54 18.78 25.54C19.86 25.54 20.74 25.22 21.42 24.58C22.12 23.94 22.47 23.04 22.47 21.88C22.47 20.74 22.15 19.86 21.51 19.24C20.87 18.62 20.02 18.31 18.96 18.31C18.34 18.31 17.82 18.4 17.4 18.58C16.98 18.74 16.48 19.01 15.9 19.39L14.25 18.34L14.82 8.92H25.02V11.83H17.82L17.43 16.45C17.83 16.25 18.22 16.1 18.6 16C19 15.88 19.45 15.82 19.95 15.82C20.77 15.82 21.54 15.94 22.26 16.18C23 16.42 23.64 16.79 24.18 17.29C24.72 17.77 25.15 18.39 25.47 19.15C25.79 19.89 25.95 20.77 25.95 21.79C25.95 22.83 25.76 23.76 25.38 24.58C25.02 25.4 24.53 26.09 23.91 26.65C23.29 27.21 22.57 27.64 21.75 27.94C20.95 28.22 20.11 28.36 19.23 28.36Z\\" fill=\\"#3E3832\\"></path></svg></div>Slik avslutter du samtalen</div></div></span><span class=\\"ekspanderbartPanel__indikator\\"></span></div>
            </button>
            <div role=\\"region\\" id=\\"83048304-8304-8304-8304-830483048304\\" aria-labelledby=\\"ekspanderbart-infopanel__steg5Avslutning-base\\"></div>
          </div>
          <div class=\\"ekspanderbart-infopanel__print-innhold\\">
            <div>
              <div class=\\"ekspanderbart-infopanel__innhold\\">
                <p class=\\"typo-normal ekspanderbart-infopanel__innhold-ny-avsnitt\\">En samtale om arbeidssituasjonen avsluttes med at du og medarbeideren oppsummerer.<br>Dersom medarbeideren er sykmeldt er det pålagt å utarbeide en oppfølgingsplan.</p>
                <p class=\\"typo-normal\\"><a href=\\"https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/relatert-informasjon/slik-folger-du-opp-sykmeldte/oppfolgingsplan_kap\\" class=\\"lenke\\">Les mer om oppfølgingsplan</a></p>
                <p class=\\"typo-element ekspanderbart-infopanel__innhold-ny-avsnitt\\">Vanlige tema i avslutningen:</p>
                <p class=\\"typo-normal\\">
                <ul class=\\"ekspanderbart-infopanel__ul-tett\\">
                  <li>avtaler, tilrettelegginger og tiltak</li>
                  <li>om tilrettelegging er midlertidig eller permanent</li>
                  <li>hvor lenge de midlertidige tiltakene varer og tidsfrister</li>
                  <li>dato for neste samtale og hvor ofte samtaler skal gjennomføres</li>
                  <li>hvem som er ansvarlig for å følge opp</li>
                  <li>om det er behov for videre avklaring eller hjelp fra andre</li>
                </ul>
                </p>
                <div class=\\"ekspanderbart-infopanel__innhold-avsnitt-med-bakgrunn\\">
                  <p class=\\"typo-normal\\">Av og til blir du og medarbeideren ikke enige om løsningene og det er greit. </p>
                  <p class=\\"typo-normal\\">Da dokumenterer du begges synspunkter i oppsummeringen eller oppfølgingsplanen.</p>
                  <p class=\\"typo-element\\">Tips: gjennomfør flere samtaler regelmessig. </p>
                </div>
              </div>
            </div>
          </div>
        </div>"
    `);
});
