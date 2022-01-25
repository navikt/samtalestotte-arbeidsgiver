import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import {
    FOLGE_OPP_TILRETTELEGGING,
    NETTKURS,
    OKONOMISKE_VIRKEMIDLER,
    SLIK_LYKKES_DERE,
    TILRETTELEGGING,
} from '../../resources/urls';
import LoggbarLenke from '../../felleskomponenter/LoggbarLenke/LoggbarLenke';
import { Heading } from '@navikt/ds-react';
import {
    graAvrundetBoks, horizontalLine,
    infoPanelKolonner,
    marginBottom025rem,
    marginBottom0Rem,
    marginBottom1Rem,
    marginBottom2Rem,
    marginBottom3Rem,
    marginTop0Rem, marginTop1Rem, marginTop2Rem, marginTop3Rem,
} from '../../utils/fellesStiler';
import classNames from 'classnames';

const TipsOmTilrettelegging = (props: InfoPanelProps) => {
    return (
        <EkspanderbartInfopanel
            unikId={'tipsOmTilrettelegging'}
            tittel={'Tips om tilrettelegging'}
            panelLestSituasjon={'ulest'}
        >
            <div className={marginTop1Rem}>
                <Heading size={'medium'} level={'3'}>
                    Bruk eller lag oversikt over tilretteleggingsmuligheter på egen arbeidsplass.
                </Heading>
                <p>
                    Du og medarbeideren din vil raskere finne løsninger sammen hvis dere møtes i
                    samtalen med gjensidige forventninger til hva som er mulig.
                </p>
                <p className={marginBottom0Rem}>
                    Vi anbefaler arbeidsplasser å ha oversikt over hvilke tilretteleggingsmuligheter som
                    finnes.
                </p>
                <p className={classNames(marginTop0Rem, marginBottom3Rem)}>
                    Oversikten bør utarbeides sammen med medarbeiderne dine eller sammen med verneombud
                    og tillitsvalgte. Hensikten er en felles vurdering av hvilken tilrettelegging er
                    mulig hos dere.
                </p>
                <ul className={marginBottom2Rem}>
                    <li className={marginBottom1Rem}>
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
                <Heading className={marginBottom025rem} size={'small'} level={'4'}>Dette kan du gjøre:</Heading>
                <div className={infoPanelKolonner}>
                    <div className={graAvrundetBoks}>
                        <Heading size={'small'} level={'4'}>
                            på kort sikt:
                        </Heading>
                        <ul className={marginTop0Rem}>
                            <li className={marginBottom2Rem}>
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
                    <div className={graAvrundetBoks}>
                        <Heading size={'small'} level={'4'}>
                            over tid og som kontinuerlig arbeid:
                        </Heading>
                        <ul className={marginTop0Rem}>
                            <li className={marginBottom2Rem}>
                                Lag en liste med tilretteleggingsmuligheter{' '}
                                <LoggbarLenke href={SLIK_LYKKES_DERE}>
                                    Se beskrivelse av prosess og maler på idebanken
                                </LoggbarLenke>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={classNames(horizontalLine, marginTop3Rem, marginBottom3Rem)} />

                <Heading size={'medium'} level={'3'}>Lær mer om tilrettelegging</Heading>
                <Heading className={marginBottom025rem} size={'small'} level={'4'}>
                    Dette kan du gjøre:
                </Heading>
                <div className={classNames(infoPanelKolonner, marginBottom2Rem)}>
                    <div className={graAvrundetBoks}>
                        <Heading size={'small'} level={'4'}>
                            på kort sikt:
                        </Heading>
                        <ul>
                            <li className={marginBottom2Rem}>
                                <LoggbarLenke href={TILRETTELEGGING}>
                                    Les mer om arbeidsgivers plikter til å tilrettelegge på
                                    arbeidsplassen hos arbeidstilsynet.
                                </LoggbarLenke>
                            </li>
                            <li className={marginBottom2Rem}>
                                NAV tilbyr nettkurs (12 min) om arbeidsgivers tilretteleggingsplikt og
                                medarbeideres medvirkningsplikt i forbindelse med sykefraværsoppfølging.{' '}
                                <LoggbarLenke href={NETTKURS}>Gå til nettkurs.</LoggbarLenke>
                            </li>
                            <li className={marginBottom2Rem}>
                                <LoggbarLenke href={FOLGE_OPP_TILRETTELEGGING}>
                                    Les mer om tilrettelegging i sykefraværsoppfølging
                                </LoggbarLenke>
                            </li>
                            <li>
                                <LoggbarLenke href={OKONOMISKE_VIRKEMIDLER}>
                                    Les mer om NAVs støtteordninger ved tilrettelegging for ansatte
                                </LoggbarLenke>
                            </li>
                        </ul>
                    </div>
                    <div className={graAvrundetBoks}>
                        <Heading className={marginBottom0Rem} size={'small'} level={'4'}>
                            over tid og som kontinuerlig arbeid:
                        </Heading>
                        <ul>
                            <li className={marginBottom2Rem}>
                                Lag en plan for å lære mer.
                            </li>
                            <li className={marginBottom2Rem}>
                                Hva du trenger å vite mer om?
                            </li>
                            <li className={marginBottom2Rem}>
                                Hvordan kan du lære mer?
                            </li>
                            <li className={marginBottom2Rem}>
                                Når du skal gjennomføre?
                            </li>
                            <li>
                                Husk å ta med tillitsvalgte og verneombud slik at dere sammen lærer mer om tilrettelegging.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </EkspanderbartInfopanel>
    );
};

export default TipsOmTilrettelegging;
