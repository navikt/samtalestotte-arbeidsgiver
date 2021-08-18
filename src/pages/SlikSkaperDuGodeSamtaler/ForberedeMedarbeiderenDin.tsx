import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
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
                <LoggbarLenke href={ENKLE_TIPS_FOR_DIGITALE_SAMTALER}>Les mer om “Enkle tips for digitale samtaler” lengre ned på siden.</LoggbarLenke>
            </li>
            <li>
                Gjør medarbeideren kjent med mål og tema for møtet på forhånd. Når begge er forberedt,
                blir det enklere å finne løsninger sammen.
            </li>
            <li>
                Du kan sende tema eller spørsmål til medarbeideren på forhånd.
            </li>
            <li>
                <LoggbarLenke href={GJENNOMFOR_SAMTALEN}>
                    Velg noen av de viktigste fra eksemplene under “Gjennomfør samtalen ved å” lengre ned på siden.
                </LoggbarLenke>
            </li>
        </ul>
    </EkspanderbartInfopanel>;
};

export default ForberedeMedarbeiderenDin;