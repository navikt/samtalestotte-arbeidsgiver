import React from 'react';
import ReactDOM, { unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import pretty from 'pretty';
import Home from '../../src/pages/index';
import { PageProps } from '../../src/pageProps';
import { DecoratorParts } from '../../src/utils/dekorator';

let container: HTMLDivElement | null;

beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
    jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
    jest.useFakeTimers();
});

afterEach(() => {
    if (container !== null) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
    jest.spyOn(global.Math, 'random').mockRestore();
    jest.useRealTimers();
});

test('Snapshot test', async () => {
    if (container === null) {
        fail();
    }
    act(() => {
        ReactDOM.render(<Home page={pageProps} />, container);
    });

    expect(pretty(container.innerHTML)).toMatchInlineSnapshot(`
        "<div>
          <main>
            <div class=\\"layout\\">
              <div></div>
              <div id=\\"app\\" class=\\"app\\">
                <div class=\\"page-banner\\">
                  <div class=\\"page-banner__innhold\\">
                    <div class=\\"page-banner__tekst-og-kontekst\\">
                      <h1 class=\\"typo-sidetittel page-banner__tekst\\"></h1>
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
                    <h2 class=\\"typo-systemtittel samtaleverktøy__tittel\\">Samtaleverktøy</h2>
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
                    <div class=\\"samtaleverktøy__page-break\\"></div>
                    <h2 class=\\"typo-systemtittel oppfølgingssamtaleGjennomføring__tittel\\">Slik gjennomfører du en nyttig samtale om arbeidssituasjonen</h2>
                    <p class=\\"typo-ingress oppfølgingssamtaleGjennomføring__ingress\\">Samtalen kan deles inn i faser. Vi har gjort det enkelt for deg å forstå innholdet og bruke det aktivt i din hverdag.</p>
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
                    <div class=\\"oppfølgingssamtaleGjennomføring__page-break\\"></div>
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
                    <div class=\\"oppfølgingssamtaleGjennomføring__page-break\\"></div>
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
                    <div class=\\"oppfølgingssamtaleGjennomføring__page-break\\"></div>
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
                    <div class=\\"oppfølgingssamtaleGjennomføring__page-break\\"></div>
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
                    <div class=\\"situasjonqa situasjonqa__innhold-no-print\\">
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
                      <hr aria-label=\\"\\" class=\\"skillelinje\\">
                      <h2 class=\\"typo-undertittel situasjonqa__undertittel\\">Var rutinene kjent for både deg og medarbeideren i forkant av samtalen?</h2>
                      <hr aria-label=\\"\\" class=\\"skillelinje\\">
                      <h2 class=\\"typo-undertittel situasjonqa__undertittel\\">Kjente du og medarbeideren til tilretteleggingsmuligheter på egen arbeidsplass?</h2>
                      <hr aria-label=\\"\\" class=\\"skillelinje\\">
                    </div>
                  </div>
                </div>
              </div>
              <div></div>
              <div id=\\"scripts\\">
                <div id=\\"decorator-env\\" data-src=\\"\\"></div>
              </div>
            </div>
          </main>
          <footer></footer>
        </div>"
    `);
});

const decoratorParts: DecoratorParts = {
    decoratorEnv: {
        dataSrc: '',
        scriptUrl: '',
    },
    decoratorFooter: '',
    decoratorHeader: '',
    linkTags: [],
    scriptTags: [],
};

const pageProps: PageProps = {
    appTitle: '',
    decorator: decoratorParts,
    metaDescription: '',
    slug: '',
    title: '',
};
