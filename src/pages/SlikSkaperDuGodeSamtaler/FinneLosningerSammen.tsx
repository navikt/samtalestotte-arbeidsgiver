import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import { Heading } from '@navikt/ds-react';
import {
    graAvrundetBoks,
    marginBottom0Rem,
    marginBottom2Rem,
    marginTop0Rem,
    marginTop1Rem
} from '../../utils/fellesStiler';
import classNames from 'classnames';

const FinneLosningerSammen = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"finneLøsningerSammen"}
        tittel={"Finne løsninger sammen"}
        panelLestSituasjon={"ulest"}
        callBack={callback}>
        <div className={marginTop1Rem}>
            <Heading className={marginBottom0Rem} size={'medium'} level={'3'}>
                Hjelp medarbeideren med å finne løsninger.
            </Heading>
            <p className={marginTop0Rem}>
                Hvis medarbeideren beskriver arbeidsoppgaver og arbeidssituasjon først,
                kan det bli enklere å se løsningsforslag selv.
                Egne løsningsforslag gir ofte økt motivasjon ved gjennomføring.
            </p>
            <Heading className={marginBottom0Rem} size={'small'} level={'4'}>
                Tips:
            </Heading>
            <p className={marginTop0Rem}>
                Snakk om det som skal skje framover i tid og på hvilke muligheter som finnes.
            </p>
            <Heading className={marginBottom0Rem} size={'small'} level={'4'}>
                Vanlige tema når dere finner løsninger sammen:
            </Heading>
            <ul className={marginTop0Rem}>
                <li>tilpasse arbeidsoppgaver eller arbeidsinnhold</li>
                <li>tilpasse arbeidstid, arbeidstempo eller tidskrav</li>
                <li>tilpasse organisering av arbeidet</li>
                <li>tilpasse samarbeid og samhandling med andre</li>
                <li className={marginBottom2Rem}>alternative arbeidsoppgaver</li>
                <li>behov for informasjon og tilbakemeldinger</li>
                <li>arbeidsmiljø</li>
                <li className={marginBottom2Rem}>kompetanse</li>
                <li>fysisk utforming av arbeidsplassen</li>
                <li>hjelpemidler</li>
                <li>andre forhold</li>
            </ul>

            <Heading className={marginBottom0Rem} size={'small'} level={'4'}>
                Eksempler på spørsmål:
            </Heading>
            <p className={marginTop0Rem}>
                Velg noen av eksemplene som er relevante for akkurat denne samtalen.
            </p>
            <div className={classNames(graAvrundetBoks, marginBottom2Rem)}>
                <Heading size={'small'} level={'4'}>
                    Hvordan kan jeg som leder hjelpe deg?
                </Heading>
                <ul>
                    <li>Hva ville være god og støttende hjelp for deg i en travel arbeidsdag?</li>
                    <li>Hva vil du oppleve som god støtte?</li>

                    <li>Hva kan jeg som leder hjelpe deg med, når det gjelder arbeidsoppgaver?</li>
                    <li>Hvordan kan jeg som leder hjelpe deg med å få en mindre stressende arbeidsdag?</li>
                </ul>
            </div>
            <div className={graAvrundetBoks}>
                <Heading size={'small'} level={'4'}>
                    Løsninger
                </Heading>
                <ul>
                    <li>Hvilke av arbeidsoppgavene dine kan du utføre med tilrettelegging?</li>
                    <li>Hvilke alternative arbeidsoppgaver kan du utføre?</li>
                    <li>Hvordan bør tiden disponeres?</li>
                    <li>Hvordan kan endringer i tempo, arbeidstid eller arbeidssted øke mulighetene for
                        arbeid?
                    </li>
                    <li>Hvordan bør arbeidsdagen se ut dersom du skal kunne klare den, helt eller delvis?
                    </li>
                    <li>Hvilke løsninger ser du for deg?</li>
                    <li>Hvordan vil den ideelle arbeidssituasjonen være for deg akkurat nå?</li>
                    <li>Hvilke tiltak bør vi prøve først?</li>
                </ul>
            </div>
        </div>
    </EkspanderbartInfopanel>
};

export default FinneLosningerSammen;