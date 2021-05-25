import InfoPanelProps from '../InfoPanelProps';
import { EkspanderbartInfopanel } from '../../EkspanderbartInfopanel/EkspanderbartInfopanel';

const ForberedMedarbeiderenDin = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"forberedMedarbeiderenDin"}
        tittel={"Forbered medarbeideren din"}
        panelLestSituasjon={"ulest"}
        callBack={callback}>
        <ul>
            <li>
                Avtal tid og sted som passer deg og medarbeideren.
            </li>
            <li>
                Samtalen kan gjennomføres digitalt eller utenfor arbeidsplassen hvis det passer best.
            </li>
            <li>
                Les mer om “Enkle tips for digitale samtaler” lengre ned på siden.
            </li>
            <li>
                Gjør medarbeideren kjent med mål og tema for møtet på forhånd. Når begge er forberedt,
                blir det enklere å finne løsninger sammen.
            </li>
            <li>
                Du kan sende tema eller spørsmål til medarbeideren på forhånd.
            </li>
            <li>
                Velg noen av de viktigste fra eksemplene under “gjennomføring av samtalen” lenger ned på
                siden.
            </li>
        </ul>
    </EkspanderbartInfopanel>;
};

export default ForberedMedarbeiderenDin;