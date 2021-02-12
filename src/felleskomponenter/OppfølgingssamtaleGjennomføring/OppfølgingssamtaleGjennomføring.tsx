import { FunctionComponent, useEffect, useState } from 'react';
import classNames from 'classnames';
import { Element, Ingress, Normaltekst, Systemtittel } from 'nav-frontend-typografi';
import {
    EkspanderbartInfopanel,
    PanelLestSituasjon,
} from '../EkspanderbartInfopanel/EkspanderbartInfopanel';
import './OppfølgingssamtaleGjennomføring.less';
import { Steg1SVG } from './Steg1SVG';
import { Steg2SVG } from './Steg2SVG';
import { Steg3SVG } from './Steg3SVG';
import { Steg4SVG } from './Steg4SVG';
import { Steg5SVG } from './Steg5SVG';
import LoggbarLenke from '../LoggbarLenke/LoggbarLenke';
import { useCookies } from 'react-cookie';
import logEvent from '../../amplitude/amplitude';
import { Steg1GronnSVG } from './Steg1GronnSVG';
import { Steg2GronnSVG } from './Steg2GronnSVG';
import { Steg3GronnSVG } from './Steg3GronnSVG';
import { Steg4GronnSVG } from './Steg4GronnSVG';
import { Steg5GronnSVG } from './Steg5GronnSVG';

