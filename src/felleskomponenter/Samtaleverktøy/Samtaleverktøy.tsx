import {FunctionComponent} from 'react';
import {Normaltekst, Systemtittel, UndertekstBold} from 'nav-frontend-typografi';
import {EkspanderbartInfopanel} from '../EkspanderbartInfopanel/EkspanderbartInfopanel';
import './Samtaleverktøy.less';
import {LyspæreSVG} from './LyspæreSVG';

export const Samtaleverktøy: FunctionComponent = () => {
    return (
        <>
            <Systemtittel className="samtaleverktøy__tittel">Samtaleverktøy</Systemtittel>
            <EkspanderbartInfopanel
                tittel={'Når kan en samtale om arbeidssituasjonen være aktuelt?'}
                unikId={'når-kan-en-samtale-om-arbeidssituasjonen-være-aktuelt?'}
            >
                <Normaltekst className="ekspanderbart-infopanel__innhold">
                    En samtale om arbeidssituasjonen gjennomføres hvis
                    <ul className="samtaleverktøy__ul_tett">
                        <li>
                            Du eller din medarbeider opplever utfordringer med arbeidet og det
                            skyldes sykdom eller andre forhold.
                        </li>
                        <li>Medarbeideren står i fare for å bli sykmeldt.</li>
                        <li>Medarbeideren er sykmeldt.</li>
                        <li>Medarbeideren har vært sykmeldt </li>
                    </ul>
                </Normaltekst>
                <Normaltekst className="ekspanderbart-infopanel__innhold">
                    Det finnes ingen oppskrift på en god samtale som gjelder alle situasjoner. Men
                    det finnes noen grep som ofte bidrar til gode samtaler.
                </Normaltekst>
            </EkspanderbartInfopanel>
            <EkspanderbartInfopanel
                tittel={'Dette kan du spørre medarbeideren om'}
                unikId={'Dette-kan-du-spørre-medarbeideren-om'}
            >
                <Normaltekst className="ekspanderbart-infopanel__innhold">
                    Du kan stille spørsmål til medarbeider som handler om forhold på arbeidsplassen.
                </Normaltekst>
                <Normaltekst className="ekspanderbart-infopanel__innhold">
                    <ul>
                        <li>Mulighetene til å utføre egne eller alternative arbeidsoppgaver</li>
                        <li>Behov for tilrettelegging </li>
                        <li>
                            Om medarbeideren kjenner til rutiner og tilretteleggingsmuligheter i
                            deres virksomhet
                        </li>
                        <li>Hvor lenge medarbeideren tror fraværet vil vare </li>
                        <li>
                            Om det er forhold på arbeidsplassen som påvirker sykefraværet eller
                            helsesituasjonen
                        </li>
                        <li>
                            Om medarbeideren ønsker kontakt med NAV, bedriftshelsetjenesten eller
                            andre samarbeidspartnere for å få hjelp med tilrettelegging og
                            oppfølging
                        </li>
                    </ul>
                </Normaltekst>
                <UndertekstBold className="ekspanderbart-infopanel__innhold">
                    Husk at sykefravær ikke er en privatsak, det påvirker arbeidsplassen.
                    <br /> Diagnose, behandling og forhold hjemme er privat.
                </UndertekstBold>
            </EkspanderbartInfopanel>
            <EkspanderbartInfopanel
                tittel={'Suksesskriterier'}
                unikId={'Suksesskriterier'}
                ikon={<LyspæreSVG />}
            >
                <Normaltekst className="ekspanderbart-infopanel__innhold">
                    <ul>
                        <li>Lytt til hva medarbeideren har å si</li>
                        <li>Snakk om arbeidsevne ikke diagnose</li>
                        <li>Bygg på medarbeiderens motivasjon</li>
                        <li>La medarbeideren komme med de gode løsningene</li>
                        <li>Ikke hopp rett til konklusjoner og løsninger</li>
                        <li>Gjennomfør samtaler regelmessig</li>
                    </ul>
                </Normaltekst>
            </EkspanderbartInfopanel>
        </>
    );
};
