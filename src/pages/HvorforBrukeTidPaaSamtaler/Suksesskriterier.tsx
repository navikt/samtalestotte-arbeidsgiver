import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import Lightbulb from '../../felleskomponenter/Ikoner/Lightbulb';
import {marginBottom0Rem, marginTop0Rem, marginTop1Rem} from '../../utils/fellesStiler';
import { Title } from '@navikt/ds-react';

const Suksesskriterier = (props: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        tittel={'Suksesskriterier'}
        unikId={'suksesskriterier'}
        ikon={<Lightbulb width={"44px"} height={"44px"}/>}
        lestIkon={<Lightbulb width={"44px"} height={"44px"}/>}
        panelLestSituasjon={"ulest"}
    >
        <div className={marginTop1Rem}>
            <ul className={marginTop0Rem}>
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
                <li>
                    Du tør å ta de vanskelige samtalene.
                </li>
            </ul>
            <Title className={marginBottom0Rem} size={'s'} level={4}>
                Kjente fallgruver
            </Title>
            <ul className={marginTop0Rem}>
                <li>
                    Du påtar deg for stort ansvar for helsa til medarbeideren.
                </li>
                <li>
                    Fokuset handler om behandling eller forhold i privatlivet i stedet for forhold på arbeidsplassen.
                </li>
            </ul>
        </div>
    </EkspanderbartInfopanel>;
};

export default Suksesskriterier;