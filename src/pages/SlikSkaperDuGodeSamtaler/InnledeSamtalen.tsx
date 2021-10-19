import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import {Title, BodyLong, Label} from '@navikt/ds-react';
import {
    marginBottom025rem,
    marginTop0Rem,
    marginTop1Rem,
    marginTop2Rem
} from '../../utils/fellesStiler';
import classNames from "classnames";

const InnledeSamtalen = (props: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"innledeSamtalen"}
        tittel={"Innlede samtalen"}
        panelLestSituasjon={"ulest"}
    >
        <div className={marginTop1Rem}>
            <BodyLong className={marginTop0Rem}>
                Å innlede en samtale handler om å skape trygghet, sette rammer og klargjøre mål og hensikt.
                Rammene hjelper dere med å holde fokus og tid.
            </BodyLong>
            <Label className={classNames(marginTop2Rem, marginBottom025rem)} size={'m'}>
                Vanlige tema i innledning:
            </Label>
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
        </div>
    </EkspanderbartInfopanel>
};

export default InnledeSamtalen;