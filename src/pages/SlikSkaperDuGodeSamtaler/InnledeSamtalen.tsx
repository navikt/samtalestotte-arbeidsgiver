import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import { Title } from '@navikt/ds-react';
import { marginBottom0Rem, marginTop0Rem } from '../../utils/styleTemplates';

const InnledeSamtalen = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"innledeSamtalen"}
        tittel={"Innlede samtalen"}
        panelLestSituasjon={"ulest"}
        callBack={callback}>
        <Title className={marginBottom0Rem} size={'m'} level={3}>
            Innlede samtalen.
        </Title>
        <p className={marginTop0Rem}>
            Å innlede en samtale handler om å skape trygghet, sette rammer og klargjøre mål og hensikt.
            Rammene hjelper dere med å holde fokus og tid.
        </p>
        <Title className={marginBottom0Rem} size={'s'} level={4}>

        </Title>
        <ul className={marginTop0Rem}>
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