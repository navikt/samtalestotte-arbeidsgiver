import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
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
        <h4 className={'margin-bunn-0rem'}>Tips:</h4>
        <p className={"finn-losninger-sammen-paragraf"}>
            Snakk om det som skal skje framover i tid og på hvilke muligheter som finnes.
        </p>
        <h4 className={'margin-bunn-0rem'}>Vanlige tema når dere finner løsninger sammen:</h4>
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

        <h4 className={'margin-bunn-0rem'}>Eksempler på spørsmål:</h4>
        <p className={"finn-losninger-sammen-paragraf"}>
            Velg noen av eksemplene som er relevante for akkurat denne samtalen.
        </p>
        <div className={"gra-avrundet-boks margin-bunn-2rem"}>
            <h4>Hvordan kan jeg som leder hjelpe deg?</h4>
            <ul>
                <li>Hva ville være god og støttende hjelp for deg i en travel arbeidsdag?</li>
                <li>Hva vil du oppleve som god støtte?</li>

                <li>Hva kan jeg som leder hjelpe deg med, når det gjelder arbeidsoppgaver?</li>
                <li>Hvordan kan jeg som leder hjelpe deg med å få en mindre stressende arbeidsdag?</li>
            </ul>
        </div>
        <div className={"gra-avrundet-boks"}>
            <h4>Løsninger</h4>
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