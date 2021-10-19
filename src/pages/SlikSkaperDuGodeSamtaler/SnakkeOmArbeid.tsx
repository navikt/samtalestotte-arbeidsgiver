import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import { Title } from '@navikt/ds-react';
import {
    graAvrundetBoks,
    marginBottom0Rem,
    marginBottom2Rem,
    marginTop0Rem,
    marginTop1Rem
} from '../../utils/fellesStiler';
import classNames from 'classnames';

const SnakkeOmArbeid = (props: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"snakkeOmArbeid"}
        tittel={"Snakke om arbeid"}
        panelLestSituasjon={"ulest"}
    >
        <div className={marginTop1Rem}>
            <Title className={classNames(marginBottom0Rem, marginTop0Rem)} size={'m'} level={3}>
                En samtale for å forebygge eller følge opp sykefravær handler om medarbeideren.
            </Title>
            <p className={marginTop0Rem}>
                Din oppgave er å legge til rette for at medarbeideren kan beskrive hvordan arbeidsoppgavene
                og arbeidsdagen oppleves.
            </p>
            <Title className={marginBottom0Rem} size={'s'} level={4}>
                Tips:
            </Title>
            <ul className={marginTop0Rem}>
                <li>Bruk åpne spørsmål med spørreord som hva, hvor, hvordan, hvem eller når.</li>
                <li>Unngå ordet “hvorfor”. Hvorfor kan ofte oppleves som en anklage eller for å fordele
                    skyld.
                </li>
                <li>Tål stillhet slik at medarbeideren får tid til å tenke før svarene kommer.</li>
            </ul>
            <Title className={marginBottom0Rem} size={'s'} level={4}>
                Vanlige tema i samtalen om arbeidssituasjonen:
            </Title>
            <ul className={marginTop0Rem}>
                <li>arbeidsoppgaver</li>
                <li>arbeidstid</li>
                <li>samarbeid</li>
                <li>arbeidsmiljø</li>
                <li>tidligere tiltak</li>
                <li>stillingsprosent</li>
            </ul>

            <Title className={marginBottom0Rem} size={'s'} level={4}>
                Eksempler på spørsmål:
            </Title>
            <p className={marginTop0Rem}>Velg noen av eksemplene som er relevante for akkurat denne samtalen.</p>

            <div className={classNames(graAvrundetBoks, marginBottom2Rem)}>
                <Title className={marginBottom0Rem} size={'s'} level={4}>
                    Arbeidsoppgaver
                </Title>
                <ul>
                    <li>Hvordan vil du beskrive arbeidsdagen din?</li>
                    <li>Hvilke av arbeidsoppgavene dine er du frisk nok til å utføre?</li>
                    <li>Hvilke av arbeidsoppgavene dine er vanskelige å utføre?</li>
                    <li>Hvilke oppgaver trives du best med?</li>
                </ul>
            </div>

            <div className={classNames(graAvrundetBoks, marginBottom2Rem)}>
                <Title size={'s'} level={4}>
                    Arbeidsmiljø
                </Title>
                <ul>
                    <li>Hvordan vil du beskrive arbeidsmiljøet?</li>
                    <li>Hva synes du er positivt, og hva tenker du kan forbedres?</li>
                    <li>Hvordan vil du beskrive stressnivået?</li>
                    <li>Hvordan påvirker arbeidsmiljøet sykefraværet ditt?</li>
                </ul>
            </div>

            <div className={classNames(graAvrundetBoks, marginBottom2Rem)}>
                <Title size={'s'} level={4}>
                    Samarbeid og motivasjon
                </Title>
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