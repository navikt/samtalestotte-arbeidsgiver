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
import fellesStiler from '../../utils/fellesStiler.module.css';
import classNames from 'classnames';
import { Liste } from '../../Liste/Liste';
import { InfoBoks } from '../../felleskomponenter/InfoBoks/InfoBoks';

const TipsOmTilrettelegging = (props: InfoPanelProps) => {
    return (
        <EkspanderbartInfopanel
            unikId={'tipsOmTilrettelegging'}
            tittel={'Tips om tilrettelegging'}
            panelLestSituasjon={'ulest'}
        >
            <div className={fellesStiler.marginTop1Rem}>
                <Heading size={'medium'} level={'3'}>
                    Bruk eller lag en oversikt over muligheter for tilrettelegging på egen
                    arbeidsplass
                </Heading>
                <p>
                    Du og medarbeideren din vil raskere finne løsninger sammen hvis dere møtes i
                    samtalen med gjensidige forventninger til hva som er mulig.
                </p>
                <p>
                    Vi anbefaler arbeidsplasser å ha oversikt over hvilke muligheter for
                    tilrettelegging som finnes.
                </p>
                <p>
                    Oversikten bør utarbeides sammen med medarbeiderne dine eller sammen med
                    verneombud og tillitsvalgte. Hensikten er en felles vurdering av hvilken
                    tilrettelegging er mulig hos dere.
                </p>
                <Liste>
                    <Liste.Element>
                        <strong>
                            Hvilke muligheter for tilrettelegging finnes på deres arbeidsplass eller
                            i organisasjonen?
                        </strong>
                    </Liste.Element>
                    <Liste.Element>
                        <strong>
                            Hvor går grensene for ditt handlingsrom til å lage avtaler? Er det behov
                            for å gjøre avklaringer?
                        </strong>
                    </Liste.Element>
                </Liste>
                <Heading className={fellesStiler.marginBottom025rem} size={'small'} level={'4'}>
                    Dette kan du gjøre:
                </Heading>
                <InfoBoks overskrift="på kort sikt:">
                    <Liste>
                        <Liste.Element>
                            Undersøk om det finnes en oversikt over mulig tilrettelegging. Hvis dere
                            har en personalavdeling, kan disse ofte hjelpe deg.
                        </Liste.Element>
                        <Liste.Element>
                            Vurder om du bør dele oversikten over mulig tilrettelegging med
                            medarbeideren før samtalen.
                        </Liste.Element>
                    </Liste>
                </InfoBoks>
                <InfoBoks overskrift="over tid og som kontinuerlig arbeid:">
                    <Liste>
                        <Liste.Element>
                            Lag en liste over mulig tilrettelegging på deres arbeidsplass.{' '}
                            <LoggbarLenke href={SLIK_LYKKES_DERE}>
                                Se beskrivelse av prosess og maler på idebanken.
                            </LoggbarLenke>
                        </Liste.Element>
                    </Liste>
                </InfoBoks>

                <div
                    className={classNames(
                        fellesStiler.horizontalLine,
                        fellesStiler.marginTop3Rem,
                        fellesStiler.marginBottom3Rem
                    )}
                />

                <Heading size={'medium'} level={'3'} spacing>
                    Lær mer om tilrettelegging
                </Heading>
                <Heading className={fellesStiler.marginBottom025rem} size={'small'} level={'4'}>
                    Dette kan du gjøre:
                </Heading>
                <InfoBoks overskrift="på kort sikt:">
                    <Liste>
                        <Liste.Element>
                            <LoggbarLenke href={TILRETTELEGGING}>
                                Les mer om arbeidsgivers plikter til å tilrettelegge på
                                arbeidsplassen hos arbeidstilsynet.
                            </LoggbarLenke>
                        </Liste.Element>
                        <Liste.Element>
                            NAV tilbyr nettkurs (12 min) om arbeidsgivers tilretteleggingsplikt og
                            medarbeideres medvirkningsplikt i forbindelse med sykefraværsoppfølging.{' '}
                            <LoggbarLenke href={NETTKURS}>Gå til nettkurs.</LoggbarLenke>
                        </Liste.Element>
                        <Liste.Element>
                            <LoggbarLenke href={OKONOMISKE_VIRKEMIDLER}>
                                Les mer om NAVs støtteordninger ved tilrettelegging for ansatte
                            </LoggbarLenke>
                        </Liste.Element>
                    </Liste>
                </InfoBoks>

                <InfoBoks overskrift="over tid og som kontinuerlig arbeid:">
                    <Liste>
                        <Liste.Element>Lag en plan for å lære mer.</Liste.Element>
                        <Liste.Element>Hva du trenger å vite mer om?</Liste.Element>
                        <Liste.Element>Hvordan kan du lære mer?</Liste.Element>
                        <Liste.Element>Når du skal gjennomføre?</Liste.Element>
                        <Liste.Element>
                            Husk å ta med tillitsvalgte og verneombud slik at dere sammen lærer mer
                            om tilrettelegging.
                        </Liste.Element>
                    </Liste>
                </InfoBoks>
            </div>
        </EkspanderbartInfopanel>
    );
};

export default TipsOmTilrettelegging;
