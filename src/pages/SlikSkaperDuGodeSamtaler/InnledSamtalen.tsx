import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanelV2';

const InnledSamtalen = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"innledSamtalen"}
        tittel={"Innled samtalen"}
        panelLestSituasjon={"ulest"}
        callBack={callback}>
        <h3>
            Innled samtalen
        </h3>
        <p>
            Å innlede en samtale handler om å skape trygghet, sette rammer og klargjøre mål og hensikt.
            Rammene hjelper dere med å holde fokus og tid.
        </p>
        <strong>
            Vanlige tema i innledning:
        </strong>
        <ul>
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

export default InnledSamtalen;