import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanelV2';
import LoggbarLenke from '../../felleskomponenter/LoggbarLenke/LoggbarLenke';
import { ENKLE_TIPS_FOR_DIGITALE_SAMTALER, GJENNOMFOR_SAMTALEN } from '../../resources/urls';

const ForberedeMedarbeiderenDin = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"forberedeMedarbeiderenDin"}
        tittel={"Forberede medarbeideren din"}
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
                Les mer om <LoggbarLenke href={ENKLE_TIPS_FOR_DIGITALE_SAMTALER}>“Enkle tips for digitale samtaler”</LoggbarLenke> lengre ned på siden.
            </li>
            <li>
                Gjør medarbeideren kjent med mål og tema for møtet på forhånd. Når begge er forberedt,
                blir det enklere å finne løsninger sammen.
            </li>
            <li>
                Du kan sende tema eller spørsmål til medarbeideren på forhånd.
            </li>
            <li>
                Velg noen av de viktigste fra eksemplene under <LoggbarLenke href={GJENNOMFOR_SAMTALEN}>“gjennomføring av samtalen”</LoggbarLenke> lengre ned på
                siden.
            </li>
        </ul>
    </EkspanderbartInfopanel>;
};

export default ForberedeMedarbeiderenDin;