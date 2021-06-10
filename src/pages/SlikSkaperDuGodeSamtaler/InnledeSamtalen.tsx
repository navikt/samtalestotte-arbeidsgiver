import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import "./InnledeSamtalen.less";

const InnledeSamtalen = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"innledeSamtalen"}
        tittel={"Innlede samtalen"}
        panelLestSituasjon={"ulest"}
        callBack={callback}>
        <h3 className={"sub-section-header innled-samtalen-header"}>
            Innlede samtalen.
        </h3>
        <p className={"innled-samtalen-paragraf"}>
            Å innlede en samtale handler om å skape trygghet, sette rammer og klargjøre mål og hensikt.
            Rammene hjelper dere med å holde fokus og tid.
        </p>
        <h4 className={"innled-samtalen-h4"}>
            Vanlige tema i innledning:
        </h4>
        <ul className={"innled-samtalen-liste"}>
            <li>
                ønske velkommen
            </li>
            <li>
                informere om tidsrammene for møtet
            </li>
            <li>
                informere om målet med møtet
            </li>
            <li>
                gå igjennom agenda
            </li>
            <li>
                spørre om medarbeideren har innspill til mål og agenda
            </li>
        </ul>
    </EkspanderbartInfopanel>
};

export default InnledeSamtalen;