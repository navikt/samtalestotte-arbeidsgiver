import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanelV2';
import "./FinneLosningerSammen.less"

const FinneLosningerSammen = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"finneLøsningerSammen"}
        tittel={"Finne løsninger sammen"}
        panelLestSituasjon={"ulest"}
        callBack={callback}>
        <h3 className={"sub-section-header finn-losninger-sammen-header"}>
            Hjelp medarbeideren med å finne løsninger.
        </h3>
        <p className={"finn-losninger-sammen-paragraf"}>
            Hvis medarbeideren beskriver arbeidsoppgaver og arbeidssituasjon først,
            kan det bli enklere å se løsningsforslag selv.
            Egne løsningsforslag gir ofte økt motivasjon ved gjennomføring.
        </p>
        <strong>Tips:</strong>
        <p className={"finn-losninger-sammen-paragraf"}>
            Snakk om det som skal skje framover i tid og på hvilke muligheter som finnes.
        </p>
        <strong>Vanlige tema når dere finner løsninger sammen:</strong>
        <ul className={"finn-losninger-sammen-liste"}>
            <li>tilpasse arbeidsoppgaver eller arbeidsinnhold</li>
            <li>tilpasse arbeidstid, arbeidstempo eller tidskrav</li>
            <li>tilpasse organisering av arbeidet</li>
            <li>tilpasse samarbeid og samhandling med andre</li>
            <li className={"margin-bunn-2rem"}>alternative arbeidsoppgaver</li>
            <li>behov for informasjon og tilbakemeldinger</li>
            <li>arbeidsmiljø</li>
            <li className={"margin-bunn-2rem"}>kompetanse</li>
            <li>fysisk utforming av arbeidsplassen</li>
            <li>hjelpemidler</li>
            <li>andre forhold</li>
        </ul>

        <strong>Eksempler på spørsmål:</strong>
        <p className={"finn-losninger-sammen-paragraf"}>
            Velg noen av eksemplene som er relevante for akkurat denne samtalen.
        </p>
        <div className={"gra-avrundet-boks margin-bunn-2rem"}>
            <strong>Hvordan kan jeg som leder hjelpe deg?</strong>
            <ul>
                <li>Hva ville være god og støttende hjelp for deg i en travel arbeidsdag?</li>
                <li className={"margin-bunn-2rem"}>Hva vil du oppleve som god støtte?</li>

                <li>Hva kan jeg som leder hjelpe deg med, når det gjelder arbeidsoppgaver?</li>
                <li>Hvordan kan jeg som leder hjelpe deg med å få en mindre stressende arbeidsdag?</li>
            </ul>
        </div>
        <div className={"gra-avrundet-boks"}>
            <strong>Løsninger</strong>
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
    </EkspanderbartInfopanel>
};

export default FinneLosningerSammen;