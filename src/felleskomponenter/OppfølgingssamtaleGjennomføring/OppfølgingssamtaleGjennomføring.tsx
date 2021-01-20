import { FunctionComponent } from 'react';
import {
    Element,
    Ingress,
    Normaltekst,
    Systemtittel,
    UndertekstBold,
} from 'nav-frontend-typografi';
import { EkspanderbartInfopanel } from '../EkspanderbartInfopanel/EkspanderbartInfopanel';
import './OppfølgingssamtaleGjennomføring.less';
import { Steg1SVG } from './Steg1SVG';
import Lenke from 'nav-frontend-lenker';
import { Steg2SVG } from './Steg2SVG';

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
                tittel={'Slik innleder du samtalen'}
                unikId={'Slik-innleder-du-samtalen'}
                ikon={<Steg2SVG />}
            >
                <div className="ekspanderbart-infopanel__innhold">
                    <Element>Innled samtalen med å klargjøre mål og hensikt</Element>
                    <Normaltekst>
                        Å innlede en samtale handler om å skape trygghet og sette rammer for
                        samtalen. Rammene hjelper dere med å holde fokus og tid.
                    </Normaltekst>
                    <Element className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        Vanlige tema i innledning:
                    </Element>
                    <li>Ønske velkommen</li>
                    <li>Informere om tidsrammene for møtet</li>
                    <li>Informere om målet med møtet</li>
                    <li>Gå igjennom agenda</li>
                    <li>Spørre hva medarbeideren tenker om mål og agenda</li>

                    <Element className="ekspanderbart-infopanel__innhold-ny-avsnitt">
                        Eksempler på spørsmål:
                    </Element>
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
                </div>
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
