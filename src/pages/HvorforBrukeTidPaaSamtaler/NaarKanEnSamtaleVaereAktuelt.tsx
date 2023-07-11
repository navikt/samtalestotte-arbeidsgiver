import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import ChatDoubleBubble from '../../felleskomponenter/Ikoner/ChatDoubleBubble';
import fellesStiler from '../../utils/fellesStiler.module.css';
import classNames from 'classnames';
import { Liste } from '../../Liste/Liste';

const NaarKanEnSamtaleVaereAktuelt = (props: InfoPanelProps) => {
    return (
        <EkspanderbartInfopanel
            unikId={'naarKanEnsamtaleVaereAktuelt'}
            tittel={'Når kan en samtale være aktuelt?'}
            panelLestSituasjon={'ulest'}
        >
            <div className={fellesStiler.marginTop1Rem}>
                <p
                    className={classNames(
                        fellesStiler.marginTop0Rem,
                        fellesStiler.marginBottom0Rem
                    )}
                >
                    <strong>
                        En samtale for å forebygge eller følge opp sykefravær handler om
                        arbeidssituasjonen.
                    </strong>
                </p>
                <p className={fellesStiler.marginTop1Rem}>En samtale bør gjennomføres når</p>
                <Liste>
                    <Liste.Element>
                        Du eller din medarbeider opplever utfordringer med arbeidet og det skyldes
                        sykdom eller andre forhold.
                    </Liste.Element>
                    <Liste.Element>Medarbeideren står i fare for å bli sykmeldt.</Liste.Element>
                    <Liste.Element>Medarbeideren er sykmeldt.</Liste.Element>
                    <Liste.Element>Medarbeideren har vært sykmeldt.</Liste.Element>
                </Liste>
            </div>
        </EkspanderbartInfopanel>
    );
};

export default NaarKanEnSamtaleVaereAktuelt;
