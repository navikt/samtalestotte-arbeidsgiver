import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import fellesStiler from '../../utils/fellesStiler.module.css';
import { Heading } from '@navikt/ds-react';
import LoggbarLenke from '../../felleskomponenter/LoggbarLenke/LoggbarLenke';
import {
    ARBEIDSGIVERLOS_ANSATTE_SOM_SLITTER_PSYKISK,
    IDEBANKEN_PSYKISK_HELSE,
} from '../../resources/urls';
import { Liste } from '../../Liste/Liste';
import { InfoBoks } from '../../felleskomponenter/InfoBoks/InfoBoks';

const PsykiskHelsePåArbeidsplassen = () => {
    return (
        <EkspanderbartInfopanel
            unikId={'psykiskHelsePåArbeidsplassen'}
            tittel={'Psykisk helse på arbeidsplassen'}
            panelLestSituasjon={'ulest'}
        >
            <Heading size={'medium'} level={'3'} className={fellesStiler.marginTop2Rem}>
                Arbeid påvirker medarbeiderens psykiske helse
            </Heading>
            <p>
                Når en medarbeider sliter psykisk, vil du ofte kunne se endringer. Dette kan være
                måten arbeidet blir utført på, eller samhandling med andre.
            </p>
            <p className={fellesStiler.marginTop1Rem}>Mulige konsekvenser på jobb kan være:</p>
            <Liste>
                <Liste.Element>Problemer med å forstå og huske informasjon</Liste.Element>
                <Liste.Element>Utfordringer med å gjøre flere oppgaver samtidig</Liste.Element>
                <Liste.Element>
                    Vanskeligheter med å prioritere og ferdigstille oppgaver
                </Liste.Element>
                <Liste.Element>Problemer med å beregne tid</Liste.Element>
                <Liste.Element>Virker sliten, og slutter å ta initiativ</Liste.Element>
                <Liste.Element>Virker motløs og irritabel, og kan oppleves vanskelig</Liste.Element>
                <Liste.Element>Konsentrasjonsproblemer eller kan virker fraværende</Liste.Element>
                <Liste.Element>
                    Utfordringer med å samarbeide og forholde seg til andre mennesker
                </Liste.Element>
                <Liste.Element>
                    Trekker seg unna sosiale aktiviteter, orker ikke å være sammen med kollegaer
                </Liste.Element>
            </Liste>
            <p>Alle kan ha en dårlig dag, og det er lov.</p>
            <Liste>
                <Liste.Element>
                    Hvor mange dårlige dager skal en medarbeider ha før du tar initiativ til en
                    samtale?
                </Liste.Element>
                <Liste.Element>
                    Hvordan møter du som leder og de øvrige kollegaene en medarbeider med
                    utfordringer?
                </Liste.Element>
            </Liste>

            <Heading size="small" level={'4'} className={fellesStiler.marginTop3Rem}>
                Dette kan du gjøre:
            </Heading>

            <InfoBoks overskrift="på kort sikt:">
                <Liste>
                    <Liste.Element>
                        Vis omsorg, spør hvordan noen har det, lytt og still krav.
                    </Liste.Element>
                    <Liste.Element>
                        Gjennomfør flere korte samtaler. Husk: positive tilbakemeldinger og
                        skriftlighet.
                    </Liste.Element>
                    <Liste.Element>
                        Bruk veiledningen i «Slik skaper du gode samtaler» (lenke til egen side) til
                        å forberede og gjennomføre en samtale om arbeid.
                    </Liste.Element>
                    <Liste.Element>
                        Du kan be om veiledning i forkant av samtalen hvis du har behov.
                        HR-/personalavdeling, bedriftshelsetjenesten eller NAV har erfaring og kan
                        hjelpe deg.
                    </Liste.Element>
                    <Liste.Element>
                        <LoggbarLenke href={ARBEIDSGIVERLOS_ANSATTE_SOM_SLITTER_PSYKISK}>
                            Les mer om hjelp du kan få fra NAVs arbeidsgiverlos hvis en ansatt
                            sliter psykisk
                        </LoggbarLenke>
                    </Liste.Element>
                </Liste>
            </InfoBoks>
            <InfoBoks overskrift="over tid og som kontinuerlig arbeid:">
                <Liste>
                    <Liste.Element>
                        Se etter tegn fra lista over og ta initiativ til en samtale før et
                        sykefravær oppstår.
                    </Liste.Element>
                    <Liste.Element>
                        <LoggbarLenke href={IDEBANKEN_PSYKISK_HELSE}>
                            Les mer om "Slik kan du bidra til bedre psykisk helse på arbeidsplassen"
                            hos idebanken.
                        </LoggbarLenke>
                    </Liste.Element>
                </Liste>
            </InfoBoks>
        </EkspanderbartInfopanel>
    );
};

export default PsykiskHelsePåArbeidsplassen;
