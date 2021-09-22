import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import ChatDoubleBubble from '../../felleskomponenter/Ikoner/ChatDoubleBubble';
import {marginBottom0Rem, marginTop0Rem, marginTop1Rem} from '../../utils/fellesStiler';
import classNames from "classnames";


const NaarKanEnSamtaleVaereAktuelt = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={'naarKanEnsamtaleVaereAktuelt'}
        tittel={'Når kan en samtale være aktuelt?'}
        panelLestSituasjon={'ulest'}
        callBack={callback}
        ikon={<ChatDoubleBubble width={"44px"} height={"44px"}/>}
        lestIkon={<ChatDoubleBubble width={"44px"} height={"44px"}/>}
    >
        <div className={marginTop1Rem}>
        <p className={classNames(marginTop0Rem, marginBottom0Rem)}>
            <strong>En samtale for å forebygge eller følge opp sykefravær handler om arbeidssituasjonen.</strong>
        </p>
        <p className={marginTop0Rem}>
            En samtale bør gjennomføres når
        </p>
        <ul>
            <li>
                Du eller din medarbeider opplever utfordringer med arbeidet og det skyldes sykdom eller andre forhold.
            </li>
            <li>
                Medarbeideren står i fare for å bli sykmeldt.
            </li>
            <li>
                Medarbeideren er sykmeldt.
            </li>
            <li>
                Medarbeideren har vært sykmeldt.
            </li>

        </ul>
        </div>
    </EkspanderbartInfopanel>;
};

export default NaarKanEnSamtaleVaereAktuelt;
