import { EkspanderbartInfopanel } from '../../EkspanderbartInfopanel/EkspanderbartInfopanel';
import InfoPanelProps from '../InfoPanelProps';


const NaarKanEnSamtaleVaereAktuelt = ({callback, ikon, lestIkon}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={'naarKanEnsamtaleVaereAktuelt'}
        tittel={'Når kan en samtale være aktuelt?'}
        panelLestSituasjon={'ulest'}
        callBack={callback}
        ikon={ikon}
        lestIkon={lestIkon}
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
