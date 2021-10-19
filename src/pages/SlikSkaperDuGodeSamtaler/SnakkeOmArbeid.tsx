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

const SnakkeOmArbeid = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"snakkeOmArbeid"}
        tittel={"Snakke om arbeid"}
        panelLestSituasjon={"ulest"}
        callBack={callback}>
        <div className={marginTop1Rem}>
            <Heading className={classNames(marginBottom0Rem, marginTop0Rem)} size={'medium'} level={'3'}>
                En samtale for å forebygge eller følge opp sykefravær handler om medarbeideren.
            </Heading>
            <p className={marginTop0Rem}>
                Din oppgave er å legge til rette for at medarbeideren kan beskrive hvordan arbeidsoppgavene
                og arbeidsdagen oppleves.
            </p>
            <Heading className={marginBottom0Rem} size={'small'} level={'4'}>
                Tips:
            </Heading>
            <ul className={marginTop0Rem}>
                <li>Bruk åpne spørsmål med spørreord som hva, hvor, hvordan, hvem eller når.</li>
                <li>Unngå ordet “hvorfor”. Hvorfor kan ofte oppleves som en anklage eller for å fordele
                    skyld.
                </li>
                <li>Tål stillhet slik at medarbeideren får tid til å tenke før svarene kommer.</li>
            </ul>
            <Heading className={marginBottom0Rem} size={'small'} level={'4'}>
                Vanlige tema i samtalen om arbeidssituasjonen:
            </Heading>
            <ul className={marginTop0Rem}>
                <li>arbeidsoppgaver</li>
                <li>arbeidstid</li>
                <li>samarbeid</li>
                <li>arbeidsmiljø</li>
                <li>tidligere tiltak</li>
                <li>stillingsprosent</li>
            </ul>

            <Heading className={marginBottom0Rem} size={'small'} level={'4'}>
                Eksempler på spørsmål:
            </Heading>
            <p className={marginTop0Rem}>Velg noen av eksemplene som er relevante for akkurat denne samtalen.</p>

            <div className={classNames(graAvrundetBoks, marginBottom2Rem)}>
                <Heading className={marginBottom0Rem} size={'small'} level={'4'}>
                    Arbeidsoppgaver
                </Heading>
                <ul>
                    <li>Hvordan vil du beskrive arbeidsdagen din?</li>
                    <li>Hvilke av arbeidsoppgavene dine er du frisk nok til å utføre?</li>
                    <li>Hvilke av arbeidsoppgavene dine er vanskelige å utføre?</li>
                    <li>Hvilke oppgaver trives du best med?</li>
                </ul>
            </div>

            <div className={classNames(graAvrundetBoks, marginBottom2Rem)}>
                <Heading size={'small'} level={'4'}>
                    Arbeidsmiljø
                </Heading>
                <ul>
                    <li>Hvordan vil du beskrive arbeidsmiljøet?</li>
                    <li>Hva synes du er positivt, og hva tenker du kan forbedres?</li>
                    <li>Hvordan vil du beskrive stressnivået?</li>
                    <li>Hvordan påvirker arbeidsmiljøet sykefraværet ditt?</li>
                </ul>
            </div>

            <div className={classNames(graAvrundetBoks, marginBottom2Rem)}>
                <Heading size={'small'} level={'4'}>
                    Samarbeid og motivasjon
                </Heading>
                <ul>
                    <li>Hvordan opplever du samarbeidet med kolleger/ledere?</li>
                    <li>Hva motiverer deg mest akkurat nå?</li>
                    <li>Hva oppfatter du som dine styrker nå?</li>
                </ul>
            </div>
        </div>
    </EkspanderbartInfopanel>
};

export default SnakkeOmArbeid;