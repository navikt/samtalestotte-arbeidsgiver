import InfoPanelProps from '../InfoPanelProps';
import { EkspanderbartInfopanel } from '../../EkspanderbartInfopanel/EkspanderbartInfopanel';

const Suksesskriterier = ({callback, ikon, lestIkon}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        tittel={'Suksesskriterier'}
        unikId={'suksesskriterier'}
        callBack={callback}
        ikon={ikon}
        lestIkon={lestIkon}
        panelLestSituasjon={"ulest"}
    >
        <ul>
            <li>
                Gjennomfør samtalen tidlig.
            </li>
            <li>
                Snakk om arbeidsoppgaver og muligheter på arbeidsplassen, ikke diagnose.
            </li>
            <li>
                Lytt til medarbeideren, gi muligheter til å fortelle og bidra med løsninger.
            </li>
            <li>
                Gjennomfør samtaler regelmessig.
            </li>
            <li>
                Jobb kontinuerlig med relasjoner til alle medarbeidere og forutsigbarhet gjennom
                rutiner.
            </li>
        </ul>
        <strong>
            Kjente fallgruver
        </strong>
        <ul>
            <li>
                Du påtar deg for stort ansvar for helsa til medarbeideren.
            </li>
            <li>
                Fokuset handler om behandling eller forhold i privatlivet i stedet for forhold på
                arbeidsplassen.
            </li>
        </ul>
    </EkspanderbartInfopanel>;
};

export default Suksesskriterier;