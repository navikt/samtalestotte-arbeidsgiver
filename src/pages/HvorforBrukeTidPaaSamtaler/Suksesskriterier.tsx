import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import Lightbulb from '../../felleskomponenter/Ikoner/Lightbulb';
import fellesStiler from '../../utils/fellesStiler.module.css';
import { Heading } from '@navikt/ds-react';
import { Liste } from '../../Liste/Liste';

const Suksesskriterier = () => {
    return (
        <EkspanderbartInfopanel
            tittel={'Suksesskriterier'}
            unikId={'suksesskriterier'}
            ikon={<Lightbulb width={'44px'} height={'44px'} />}
            lestIkon={<Lightbulb width={'44px'} height={'44px'} />}
            panelLestSituasjon={'ulest'}
        >
            <Liste>
                <Liste.Element>Gjennomfør samtalen tidlig.</Liste.Element>
                <Liste.Element>
                    Snakk om arbeidsoppgaver og muligheter på arbeidsplassen, ikke diagnose.
                </Liste.Element>
                <Liste.Element>
                    Lytt til medarbeideren, gi muligheter til å fortelle og bidra med løsninger.
                </Liste.Element>
                <Liste.Element>Gjennomfør samtaler regelmessig.</Liste.Element>
                <Liste.Element>
                    Jobb kontinuerlig med relasjoner til alle medarbeidere og forutsigbarhet gjennom
                    rutiner.
                </Liste.Element>
                <Liste.Element>Du tør å ta de vanskelige samtalene.</Liste.Element>
            </Liste>
            <Heading className={fellesStiler.marginBottom0Rem} size={'small'} level={'4'}>
                Kjente fallgruver
            </Heading>
            <Liste>
                <Liste.Element>
                    Du påtar deg for stort ansvar for helsa til medarbeideren.
                </Liste.Element>
                <Liste.Element>
                    Fokuset handler om behandling eller forhold i privatlivet i stedet for forhold
                    på arbeidsplassen.
                </Liste.Element>
            </Liste>
        </EkspanderbartInfopanel>
    );
};

export default Suksesskriterier;
