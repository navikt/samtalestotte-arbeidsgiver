import { FunctionComponent } from 'react';
import { Normaltekst, Systemtittel, UndertekstBold, Undertittel } from 'nav-frontend-typografi';
import { EkspanderbartInfopanel } from '../EkspanderbartInfopanel/EkspanderbartInfopanel';
import './OppfølgingssamtaleGjennomføring.less';
//import {ReactComponent as Nummer1IListe} from '../../public/text.svg';

export const OppfølgingssamtaleGjennomføring: FunctionComponent = () => {
    return (
        <>
            <Systemtittel className="oppfølgingssamtaleGjennomføring__tittel">
                Slik gjennomfører du en 'riktig ord kommer' oppfølgingssamtale
            </Systemtittel>
            <Undertittel className="oppfølgingssamtaleGjennomføring__tittel">
                Samtalen kan deles inn i faser, vi har gjort det enkelt for deg å forstå innholdet
                og bruke det aktivt i din hverdag
            </Undertittel>
            <EkspanderbartInfopanel
                tittel={'Slik forbreder du samtalen'}
                unikId={'nå-kan-være-samtalen-aktuelt'}
                //ikon={Nummer1IListe}
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
                bakgrunn={'navBakgrunn'}
            >
                <Normaltekst className="ekspanderbart-infopanel__innhold">
                    <li>· Lytt til hva medarbeideren har å si · · · · · </li>
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
