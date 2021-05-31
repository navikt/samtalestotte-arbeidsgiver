import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanelV2';

const EnkleTipsForDigitaleSamtaler = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"enkleTipsForDigitaleSamtaler"}
        tittel={"Enkle tips for digitale samtaler"}
        panelLestSituasjon={"ulest"}
        callBack={callback}
    >
        <ul>
            <li>Husk forberedelse og struktur også i digitale samtaler.</li>
            <li>Bli enige om tittel på avtalen når du bruker digital innkalling og digitale møterom.
            </li>
            <li>La kamera være på.</li>
            <li>Det er bedre med flere korte, enn en lang digital samtale.</li>
            <li>Digitale samtaler trenger trygghet og gode relasjoner.</li>
            <li>Gi medarbeideren rom til å fortelle, tål pauser og stillhet.</li>
            <li>Bruk sikre digitale verktøy for å ivareta personvern og taushetsplikt</li>
            <li>Hvis dere har mulighet, kan dere skrive referat eller oppfølgingsplan sammen og
                underveis i samtalen.
            </li>
        </ul>
    </EkspanderbartInfopanel>;
};

export default EnkleTipsForDigitaleSamtaler;