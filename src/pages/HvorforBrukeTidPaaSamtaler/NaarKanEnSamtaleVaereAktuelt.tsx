import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanelV2';
import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import ChatDoubleBubble from '../../felleskomponenter/Ikoner/ChatDoubleBubble';


const NaarKanEnSamtaleVaereAktuelt = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={'naarKanEnsamtaleVaereAktuelt'}
        tittel={'Når kan en samtale være aktuelt?'}
        panelLestSituasjon={'ulest'}
        callBack={callback}
        ikon={<ChatDoubleBubble width={"3rem"} height={"3rem"}/>}
        lestIkon={<ChatDoubleBubble width={"3rem"} height={"3rem"}/>}
    >
        <p>
            En samtale for å forebygge eller følge opp sykefravær handler om arbeidssituasjonen.
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
    </EkspanderbartInfopanel>;
};

export default NaarKanEnSamtaleVaereAktuelt;
