import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import ChatDoubleBubble from '../../felleskomponenter/Ikoner/ChatDoubleBubble';
import fellesStiler from '../../utils/fellesStiler.module.css';
import classNames from "classnames";


const NaarKanEnSamtaleVaereAktuelt = (props: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={'naarKanEnsamtaleVaereAktuelt'}
        tittel={'Når kan en samtale være aktuelt?'}
        panelLestSituasjon={'ulest'}
        ikon={<ChatDoubleBubble width={"44px"} height={"44px"}/>}
        lestIkon={<ChatDoubleBubble width={"44px"} height={"44px"}/>}
    >
        <div className={fellesStiler.marginTop1Rem}>
        <p className={classNames(fellesStiler.marginTop0Rem, fellesStiler.marginBottom0Rem)}>
            <strong>En samtale for å forebygge eller følge opp sykefravær handler om arbeidssituasjonen.</strong>
        </p>
        <p className={fellesStiler.marginTop0Rem}>
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
