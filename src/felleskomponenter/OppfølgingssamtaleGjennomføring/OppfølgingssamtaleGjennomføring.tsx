import {FunctionComponent} from 'react';
import {Element, Ingress, Normaltekst, Systemtittel, UndertekstBold,} from 'nav-frontend-typografi';
import {EkspanderbartInfopanel} from '../EkspanderbartInfopanel/EkspanderbartInfopanel';
import './OppfølgingssamtaleGjennomføring.less';
import {Steg1SVG} from './Steg1SVG';
import Lenke from 'nav-frontend-lenker';

export const OppfølgingssamtaleGjennomføring: FunctionComponent = () => {
    return (
        <>
            <Systemtittel className="oppfølgingssamtaleGjennomføring__tittel">
                Slik gjennomfører du en 'riktig ord kommer' oppfølgingssamtale
            </Systemtittel>
            <Ingress className="oppfølgingssamtaleGjennomføring__ingress">
                Samtalen kan deles inn i faser, vi har gjort det enkelt for deg å forstå innholdet
                og bruke det aktivt i din hverdag
            </Ingress>
            <EkspanderbartInfopanel
                tittel={'Slik forbereder du samtalen'}
                unikId={'Slik-forbereder-du-samtalen'}
                ikon={<Steg1SVG />}
            >
                <div className="ekspanderbart-infopanel__innhold">
                    <Element>Lederens rolle i en oppfølgingssamtale</Element>
                    <li>Du er ansvarlig for å gjennomføre og dokumentere oppfølgingssamtaler.</li>
                    <li>
                        Ditt ansvar begrenser seg til å snakke om forhold på arbeidsplassen, se mer
                        i tema for oppfølgingssamtalen
                    </li>
                    <li>Din viktigste oppgave er å få medarbeideren til å snakke</li>

                    <Element className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        Kjente fallgruver:
                    </Element>
                    <li>Du påtar deg for stort ansvar for helsa til medarbeideren</li>
                    <li>Fokuset handler om behandling eller forhold i privatlivet</li>

                    <Element className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        Tema for oppfølgingssamtalen
                    </Element>
                    <li>En oppfølgingssamtale handler om</li>
                    <li>gjennomgang av arbeidsoppgaver</li>
                    <li>
                        vurdering av hvilke oppgaver som kan gjennomføres med eller uten
                        tilrettelegging eventuelt alternative arbeidsoppgaver
                    </li>
                    <li>plan for videre oppfølging</li>
                </div>
                <div className="ekspanderbart-infopanel__innhold-avsnitt-med-bakgrunn">
                    <Element>Noen tips til egen forberedelse før samtalen</Element>
                    <li>Hva er dine mål med samtalen?</li>
                    <li>
                        Hvordan er din relasjon og holdninger til medarbeideren, og hvordan kan
                        dette påvirke dialogen?
                    </li>
                    <li>
                        Hva har du observert? Du kan være tydelig på dine observasjoner og hvordan
                        du tolker disse, men gi medarbeideren anledning til å korrigere hvis du har
                        tatt feil.
                    </li>
                    <li>
                        Hvilke tilretteleggingsmuligheter finnes på egen arbeidsplass og eventuelt
                        ellers i organisasjonen og hvor er grensene for ditt handlingsrom?
                    </li>
                    <li>
                        <Lenke href="https://www.nav.no/no/bedrift/oppfolging/sykmeldt-arbeidstaker/relatert-informasjon/slik-folger-du-opp-sykmeldte/tilrettelegging_kap">
                            Les mer om tilrettelegging
                        </Lenke>
                    </li>
                    <li>
                        <Lenke href="https://arbeidsgiver.nav.no/veiviserarbeidsgiver/tilrettelegge/du-onsker-a-tilrettelegge">
                            Les mer om NAVs virkemidler
                        </Lenke>
                    </li>
                    <div className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        <Element>Praktiske råd</Element>
                        <li>Avtal tid og sted som passer deg og medarbeideren.</li>
                        <li>
                            Samtalen kan gjennomføres digitalt eller utenfor arbeidsplassen hvis det
                            passer best.
                        </li>
                        <li>
                            Gjør medarbeideren kjent med mål og tema for møtet på forhånd. Du kan
                            for eksempel sende spørsmål dere skal snakke om på forhånd. Når begge er
                            forberedt, blir det enklere å finne løsninger sammen.
                        </li>
                    </div>
                </div>
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