export const OppfølgingssamtaleGjennomføring: FunctionComponent = () => {
    const [cookies, setCookie] = useCookies(['samtalestotte-arbeidsgiver-oppfolgingspaneler-lest']);

    const [steg1Forberedelse, setSteg1Forberedelse] = useState<PanelLestSituasjon>(
        cookies['samtalestotte-arbeidsgiver-oppfolgingspaneler-lest']?.steg1Forberedelse ===
            undefined
            ? undefined
            : cookies['samtalestotte-arbeidsgiver-oppfolgingspaneler-lest'].steg1Forberedelse
    );

    const [steg2Innledning, setSteg2Innledning] = useState<PanelLestSituasjon>(
        cookies['samtalestotte-arbeidsgiver-oppfolgingspaneler-lest']?.steg2Innledning === undefined
            ? undefined
            : cookies['samtalestotte-arbeidsgiver-oppfolgingspaneler-lest'].steg2Innledning
    );
    const [steg3Snakk, setSteg3Snakk] = useState<PanelLestSituasjon>(
        cookies['samtalestotte-arbeidsgiver-oppfolgingspaneler-lest']?.steg3Snakk === undefined
            ? undefined
            : cookies['samtalestotte-arbeidsgiver-oppfolgingspaneler-lest'].steg3Snakk
    );
    const [steg4FinnLøsning, setSteg4FinnLøsning] = useState<PanelLestSituasjon>(
        cookies['samtalestotte-arbeidsgiver-oppfolgingspaneler-lest']?.steg4FinnLøsning ===
            undefined
            ? undefined
            : cookies['samtalestotte-arbeidsgiver-oppfolgingspaneler-lest'].steg4FinnLøsning
    );
    const [steg5Avslutning, setSteg5Avslutning] = useState<PanelLestSituasjon>(
        cookies['samtalestotte-arbeidsgiver-oppfolgingspaneler-lest']?.steg5Avslutning === undefined
            ? undefined
            : cookies['samtalestotte-arbeidsgiver-oppfolgingspaneler-lest'].steg5Avslutning
    );

    useEffect(() => {
        setCookie(
            'samtalestotte-arbeidsgiver-oppfolgingspaneler-lest',
            JSON.stringify({
                steg1Forberedelse: steg1Forberedelse,
                steg2Innledning: steg2Innledning,
                steg3Snakk: steg3Snakk,
                steg4FinnLøsning: steg4FinnLøsning,
                steg5Avslutning: steg5Avslutning,
            }),
            {
                path: '/',
                expires: undefined,
                sameSite: true,
            }
        );
    }, [steg1Forberedelse, steg2Innledning, steg3Snakk, steg4FinnLøsning, steg5Avslutning]);

    const callbackIntercept = (
        callback: (panelLestSituasjon: PanelLestSituasjon) => any,
        label: string
    ) => (panelLestSituasjon: PanelLestSituasjon) => {
        logEvent('knapp', {
            label: label,
            funksjon: 'panel-lest',
            panelLestSituasjon: panelLestSituasjon,
        });
        callback(panelLestSituasjon);
    };
    return (
        <>
            <Systemtittel className="oppfølgingssamtaleGjennomføring__tittel">
                Slik gjennomfører du en nyttig samtale om arbeidssituasjonen
            </Systemtittel>
            <Ingress className="oppfølgingssamtaleGjennomføring__ingress">
                Samtalen kan deles inn i faser. Vi har gjort det enkelt for deg å forstå innholdet
                og bruke det aktivt i din hverdag.
            </Ingress>
            <EkspanderbartInfopanel
                tittel={'Slik forbereder du samtalen'}
                unikId={'steg1Forberedelse'}
                ikon={<Steg1SVG />}
                lestIkon={<Steg1GronnSVG />}
                callBack={callbackIntercept(setSteg1Forberedelse, 'steg1Forberedelse')}
                panelLestSituasjon={steg1Forberedelse}
            >
                <div className="ekspanderbart-infopanel__innhold">
                    <Element>Lederens rolle i en samtale om arbeidssituasjonen</Element>
                    <ul className="ekspanderbart-infopanel__ul-tett">
                        <li>
                            Du er ansvarlig for å gjennomføre og dokumentere samtaler om
                            arbeidssituasjonen.
                        </li>
                        <li>
                            Ditt ansvar begrenser seg til å snakke om forhold på arbeidsplassen.
                        </li>
                        <li>Din viktigste oppgave er å få medarbeideren til å snakke.</li>
                    </ul>
                    <Element className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        Kjente fallgruver
                    </Element>
                    <ul className="ekspanderbart-infopanel__ul-tett">
                        <li>Du påtar deg for stort ansvar for helsa til medarbeideren.</li>
                        <li>Fokuset handler om behandling eller forhold i privatlivet.</li>
                    </ul>
                    <Element className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        Tema for samtalen
                    </Element>
                    <span>En samtale om arbeidssituasjon handler om</span>
                    <ul className="ekspanderbart-infopanel__ul-tett">
                        <li>gjennomgang av arbeidsoppgaver</li>
                        <li>
                            vurdering av hvilke oppgaver som kan gjennomføres med eller uten
                            tilrettelegging eventuelt alternative arbeidsoppgaver
                        </li>
                        <li>plan for videre oppfølging</li>
                    </ul>
                </div>
                <div className="ekspanderbart-infopanel__innhold-avsnitt-med-bakgrunn">
                    <Element>Noen tips til egen forberedelse før samtalen</Element>
                    <ul className="ekspanderbart-infopanel__ul-tett">
                        <li>Hva er dine mål med samtalen?</li>
                        <li>
                            Hvordan er din relasjon og holdninger til medarbeideren, og hvordan kan
                            dette påvirke dialogen?
                        </li>
                        <li>
                            Hva har du observert? Du kan være tydelig på dine observasjoner og
                            hvordan du tolker disse, men gi medarbeideren anledning til å korrigere
                            hvis du har tatt feil.
                        </li>
                        <li>
                            Hvilke tilretteleggingsmuligheter finnes på egen arbeidsplass og
                            eventuelt ellers i organisasjonen og hvor er grensene for ditt
                            handlingsrom?
                        </li>
                        <li>
                            <LoggbarLenke href="https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/relatert-informasjon/slik-folger-du-opp-sykmeldte/tilrettelegging_kap">
                                Les mer om tilrettelegging.
                            </LoggbarLenke>
                        </li>
                        <li>
                            <LoggbarLenke
                                href={
                                    'https://arbeidsgiver.nav.no/veiviserarbeidsgiver/tilrettelegge/du-onsker-a-tilrettelegge'
                                }
                            >
                                Les mer om NAVs virkemidler.
                            </LoggbarLenke>
                        </li>
                    </ul>
                    <div className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        <Element>Praktiske råd</Element>
                        <ul className="ekspanderbart-infopanel__ul-tett">
                            <li>Avtal tid og sted som passer deg og medarbeideren.</li>
                            <li>
                                Samtalen kan gjennomføres digitalt eller utenfor arbeidsplassen hvis
                                det passer best.
                            </li>
                            <li>
                                Gjør medarbeideren kjent med mål og tema for møtet på forhånd. Når
                                begge er forberedt, blir det enklere å finne løsninger sammen.
                            </li>
                            <li>
                                Du kan sende spørsmål til medarbeideren på forhånd. Velg noen av de
                                viktigste for deg fra eksemplene i fase tre og fire.
                            </li>
                        </ul>
                    </div>
                </div>
            </EkspanderbartInfopanel>

            <div className="oppfølgingssamtaleGjennomføring__page-break" />

            <EkspanderbartInfopanel
                tittel={'Slik innleder du samtalen'}
                unikId={'steg2Innledning'}
                ikon={<Steg2SVG />}
                lestIkon={<Steg2GronnSVG />}
                callBack={callbackIntercept(setSteg2Innledning, 'steg2Innledning')}
                panelLestSituasjon={steg2Innledning}
            >
                <div className="ekspanderbart-infopanel__innhold">
                    <Normaltekst>
                        Å innlede en samtale handler om å skape trygghet, sette rammer og klargjøre
                        mål og hensikt.
                        <br />
                        Rammene hjelper dere med å holde fokus og tid.
                    </Normaltekst>
                    <Element className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        Vanlige tema i innledning:
                    </Element>
                    <ul className="ekspanderbart-infopanel__ul-tett">
                        <li>ønske velkommen</li>
                        <li>informere om tidsrammene for møtet</li>
                        <li>informere om målet med møtet</li>
                        <li>gå igjennom agenda</li>
                        <li>spørre hva medarbeideren tenker om mål og agenda</li>
                    </ul>
                </div>
            </EkspanderbartInfopanel>

            <div className="oppfølgingssamtaleGjennomføring__page-break" />

            <EkspanderbartInfopanel
                tittel={'Slik snakker dere om arbeidssituasjonen'}
                unikId={'steg3Snakk'}
                ikon={<Steg3SVG />}
                lestIkon={<Steg3GronnSVG />}
                callBack={callbackIntercept(setSteg3Snakk, 'steg3Snakk')}
                panelLestSituasjon={steg3Snakk}
            >
                <div className="ekspanderbart-infopanel__innhold">
                    <Normaltekst>
                        En samtale om arbeidssituasjonen handler om medarbeideren. Din oppgave er å
                        legge til rette for at medarbeideren kan beskrive hvordan arbeidsoppgavene
                        og arbeidsdagen oppleves. Unngå å stille for mange spørsmål etter hverandre
                        uten å la medarbeideren få tid til å svare.
                    </Normaltekst>
                    <Element className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        Vanlige tema i samtalen om arbeidssituasjonen:
                    </Element>
                    <ul className="ekspanderbart-infopanel__ul-tett">
                        <li>arbeidsoppgaver</li>
                        <li>arbeidstid</li>
                        <li>samarbeid</li>
                        <li>arbeidsmiljø</li>
                        <li>tidligere tiltak</li>
                    </ul>
                    <Element className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        Eksempler på spørsmål:
                    </Element>
                    <ul className="ekspanderbart-infopanel__ul-tett">
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
            </EkspanderbartInfopanel>

            <div className="oppfølgingssamtaleGjennomføring__page-break" />

            <EkspanderbartInfopanel
                tittel={'Slik finner dere løsninger sammen'}
                unikId={'steg4FinnLøsning'}
                ikon={<Steg4SVG />}
                lestIkon={<Steg4GronnSVG />}
                callBack={callbackIntercept(setSteg4FinnLøsning, 'steg4FinnLøsning')}
                panelLestSituasjon={steg4FinnLøsning}
            >
                <div className="ekspanderbart-infopanel__innhold">
                    <Normaltekst className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        Det er nyttig å sikre en felles forståelse av arbeidssituasjonen før dere
                        går videre til å snakke om løsninger og tiltak. Medarbeidere som uttrykker
                        løsningsforslag selv, vil ofte få økt motivasjon ved gjennomføring.
                    </Normaltekst>
                    <Element
                        className={classNames(
                            'ekspanderbart-infopanel__innhold-avsnitt-med-bakgrunn',
                            'ekspanderbart-infopanel__innhold-display-flex'
                        )}
                    >
                        <Normaltekst>
                            <span className="ekspanderbart-infopanel__innhold-bold">Husk</span> at
                            dersom medarbeideren har negative erfaringer, for eksempel at tiltak
                            ikke har fungert, bør du anerkjenne dette. Fokuset bør ligge framover i
                            tid og på hvilke muligheter som finnes.
                        </Normaltekst>
                    </Element>

                    <div className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        <Element>Vanlige tema når dere finner løsninger sammen:</Element>
                        <ul className="ekspanderbart-infopanel__ul-tett">
                            <li>tilpasse arbeidsoppgaver eller arbeidsinnhold</li>
                            <li>tilpasse arbeidstid, arbeidstempo eller tidskrav</li>
                            <li>tilpasse organisering av arbeidet</li>
                            <li>tilpasse samarbeid og samhandling med andre</li>
                            <li>alternative arbeidsoppgaver</li>
                            <li>behov for informasjon og tilbakemeldinger</li>
                            <li>arbeidsmiljø</li>
                            <li>kompetanse</li>
                            <li>fysisk utforming av arbeidsplassen</li>
                            <li>
                                <LoggbarLenke
                                    href={
                                        'https://www.nav.no/no/bedrift/hjelpemidler/funksjonsassistanse'
                                    }
                                >
                                    hjelpemidler
                                </LoggbarLenke>
                            </li>

                            <li>andre forhold</li>
                        </ul>
                    </div>
                    <Element className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        Eksempler på spørsmål:
                    </Element>
                    <ul className="ekspanderbart-infopanel__ul-tett">
                        <li>Hvilke av arbeidsoppgavene dine kan du utføre med tilrettelegging?</li>
                        <li>Hvilke alternative arbeidsoppgaver kan du utføre?</li>
                        <li>Hvordan bør tiden disponeres?</li>
                        <li>
                            Hvordan kan endringer i tempo, arbeidstid eller arbeidssted øke
                            mulighetene for arbeid?
                        </li>
                        <li>
                            Hvordan bør arbeidsdagen se ut dersom du skal kunne klare den, helt
                            eller delvis?
                        </li>
                        <li>Hvilke løsninger ser du for deg?</li>
                        <li>Hvordan vil den ideelle arbeidssituasjonen være for deg akkurat nå?</li>
                        <li>Hvordan ser du for deg veien videre?</li>
                        <li>Hvordan ser du for deg det videre sykmeldingsforløpet?</li>
                        <li>Hvilke tiltak bør vi prøve først?</li>
                    </ul>
                    <span>
                        Velg noen av eksemplene som er relevante for akkurat denne samtalen.
                    </span>
                </div>
            </EkspanderbartInfopanel>

            <div className="oppfølgingssamtaleGjennomføring__page-break" />

            <EkspanderbartInfopanel
                tittel={'Slik avslutter du samtalen'}
                unikId={'steg5Avslutning'}
                ikon={<Steg5SVG />}
                lestIkon={<Steg5GronnSVG />}
                callBack={callbackIntercept(setSteg5Avslutning, 'steg5Avslutning')}
                panelLestSituasjon={steg5Avslutning}
            >
                <div className="ekspanderbart-infopanel__innhold">
                    <Normaltekst className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        En samtale om arbeidssituasjonen avsluttes med at du og medarbeideren
                        oppsummerer.
                        <br />
                        Dersom medarbeideren er sykmeldt er det pålagt å utarbeide en
                        oppfølgingsplan.
                    </Normaltekst>
                    <Normaltekst>
                        <LoggbarLenke href="https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/relatert-informasjon/slik-folger-du-opp-sykmeldte/oppfolgingsplan_kap">
                            Les mer om oppfølgingsplan
                        </LoggbarLenke>
                    </Normaltekst>
                    <Element className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        Vanlige tema i avslutningen:
                    </Element>
                    <Normaltekst>
                        <ul className="ekspanderbart-infopanel__ul-tett">
                            <li>avtaler, tilrettelegginger og tiltak</li>
                            <li>om tilrettelegging er midlertidig eller permanent</li>
                            <li>hvor lenge de midlertidige tiltakene varer og tidsfrister</li>
                            <li>dato for neste samtale og hvor ofte samtaler skal gjennomføres</li>
                            <li>hvem som er ansvarlig for å følge opp</li>
                            <li>om det er behov for videre avklaring eller hjelp fra andre</li>
                        </ul>
                    </Normaltekst>

                    <div className="ekspanderbart-infopanel__innhold-avsnitt-med-bakgrunn">
                        <Normaltekst>
                            Av og til blir du og medarbeideren ikke enige om løsningene og det er
                            greit.{' '}
                        </Normaltekst>
                        <Normaltekst>
                            Da dokumenterer du begges synspunkter i oppsummeringen eller
                            oppfølgingsplanen.
                        </Normaltekst>
                        <Element>Tips: gjennomfør flere samtaler regelmessig. </Element>
                    </div>
                </div>
            </EkspanderbartInfopanel>
        </>
    );
};
