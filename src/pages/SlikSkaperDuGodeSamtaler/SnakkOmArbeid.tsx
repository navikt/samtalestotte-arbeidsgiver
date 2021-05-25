import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';

const SnakkOmArbeid = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"snakkOmArbeid"}
        tittel={"Snakk om arbeid"}
        panelLestSituasjon={"ulest"}
        callBack={callback}>
        <h3>
            En samtale for å forebygge eller følge opp sykefravær handler om medarbeideren.
        </h3>
        <p>
            Din oppgave er å legge til rette for at medarbeideren kan beskrive hvordan arbeidsoppgavene
            og arbeidsdagen oppleves.
        </p>

        <strong>Tips:</strong>
        <ul>
            <li>Bruk åpne spørsmål med spørreord som hva, hvor, hvordan, hvem eller når.</li>
            <li>Unngå ordet “hvorfor”. Hvorfor kan ofte oppleves som en anklage eller for å fordele
                skyld.
            </li>
            <li>Tål stillhet slik at medarbeideren får tid til å tenke før de må svare.</li>
        </ul>

        <strong>Vanlige tema i samtalen om arbeidssituasjonen:</strong>
        <ul>
            <li>arbeidsoppgaver</li>
            <li>arbeidstid</li>
            <li>samarbeid</li>
            <li>arbeidsmiljø</li>
            <li>tidligere tiltak</li>
        </ul>

        <strong>Eksempler på spørsmål:</strong>
        <p>Velg noen av eksemplene som er relevante for akkurat denne samtalen.</p>

        <div className={"gra-avrundet-boks margin-bunn-2em "}>
            <strong>Arbeidsoppgaver</strong>
            <ul>
                <li>Hvordan vil du beskrive arbeidsdagen din?</li>
                <li>Hvilke av arbeidsoppgavene dine kan du fortsatt utføre?</li>
                <li>Hvilke av arbeidsoppgavene dine er vanskelige å utføre?</li>
            </ul>
        </div>

        <div className={"gra-avrundet-boks margin-bunn-2em "}>
            <strong>Arbeidsmiljø</strong>
            <ul>
                <li>Hvordan vil du beskrive arbeidsmiljøet?</li>
                <li>Hva synes du er positivt, og hva tenker du kan forbedres?</li>
                <li>Hvordan vil du beskrive stressnivået?</li>
                <li>Hvordan påvirker arbeidsmiljøet sykefraværet ditt?</li>
            </ul>
        </div>

        <div className={"gra-avrundet-boks margin-bunn-2em "}>
            <strong>Samarbeid og motivasjon</strong>
            <ul>
                <li>Hvordan opplever du samarbeidet med kolleger/ledere?</li>
                <li>Hva motiverer deg mest akkurat nå?</li>
                <li>Hva oppfatter du som dine styrker nå?</li>
            </ul>
        </div>
    </EkspanderbartInfopanel>
};

export default SnakkOmArbeid;