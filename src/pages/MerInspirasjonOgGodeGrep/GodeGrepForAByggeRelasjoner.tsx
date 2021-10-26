import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import {marginTop0Rem, marginTop1Rem} from "../../utils/fellesStiler";

const GodeGrepForAByggeRelasjoner = (props: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"godeGrepForAByggeRelasjoner"}
        tittel={"Gode grep for å bygge relasjoner"}
        panelLestSituasjon={"ulest"}
    >
        <div className={marginTop1Rem}>
            <ul className={marginTop0Rem}>
                <li>Bruk tid på å bli kjent med alle dine medarbeidere.</li>
                <li>Er det sider ved deg selv du bør styrke eller dempe i møte med medarbeideren?</li>
                <li>Vær forutsigbar.</li>
                <li>Vis at du har tillit til medarbeideren.</li>
                <li>Vær en støttende og tydelig leder.</li>
                <li>Hvordan opplevdes samtalen for medarbeider? Be om ærlig tilbakemeldinger.</li>
            </ul>
        </div>
    </EkspanderbartInfopanel>;
};

export default GodeGrepForAByggeRelasjoner;