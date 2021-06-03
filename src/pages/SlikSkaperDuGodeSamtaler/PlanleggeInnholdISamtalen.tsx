import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanelV2';
import LoggbarLenke from '../../felleskomponenter/LoggbarLenke/LoggbarLenke';
import { GJENNOMFOR_SAMTALEN } from '../../resources/urls';

const PlanleggeInnholdISamtalen = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"planleggeInnholdISamtalen"}
        tittel={"Planlegge innhold i samtalen"}
        panelLestSituasjon={"ulest"}
        callBack={callback}>
        <p>
            Legg en plan for hva du ønsker å oppnå og hvordan du kan gjennomføre samtalen. Husk å lytte
            til medarbeiderens behov.
        </p>
        <ul className={"alternatingDiscList"}>
            <li>
                <strong>
                    Hva er dine mål med samtalen?
                </strong>
            </li>
            <li>
                Noter ned målet, og ha det framme når du er i samtalen.
            </li>
            <li>
                <strong>
                    Hvor trygg er du når du skal strukturere samtalen?
                </strong>
            </li>
            <li>
                Velg tema og hjelpespørsmål under <LoggbarLenke href={GJENNOMFOR_SAMTALEN}>“gjennomføring av samtalen”</LoggbarLenke> lengre ned på siden.
            </li>
        </ul>
        <p>
            Hvis du skal ta opp et tema du synes er vanskelig, bør du bør være konkret og tydelig på
            dine observasjoner.
            Du kan fortelle hvordan du tolker observasjonene, og gi medarbeideren anledning til å
            korrigere.
        </p>
        <ul className={"alternatingDiscList"}>
            <li>
                <strong>
                    Hva har du observert?
                </strong>
            </li>
            <li>
                Eksempler kan være endring i fravær, i atferd eller i hvordan arbeidsoppgavene blir
                utført. Husk å gi konkrete eksempler på det medarbeideren er god på også.
                Noter gjerne ned og ta med i samtalen.
            </li>
        </ul>
    </EkspanderbartInfopanel>
};

export default PlanleggeInnholdISamtalen;