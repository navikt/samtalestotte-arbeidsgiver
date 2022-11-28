import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import { Liste } from '../../Liste/Liste';

const GodeGrepForAByggeRelasjoner = (props: InfoPanelProps) => {
    return (
        <EkspanderbartInfopanel
            unikId={'godeGrepForAByggeRelasjoner'}
            tittel={'Gode grep for å bygge relasjoner'}
            panelLestSituasjon={'ulest'}
        >
            <Liste>
                <Liste.Element>Bruk tid på å bli kjent med alle dine medarbeidere.</Liste.Element>
                <Liste.Element>
                    Er det sider ved deg selv du bør styrke eller dempe i møte med medarbeideren?
                </Liste.Element>
                <Liste.Element>Vær forutsigbar.</Liste.Element>
                <Liste.Element>Vis at du har tillit til medarbeideren.</Liste.Element>
                <Liste.Element>Vær en støttende og tydelig leder.</Liste.Element>
                <Liste.Element>
                    Hvordan opplevdes samtalen for medarbeider? Be om ærlig tilbakemeldinger.
                </Liste.Element>
            </Liste>
        </EkspanderbartInfopanel>
    );
};

export default GodeGrepForAByggeRelasjoner;
