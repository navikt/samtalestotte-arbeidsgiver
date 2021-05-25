import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';

const GodeGrepForAByggeRelasjoner = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"godeGrepForAByggeRelasjoner"}
        tittel={"Gode grep for å bygge relasjoner"}
        panelLestSituasjon={"ulest"}
        callBack={callback}
    >
        <ul>
            <li>Bruk tid på å bli kjent med alle dine medarbeidere.</li>
            <li>Hvem er du i møte med den enkelte medarbeideren?</li>
            <li>Hva slags relasjon har dere?</li>
            <li>Vær forutsigbar.</li>
            <li>Vis at du har tillit til medarbeideren.</li>
            <li>Vær en støttende leder.</li>
            <li>Be om tilbakemelding slik at du kan lære og utvikle deg som leder.</li>
        </ul>
    </EkspanderbartInfopanel>;
};

export default GodeGrepForAByggeRelasjoner;