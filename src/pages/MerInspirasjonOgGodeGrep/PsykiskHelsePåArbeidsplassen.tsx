import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import {EkspanderbartInfopanel} from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import {
    graAvrundetBoks,
    infoPanelKolonner,
    marginTop0Rem,
    marginTop1Rem,
    marginTop3Rem,
} from '../../utils/fellesStiler';
import { Heading } from '@navikt/ds-react';
import LoggbarLenke from '../../felleskomponenter/LoggbarLenke/LoggbarLenke';
import {
    FILM_OM_PSYKISK_HELSE, IDEBANKEN_PSYKISK_HELSE,
    OPPFØLGING_ANSATTE_SOM_SLITTER_PSYKISK,
} from '../../resources/urls';
import classNames from 'classnames';

const EnkleTipsForDigitaleSamtaler = ({callback}: InfoPanelProps) => {
    return (
        <EkspanderbartInfopanel
            unikId={'psykiskHelsePåArbeidsplassen'}
            tittel={'Psykisk helse på arbeidsplassen'}
            panelLestSituasjon={'ulest'}
            callBack={callback}
        >
            <div className={marginTop1Rem}>
                <Heading size={'medium'} level={'3'}>
                    Arbeid påvirker medarbeiderens psykiske helse
                </Heading>
                <p>
                    Når en medarbeider sliter psykisk så vil du ofte kunne se endringer i måten
                    arbeidsoppgavene blir utført eller måten samhandlingen med andre foregår.
                    Endringene kan komme til uttrykk på forskjellige måter.
                </p>
                <p className={marginTop1Rem}>Mulige konsekvenser på jobb kan være:</p>
                <ul className={marginTop0Rem}>
                    <li>Problemer med å forstå og huske informasjon</li>
                    <li>Utfordringer med å gjøre flere oppgaver samtidig</li>
                    <li>Vanskeligheter med å prioritere og ferdigstille oppgaver</li>
                    <li>Problemer med å beregne tid</li>
                    <li>Virker sliten, og slutter å ta initiativ</li>
                    <li>Virker motløs og irritabel, og kan oppleves vanskelig</li>
                    <li>Konsentrasjonsproblemer eller kan virker fraværende</li>
                    <li>Utfordringer med å samarbeide og forholde seg til andre mennesker</li>
                    <li>
                        Trekker seg unna sosiale aktiviteter, orker ikke å være sammen med kollegaer
                    </li>
                </ul>

                <p className={marginTop3Rem}>Alle kan ha en dårlig dag, og det er lov.</p>

                <ul className={marginTop0Rem}>
                    <li>
                        Hvor mange dårlige dager skal en medarbeider ha før du tar initiativ til en
                        samtale?
                    </li>
                    <li>
                        Hvordan møter du som leder og de øvrige kollegaene en medarbeider med
                        utfordringer?
                    </li>
                </ul>

                <Heading size="small" level={'4'} className={marginTop3Rem}>
                    Dette kan du gjøre:
                </Heading>

                <div className={classNames(infoPanelKolonner, marginTop1Rem)}>
                    <div className={graAvrundetBoks}>
                        <Heading size={'small'} level={'4'}>
                            på kort sikt:
                        </Heading>
                        <ul className={marginTop0Rem}>
                            <li className={marginTop1Rem}>
                                <LoggbarLenke href={FILM_OM_PSYKISK_HELSE}>
                                    Se filmen “Vi må tørre å snakke om psykisk helse på
                                    arbeidsplassen”, 5 minutter og 13 sekunder.
                                </LoggbarLenke>
                            </li>
                            <li>
                                Vis omsorg, spør hvordan noen har det, lytt og still krav.
                            </li>
                            <li>
                                Gjennomfør flere korte samtaler. Husk: positive tilbakemeldinger og
                                skriftlighet.
                            </li>
                            <li>
                                Bruk veiledningen i «Slik skaper du gode samtaler» (lenke til egen
                                side) til å forberede og gjennomføre en samtale om arbeid.
                            </li>
                            <li>
                                Du kan be om veiledning i forkant av samtalen hvis du har behov.
                                HR-/personalavdeling, bedriftshelsetjenesten eller NAV har erfaring
                                og kan hjelpe deg.
                            </li>
                            <li>
                                <LoggbarLenke href={OPPFØLGING_ANSATTE_SOM_SLITTER_PSYKISK}>
                                    Les mer om NAVs tilbud til arbeidsgivere som har ansatte som
                                    sliter psykisk
                                </LoggbarLenke>
                            </li>
                        </ul>
                    </div>
                    <div className={graAvrundetBoks}>
                        <Heading size={'small'} level={'4'}>
                            over tid og som kontinuerlig arbeid:
                        </Heading>
                        <ul className={marginTop0Rem}>
                            <li className={marginTop1Rem}>
                                Se etter tegn fra lista over og ta initiativ til en samtale før et
                                sykefravær oppstår.
                            </li>
                            <li>
                                <LoggbarLenke href={IDEBANKEN_PSYKISK_HELSE}>
                                    Les mer om "Slik kan du bidra til bedre psykisk helse på
                                    arbeidsplassen" hos idebanken.
                                </LoggbarLenke>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </EkspanderbartInfopanel>
    );
};

export default EnkleTipsForDigitaleSamtaler;
