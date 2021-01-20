import {FunctionComponent} from 'react';
import {Normaltekst, Systemtittel, UndertekstBold} from 'nav-frontend-typografi';
import {EkspanderbartInfopanel} from '../EkspanderbartInfopanel/EkspanderbartInfopanel';
import './Samtaleverktøy.less';
import {LyspæreSVG} from './LyspæreSVG';
//import { ReactComponent as Lyspære } from './lyspære.svg';

export const Samtaleverktøy: FunctionComponent = () => {
    return (
        <>
            <Systemtittel className="samtaleverktøy__tittel">Samtaleverktøy</Systemtittel>
            <EkspanderbartInfopanel
                tittel={'Når kan oppfølgingssamtale være aktuelt?'}
                unikId={'nå-kan-være-samtalen-aktuelt'}
            >
                <Normaltekst className="ekspanderbart-infopanel__innhold">
                    En oppfølgingssamtale gjennomføres hvis du eller din medarbeider opplever
                    utfordringer med arbeidet. Utfordringer kan for eksempel skyldes sykdom eller
                    andre forhold. Du bør ikke vente til medarbeideren har blitt sykmeldt.
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
                    <li>Mulighetene til å utføre egne eller alternative arbeidsoppgaver</li>
                    <li>Behov for tilrettelegging </li>
                    <li>
                        Om medarbeideren kjenner til rutiner og tilretteleggingsmuligheter i deres
                        virksomhet
                    </li>
                    <li>Hvor lenge medarbeideren tror fraværet vil vare </li>
                    <li>
                        Om det er forhold på arbeidsplassen som påvirker sykefraværet eller
                        helsesituasjonen
                    </li>
                    <li>
                        Om medarbeideren ønsker kontakt med NAV, bedriftshelsetjenesten eller andre
                        samarbeidspartnere for å få hjelp med tilrettelegging og oppfølging
                    </li>
                </Normaltekst>
                <UndertekstBold className="ekspanderbart-infopanel__innhold">
                    Husk at sykefravær ikke er en privatsak, det påvirker arbeidsplassen. Diagnose,
                    behandling og forhold hjemme er privat.
                </UndertekstBold>
            </EkspanderbartInfopanel>
            <EkspanderbartInfopanel
                tittel={'Suksesskriterier'}
                unikId={'Suksesskriterier'}
                ikon={<LyspæreSVG />}
            >
                <Normaltekst className="ekspanderbart-infopanel__innhold">
                    <li>Lytt til hva medarbeideren har å si</li>
                    <li>
                        Snakk om arbeidsevne ikke diagnose
                        <li>Bygg på medarbeiderens motivasjon</li>
                    </li>
                    <li>La medarbeideren komme med de gode løsningene</li>
                    <li>Ikke hopp rett til konklusjoner og løsninger</li>
                    <li>Gjennomfør oppfølgingssamtaler regelmessigr</li>
                </Normaltekst>
            </EkspanderbartInfopanel>
        </>
    );
};
