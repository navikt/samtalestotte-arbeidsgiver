import { FunctionComponent } from 'react';
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi';
import { EkspanderbartInfopanel } from '../EkspanderbartInfopanel/EkspanderbartInfopanel';
import './Samtaleverktøy.less';

export const Samtaleverktøy: FunctionComponent = () => {
    return (
        <>
            <Systemtittel className="samtaleverktøy__tittel">Samtaleverktøy</Systemtittel>
            <EkspanderbartInfopanel unikId={'nå-kan-være-samtalen-aktuelt'}>
                <Normaltekst className="ekspanderbart-infopanel__innhold">
                    En oppfølgingssamtale gjennomføres hvis du eller din medarbeider opplever
                    utfordringer med arbeidet. Utfordringer kan for eksempel skyldes sykdom eller
                    andre forhold. Du bør ikke vente til medarbeideren har blitt sykmeldt.
                </Normaltekst>
                <Normaltekst className="ekspanderbart-infopanel__innhold">
                    Det finnes ingen oppskrift på en god samtale som gjelder alle situasjoner. Men
                    det finnes noen grep som ofte bidrar til gode samtaler.
                </Normaltekst>
            </EkspanderbartInfopanel>
        </>
    );
};
