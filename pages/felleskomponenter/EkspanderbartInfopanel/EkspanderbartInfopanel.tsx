import { FunctionComponent, useState } from 'react';
import './EkspanderbartInfopanel.less';
import { EkspanderbartpanelBase } from 'nav-frontend-ekspanderbartpanel';

export const EkspanderbartInfopanel: FunctionComponent = () => {
    const [erÅpen, setErÅpen] = useState<boolean>(false);

    return (
        <EkspanderbartpanelBase
            tittel="Når kan oppfølgingssamtale være aktuelt?"
            id={'info-1'}
            apen={erÅpen}
            onClick={() => {
                setErÅpen(!erÅpen);
            }}
            className="ekspanderbart-infopanel__panel"
        >
            <div className="ekspanderbart-infopanel__innhold">
                En oppfølgingssamtale gjennomføres hvis du eller din medarbeider opplever utfordringer
                med arbeidet. Utfordringer kan for eksempel skyldes sykdom eller andre forhold. Du bør
                ikke vente til medarbeideren har blitt sykmeldt. Det finnes ingen oppskrift på en god
                samtale som gjelder alle situasjoner. Men det finnes noen grep som ofte bidrar til gode
                samtaler.
            </div>
        </EkspanderbartpanelBase>
    );
};
