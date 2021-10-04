import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import { marginTop0Rem, marginTop1Rem, marginTop3Rem } from '../../utils/fellesStiler';
import { Title } from '@navikt/ds-react';

const EnkleTipsForDigitaleSamtaler = ({ callback }: InfoPanelProps) => {
    return (
        <EkspanderbartInfopanel
            unikId={'psykiskHelsePåArbeidsplassen'}
            tittel={'Psykisk helse på arbeidsplassen'}
            panelLestSituasjon={'ulest'}
            callBack={callback}
        >
            <div className={marginTop1Rem}>
                <Title size={'m'} level={3}>
                    Arbeid påvirker medarbeiderens psykiske helse
                </Title>
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
            </div>
        </EkspanderbartInfopanel>
    );
};

/*


Alle kan ha en dårlig dag, og det er lov.

Hvor mange dårlige dager skal en medarbeider ha før du tar initiativ til en samtale?
Hvordan møter du som leder og de øvrige kollegaene en medarbeider med utfordringer?
 */
export default EnkleTipsForDigitaleSamtaler;
