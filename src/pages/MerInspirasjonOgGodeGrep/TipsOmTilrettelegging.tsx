import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanelV2';
import "./TipsOmTilrettelegging.less";

const BESKRIVELSEAVPROSESSOGMALER_URL = "#";
const ARBEIDSGIVERSPLIKTER_URL = "#";
const NETTKURSPLIKTER_URL = "#";
const SYKEFRAVAERSOPPFOLGNING_URL = "#";
const OKONOMISKEVIRKEMIDLER_URL = "#";

const TipsOmTilrettelegging = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"tipsOmTilrettelegging"}
        tittel={"Tips om tilrettelegging"}
        panelLestSituasjon={"ulest"}
        callBack={callback}
    >
        <h3 className={"sub-section-header"}>Bruk eller lag oversikt over tilretteleggingsmuligheter på egen arbeidsplass.</h3>
        <p>
            Du og medarbeideren din vil raskere finne løsninger sammen hvis dere møtes i samtalen
            med gjensidige forventninger til hva som er mulig.
        </p>
        <p className={"tips-om-tilrettelegging-no-margin-bottom"}>
            Vi anbefaler arbeidsplasser å ha oversikt over hvilke tilretteleggingsmuligheter som finnes.
        </p>
        <p className={"tips-om-tilrettelegging-no-margin-top"}>
            Oversikten bør utarbeides sammen med medarbeiderne dine eller sammen med verneombud og
            tillitsvalgte. Hensikten er en felles vurdering av hvilken tilrettelegging er mulig hos
            dere.
        </p>
        <ul>
            <li><strong>Hvilke tilretteleggingsmuligheter finnes på deres arbeidsplass og ellers i
                organisasjonen?</strong></li>
            <li><strong>Hvor går grensene for ditt handlingsrom til å lage avtaler? Er det behov for å
                gjøre avklaringer?</strong></li>
        </ul>
        <strong>Dette kan du gjøre:</strong>
        <div className={"infoPanel-kolonner"}>
            <div className={"gra-avrundet-boks"}>
                <strong>på kort sikt:</strong>
                <ul className={"tips-om-tilrettelegging-no-margin-top"}>
                    <li className={"margin-bunn-2rem"}>
                        Undersøk om det finnes en oversikt over tilretteleggingsmuligheter for din
                        arbeidsplass,
                        hvis dere har en personalavdeling kan disse ofte hjelpe deg
                    </li>
                    <li>
                        Vurder om du bør dele oversikt over tilretteleggingsmuligheter med medarbeideren
                        før samtalen
                    </li>
                </ul>
            </div>
            <div className={"gra-avrundet-boks"}>
                <strong>over tid og som kontinuerlig arbeid:</strong>
                <ul className={"tips-om-tilrettelegging-no-margin-top"}>
                    <li className={"margin-bunn-2rem"}>
                        Lag en liste med tilretteleggingsmuligheter <a href={BESKRIVELSEAVPROSESSOGMALER_URL }>Se beskrivelse av prosess og maler på idebanken</a>
                    </li>
                </ul>
            </div>
        </div>

        <div className={"horizontal-line margin-topp-4rem margin-bunn-4rem"} />

        <h3 className={"sub-section-header"}>Lær mer om tilrettelegging</h3>

        <strong>Dette kan du gjøre:</strong>
        <div className={"infoPanel-kolonner margin-bunn-2rem"}>
            <div className={"gra-avrundet-boks"}>
                <strong>på kort sikt:</strong>
                <ul>
                    <li className={"margin-bunn-2rem"}>
                        <a href={ARBEIDSGIVERSPLIKTER_URL}>
                            Les mer om arbeidsgivers plikter til å tilrettelegge på arbeidsplassen hos
                            arbeidstilsynet.
                        </a>
                    </li>
                    <li className={"margin-bunn-2rem"}>
                        NAV tilbyr nettkurs (12 min) om arbeidsgivers tilretteleggingsplikt og
                        medarbeideres medvirkningsplikt i forbindelse med sykefraværsoppfølging. <a
                        href={NETTKURSPLIKTER_URL}>Gå til nettkurs.</a>
                    </li>
                    <li className={"margin-bunn-2rem"}>
                        <a href={SYKEFRAVAERSOPPFOLGNING_URL}>Les mer om tilrettelegging i sykefraværsoppfølging</a>
                    </li>
                    <li>
                        <a href={OKONOMISKEVIRKEMIDLER_URL}>Les mer om NAVs økonomiske virkemidler</a>
                    </li>
                </ul>
            </div>
            <div className={"gra-avrundet-boks"}>
                <strong>over tid og som kontinuerlig arbeid:</strong>
                <ul>
                    <li className={"margin-bunn-2rem"}>
                        Lag en plan for gjennomføring av aktiviteter hvis du ikke har tid til å
                        gjennomføre alle nå.
                    </li>
                </ul>
            </div>
        </div>

    </EkspanderbartInfopanel>
};

export default TipsOmTilrettelegging;