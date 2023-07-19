import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import fellesStiler from '../../utils/fellesStiler.module.css';
import { Liste } from '../../Liste/Liste';

const EnkleTipsForDigitaleSamtaler = () => {
    return (
        <EkspanderbartInfopanel
            unikId={'enkleTipsForDigitaleSamtaler'}
            tittel={'Enkle tips for digitale samtaler'}
            panelLestSituasjon={'ulest'}
        >
            <Liste className={fellesStiler.marginTop0Rem}>
                <Liste.Element>
                    Husk forberedelse og struktur også i digitale samtaler.
                </Liste.Element>
                <Liste.Element>
                    Bli enige om tittel på avtalen når du bruker digital innkalling og digitale
                    møterom. Husk personvernet til medarbeideren du skal snakke med.
                </Liste.Element>
                <Liste.Element>La kamera være på.</Liste.Element>
                <Liste.Element>
                    Det er bedre med flere korte, enn en lang digital samtale.
                </Liste.Element>
                <Liste.Element>
                    Digitale samtaler trenger trygghet og gode relasjoner.
                </Liste.Element>
                <Liste.Element>
                    Gi medarbeideren rom til å fortelle, tål pauser og stillhet.
                </Liste.Element>
                <Liste.Element>
                    Bruk sikre digitale verktøy for å ivareta personvern og taushetsplikt
                </Liste.Element>
                <Liste.Element>
                    Hvis dere har mulighet, kan dere skrive referat eller oppfølgingsplan sammen og
                    underveis i samtalen.
                </Liste.Element>
            </Liste>
        </EkspanderbartInfopanel>
    );
};

export default EnkleTipsForDigitaleSamtaler;
