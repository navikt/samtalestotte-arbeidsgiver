import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import LoggbarLenke from '../../felleskomponenter/LoggbarLenke/LoggbarLenke';
import { OPPFOLGNINGSPLAN } from '../../resources/urls';
import { Heading } from '@navikt/ds-react';
import {marginBottom0Rem, marginBottom3Rem, marginTop0Rem, marginTop1Rem} from '../../utils/fellesStiler';
import classNames from 'classnames';

const PlanleggeVeienVidereSammen = ({ callback }: InfoPanelProps) => {
    return (
        <EkspanderbartInfopanel
            unikId={'planleggeVeienVidereSammen'}
            tittel={'Planlegge veien videre sammen'}
            panelLestSituasjon={'ulest'}
            callBack={callback}
        >
            <div className={marginTop1Rem}>
                <Heading className={marginBottom0Rem} size={'medium'} level={'3'}>
                    Oppsummer i felleskap.
                </Heading>
                <p className={marginTop0Rem}>
                    En samtale om arbeidssituasjonen avsluttes med at du og medarbeideren oppsummerer
                    det dere er blitt enige om og at dere lager en plan for videre oppfølging.
                </p>
                <Heading className={marginBottom0Rem} size={'small'} level={'4'}>
                    Tips:
                </Heading>
                <p className={marginTop0Rem}>
                    Det er lurt med flere korte oppsummeringer til hvert punkt dere har avtalt. Bruk
                    spørsmål som kan besvares med ja eller nei for å sjekke at dere har felles
                    forståelse.
                </p>
                <p className={marginBottom0Rem}>
                    Dersom medarbeideren er sykmeldt er det pålagt å utarbeide en oppfølgingsplan.
                </p>
                <p className={marginTop0Rem}>
                    <LoggbarLenke href={OPPFOLGNINGSPLAN}>
                        Les mer om oppfølgingsplan på nav.no.
                    </LoggbarLenke>
                </p>
                <Heading className={marginBottom0Rem} size={'small'} level={'4'}>
                    Vanlige tema i avslutningen:
                </Heading>
                <ul className={classNames(marginTop0Rem, marginBottom3Rem)}>
                    <li>dato for neste samtale og hvor ofte samtaler skal gjennomføres</li>
                    <li>avtaler, tilrettelegginger og tiltak</li>
                    <li>om tilretteleggingen er midlertidig eller permanent</li>
                    <li>hvor lenge de midlertidige tiltakene varer og tidsfrister</li>
                    <li>avklare om det er behov for å informere andre kollegaer om tilrettelegging som er avtalt</li>
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
            </div>
        </EkspanderbartInfopanel>
    );
};

export default PlanleggeVeienVidereSammen;