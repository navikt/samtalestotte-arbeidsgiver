import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import "./SnakkeOmArbeid.less";

const SnakkeOmArbeid = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"snakkeOmArbeid"}
        tittel={"Snakke om arbeid"}
        panelLestSituasjon={"ulest"}
        callBack={callback}>
        <h3 className={"sub-section-header snakk-om-arbeid-header"}>
            En samtale for å forebygge eller følge opp sykefravær handler om medarbeideren.
        </h3>
        <p className={"snakk-om-arbeid-paragraf"}>
            Din oppgave er å legge til rette for at medarbeideren kan beskrive hvordan arbeidsoppgavene
            og arbeidsdagen oppleves.
        </p>

        <h4 className={'margin-bunn-0rem'}>Tips:</h4>
        <ul className={"snakk-om-arbeid-liste"}>
            <li>Bruk åpne spørsmål med spørreord som hva, hvor, hvordan, hvem eller når.</li>
            <li>Unngå ordet “hvorfor”. Hvorfor kan ofte oppleves som en anklage eller for å fordele
                skyld.
            </li>
            <li>Tål stillhet slik at medarbeideren får tid til å tenke før svarene kommer.</li>
        </ul>

        <h4 className={'margin-bunn-0rem'}>Vanlige tema i samtalen om arbeidssituasjonen:</h4>
        <ul className={"snakk-om-arbeid-liste"}>
            <li>arbeidsoppgaver</li>
            <li>arbeidstid</li>
            <li>samarbeid</li>
            <li>arbeidsmiljø</li>
            <li>tidligere tiltak</li>
        </ul>

        <h4 className={'margin-bunn-0rem'}>Eksempler på spørsmål:</h4>
        <p className={"snakk-om-arbeid-paragraf"}>Velg noen av eksemplene som er relevante for akkurat denne samtalen.</p>

        <div className={"gra-avrundet-boks margin-bunn-2rem "}>
            <h4>Arbeidsoppgaver</h4>
            <ul>
                <li>Hvordan vil du beskrive arbeidsdagen din?</li>
                <li>Hvilke av arbeidsoppgavene dine kan du fortsatt utføre?</li>
                <li>Hvilke av arbeidsoppgavene dine er vanskelige å utføre?</li>
            </ul>
        </div>

        <div className={"gra-avrundet-boks margin-bunn-2rem "}>
            <h4>Arbeidsmiljø</h4>
            <ul>
                <li>Hvordan vil du beskrive arbeidsmiljøet?</li>
                <li>Hva synes du er positivt, og hva tenker du kan forbedres?</li>
                <li>Hvordan vil du beskrive stressnivået?</li>
                <li>Hvordan påvirker arbeidsmiljøet sykefraværet ditt?</li>
            </ul>
        </div>

        <div className={"gra-avrundet-boks margin-bunn-2rem "}>
            <h4>Samarbeid og motivasjon</h4>
            <ul>
                <li>Hvordan opplever du samarbeidet med kolleger/ledere?</li>
                <li>Hva motiverer deg mest akkurat nå?</li>
                <li>Hva oppfatter du som dine styrker nå?</li>
            </ul>
        </div>
    </EkspanderbartInfopanel>
};

export default SnakkeOmArbeid;