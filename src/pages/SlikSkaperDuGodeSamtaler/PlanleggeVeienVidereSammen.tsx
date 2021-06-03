import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanelV2';
import './PlanleggeVeienVidereSammen.less';
import LoggbarLenke from '../../felleskomponenter/LoggbarLenke/LoggbarLenke';
import { OPPFOLGNINGSPLAN } from '../../resources/urls';

const PlanleggeVeienVidereSammen = ({ callback }: InfoPanelProps) => {
    return (
        <EkspanderbartInfopanel
            unikId={'planleggeVeienVidereSammen'}
            tittel={'Planlegge veien videre sammen'}
            panelLestSituasjon={'ulest'}
            callBack={callback}
        >
            <h3 className={'sub-section-header planlegg-veien-videre-sammen-no-margin-bottom'}>
                Oppsummer i felleskap
            </h3>
            <p className={'planlegg-veien-videre-sammen-no-margin-top'}>
                En samtale om arbeidssituasjonen avsluttes med at du og medarbeideren oppsummerer
                det dere er blitt enige om og at dere lager en plan for videre oppfølging.
            </p>

            <strong>Tips:</strong>
            <p className={'planlegg-veien-videre-sammen-no-margin-top'}>
                Det er lurt med flere korte oppsummeringer til hvert punkt dere har avtalt. Bruk
                spørsmål som kan besvares med ja eller nei for å sjekke at dere har felles
                forståelse.
            </p>
            <p className={'planlegg-veien-videre-sammen-no-margin-bottom'}>
                Dersom medarbeideren er sykmeldt er det pålagt å utarbeide en oppfølgingsplan.
            </p>
            <p className={'planlegg-veien-videre-sammen-no-margin-top'}>
                <LoggbarLenke href={OPPFOLGNINGSPLAN}>
                    Les mer om oppfølgingsplan på nav.no.
                </LoggbarLenke>
            </p>
            <strong>Vanlige tema i avslutningen:</strong>
            <ul className={'planlegg-veien-videre-sammen-no-margin-top'}>
                <li className={'margin-bunn-2rem'}>
                    dato for neste samtale og hvor ofte samtaler skal gjennomføres
                </li>

                <li>avtaler, tilrettelegginger og tiltak</li>
                <li>om tilretteleggingen er midlertidig eller permanent</li>
                <li>hvor lenge de midlertidige tiltakene varer og tidsfrister</li>
                <li className={'margin-bunn-2rem'}>
                    avklare om det er behov for å informere andre kollegaer om tilrettelegging som
                    er avtalt
                </li>

                <li>hvem som er ansvarlig for å følge opp</li>
                <li>om det er behov for videre avklaring eller hjelp fra andre</li>
            </ul>
            <p>
                Av og til blir du og medarbeideren ikke enige om løsningene og det er greit. Da
                dokumenterer du begges synspunkter i oppsummeringen eller oppfølgingsplanen.
            </p>
            <p>
                <strong>Tips:</strong> gjennomfør flere samtaler regelmessig.
            </p>
        </EkspanderbartInfopanel>
    );
};

export default PlanleggeVeienVidereSammen;