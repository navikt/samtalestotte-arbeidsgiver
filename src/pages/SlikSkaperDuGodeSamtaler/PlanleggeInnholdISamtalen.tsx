import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import LoggbarLenke from '../../felleskomponenter/LoggbarLenke/LoggbarLenke';
import { GJENNOMFOR_SAMTALEN } from '../../resources/urls';
import {alternatingDiscList, marginBottom1Rem, marginBottom2Rem} from '../../utils/fellesStiler';
import {css} from "linaria";
import classNames from "classnames";

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
        <ul className={classNames(onlyFirstDiscList, inlineList, marginBottom2Rem)}>
            <li>
                <strong>
                    Hva er dine mål med samtalen?
                </strong>
            </li>
            <li>
                Noter ned målet, og ha det framme når du er i samtalen.
            </li>
            <li>
                Noen eksempler på mål kan være:
            </li>
            <li>
                <ul>
                    <li>Skape trygghet og tillit</li>
                    <li>Beholde kontakt</li>
                    <li>Planlegge drift</li>
                    <li>Avklare om målet er å komme tilbake helt eller delvis til egen stilling</li>
                    <li>Starte en dialog om tilrettelegging</li>
                    <li>Avklare om det er behov for ny, endret eller mer kompetanse hos medarbeieren</li>

                </ul>
            </li>
        </ul>

        <ul className={classNames(onlyFirstDiscList, inlineList, marginBottom2Rem)}>
            <li>
                <strong>
                    Hvor trygg er du når du skal strukturere samtalen?
                </strong>
            </li>
            <li>
                <LoggbarLenke href={GJENNOMFOR_SAMTALEN}>
                    Velg tema og hjelpespørsmål under “Gjennomfør samtalen ved å”
                </LoggbarLenke>
                {" "}lenger ned på siden.
            </li>
        </ul>

        <ul className={classNames(onlyFirstDiscList, inlineList)}>
            <li>
                <strong>
                    Hva har du observert?
                </strong>
            </li>
            <li>
                Hvis du skal ta opp et tema du synes er vanskelig, bør du bør være konkret og tydelig på dine observasjoner.
            </li>
            <li>
                Eksempler på observasjoner <strong>kan</strong> være:
            </li>
            <li>
                <ul className={marginBottom2Rem}>
                    <li>
                        Endringer i utførelsen av arbeidsoppgaver
                    </li>
                    <li>
                        Endring i atferd
                    </li>
                    <li>
                        Økning, endring eller mønster i fravær
                    </li>
                </ul>
            </li>
            <li>
                Husk å gi konkrete eksempler på det medarbeideren er god på også.
            </li>
            <li>
                Noter  gjerne ned og ta med i samtalen.
            </li>
            <li>
                Du kan fortelle hvordan du tolker observasjonene, og gi medarbeideren anledning til å korrigere.
            </li>
        </ul>
    </EkspanderbartInfopanel>
};

const onlyFirstDiscList = css`
  li {
    list-style-type: none;
  }
  li ul li {
    list-style-type: disc;
  }
  li:first-child{
    list-style-type: disc;
  }
`;

const inlineList = css`
  padding-left: 20px;
`

export default PlanleggeInnholdISamtalen;