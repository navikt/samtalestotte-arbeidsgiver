import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import './TipsOmTilrettelegging.less';
import {
    FOLGE_OPP_TILRETTELEGGING,
    NETTKURS,
    OKONOMISKE_VIRKEMIDLER,
    SLIK_LYKKES_DERE,
    TILRETTELEGGING,
} from '../../resources/urls';
import LoggbarLenke from '../../felleskomponenter/LoggbarLenke/LoggbarLenke';

const TipsOmTilrettelegging = ({ callback }: InfoPanelProps) => {
    return (
        <EkspanderbartInfopanel
            unikId={'tipsOmTilrettelegging'}
            tittel={'Tips om tilrettelegging'}
            panelLestSituasjon={'ulest'}
            callBack={callback}
        >
            <h3 className={'sub-section-header'}>
                Bruk eller lag oversikt over tilretteleggingsmuligheter på egen arbeidsplass.
            </h3>
            <p>
                Du og medarbeideren din vil raskere finne løsninger sammen hvis dere møtes i
                samtalen med gjensidige forventninger til hva som er mulig.
            </p>
            <p className={'tips-om-tilrettelegging-no-margin-bottom'}>
                Vi anbefaler arbeidsplasser å ha oversikt over hvilke tilretteleggingsmuligheter som
                finnes.
            </p>
            <p className={'tips-om-tilrettelegging-no-margin-top'}>
                Oversikten bør utarbeides sammen med medarbeiderne dine eller sammen med verneombud
                og tillitsvalgte. Hensikten er en felles vurdering av hvilken tilrettelegging er
                mulig hos dere.
            </p>
            <ul>
                <li>
                    <strong>
                        Hvilke tilretteleggingsmuligheter finnes på deres arbeidsplass og ellers i
                        organisasjonen?
                    </strong>
                </li>
                <li>
                    <strong>
                        Hvor går grensene for ditt handlingsrom til å lage avtaler? Er det behov for
                        å gjøre avklaringer?
                    </strong>
                </li>
            </ul>
            <strong>Dette kan du gjøre:</strong>
            <div className={'infoPanel-kolonner'}>
                <div className={'gra-avrundet-boks'}>
                    <strong>på kort sikt:</strong>
                    <ul className={'tips-om-tilrettelegging-no-margin-top'}>
                        <li className={'margin-bunn-2rem'}>
                            Undersøk om det finnes en oversikt over tilretteleggingsmuligheter for
                            din arbeidsplass, hvis dere har en personalavdeling kan disse ofte
                            hjelpe deg
                        </li>
                        <li>
                            Vurder om du bør dele oversikt over tilretteleggingsmuligheter med
                            medarbeideren før samtalen
                        </li>
                    </ul>
                </div>
                <div className={'gra-avrundet-boks'}>
                    <strong>over tid og som kontinuerlig arbeid:</strong>
                    <ul className={'tips-om-tilrettelegging-no-margin-top'}>
                        <li className={'margin-bunn-2rem'}>
                            Lag en liste med tilretteleggingsmuligheter{' '}
                            <LoggbarLenke href={SLIK_LYKKES_DERE}>
                                Se beskrivelse av prosess og maler på idebanken
                            </LoggbarLenke>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={'horizontal-line margin-topp-4rem margin-bunn-4rem'} />

            <h3 className={'sub-section-header'}>Lær mer om tilrettelegging</h3>

            <strong>Dette kan du gjøre:</strong>
            <div className={'infoPanel-kolonner margin-bunn-2rem'}>
                <div className={'gra-avrundet-boks'}>
                    <strong>på kort sikt:</strong>
                    <ul>
                        <li className={'margin-bunn-2rem'}>
                            <LoggbarLenke href={TILRETTELEGGING}>
                                Les mer om arbeidsgivers plikter til å tilrettelegge på
                                arbeidsplassen hos arbeidstilsynet.
                            </LoggbarLenke>
                        </li>
                        <li className={'margin-bunn-2rem'}>
                            NAV tilbyr nettkurs (12 min) om arbeidsgivers tilretteleggingsplikt og
                            medarbeideres medvirkningsplikt i forbindelse med sykefraværsoppfølging.{' '}
                            <LoggbarLenke href={NETTKURS}>Gå til nettkurs.</LoggbarLenke>
                        </li>
                        <li className={'margin-bunn-2rem'}>
                            <LoggbarLenke href={FOLGE_OPP_TILRETTELEGGING}>
                                Les mer om tilrettelegging i sykefraværsoppfølging
                            </LoggbarLenke>
                        </li>
                        <li>
                            <LoggbarLenke href={OKONOMISKE_VIRKEMIDLER}>
                                Les mer om NAVs økonomiske virkemidler
                            </LoggbarLenke>
                        </li>
                    </ul>
                </div>
                <div className={'gra-avrundet-boks'}>
                    <strong>over tid og som kontinuerlig arbeid:</strong>
                    <ul>
                        <li className={'margin-bunn-2rem'}>
                            Lag en plan for å lære mer.
                        </li>
                        <li className={'margin-bunn-2rem'}>
                            Hva du trenger å vite mer om?
                        </li>
                        <li className={'margin-bunn-2rem'}>
                            Hvordan kan du lære mer?
                        </li>
                        <li className={'margin-bunn-2rem'}>
                            Når du skal gjennomføre?
                        </li>
                        <li>
                            Husk å ta med tillitsvalgte og verneombud slik at dere sammen lærer mer om tilrettelegging.
                        </li>
                    </ul>
                </div>
            </div>
        </EkspanderbartInfopanel>
    );
};

export default TipsOmTilrettelegging;
