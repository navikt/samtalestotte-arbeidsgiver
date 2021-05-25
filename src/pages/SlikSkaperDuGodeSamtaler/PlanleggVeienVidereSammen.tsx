import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';

const PlanleggVeienVidereSammen = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"planleggVeienVidereSammen"}
        tittel={"Planlegg veien videre sammen"}
        panelLestSituasjon={"ulest"}
        callBack={callback}
    >
        <h3>Oppsummer i felleskap</h3>
        <p>
            En samtale om arbeidssituasjonen avsluttes med at du og medarbeideren oppsummerer det dere
            er blitt enige om og at dere lager en plan for videre oppfølging.
        </p>

        <strong>Tips:</strong>
        <p>
            Det er lurt med flere korte oppsummeringer til hvert punkt dere har avtalt. Bruk spørsmål
            som kan besvares med ja eller nei for å sjekke at dere har felles forståelse.
        </p>
        <p>
            Dersom medarbeideren er sykmeldt er det pålagt å utarbeide en oppfølgingsplan.
        </p>
        <p>
            <a href={"#"}>Les mer om oppfølgingsplan på nav.no.</a>
        </p>
        <strong>Vanlige tema i avslutningen:</strong>
        <ul>
            <li className={"margin-bunn-2em"}>dato for neste samtale og hvor ofte samtaler skal
                gjennomføres
            </li>

            <li>avtaler, tilrettelegginger og tiltak</li>
            <li>om tilretteleggingen er midlertidig eller permanent</li>
            <li>hvor lenge de midlertidige tiltakene varer og tidsfrister</li>
            <li className={"margin-bunn-2em"}>avklare om det er behov for å informere andre kollegaer om
                tilrettelegging som er avtalt
            </li>

            <li>hvem som er ansvarlig for å følge opp</li>
            <li>om det er behov for videre avklaring eller hjelp fra andre</li>
        </ul>
        <p>
            Av og til blir du og medarbeideren ikke enige om løsningene og det er greit. Da dokumenterer
            du begges synspunkter i oppsummeringen eller oppfølgingsplanen.
        </p>
        <p>
            <strong>Tips:</strong> gjennomfør flere samtaler regelmessig.
        </p>
    </EkspanderbartInfopanel>
};

export default PlanleggVeienVidereSammen;