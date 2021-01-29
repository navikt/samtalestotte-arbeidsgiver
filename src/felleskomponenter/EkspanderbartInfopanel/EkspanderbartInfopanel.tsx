import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import './EkspanderbartInfopanel.less';
import { EkspanderbartpanelBase } from 'nav-frontend-ekspanderbartpanel';
import { OppChevron } from 'nav-frontend-chevron';
import classNames from 'classnames';
import logEvent from '../../amplitude/amplitude';

interface Props {
    children: ReactNode;
    unikId: string;
    tittel: string;
    bakgrunn?: string;
    ikon?: ReactNode;
}

export const EkspanderbartInfopanel: FunctionComponent<Props> = (props: Props) => {
    const [erÅpen, setErÅpen] = useState<boolean>(false);
    const panelknappID = 'ekspanderbart-infopanel__' + props.unikId;

    useEffect(() => {
        const timer = setTimeout(async () => {
            erÅpen && (await logEvent('knapp', { label: props.tittel, funksjon: 'åpen' }));
        }, 500);
        return () => clearTimeout(timer);
    }, [erÅpen]);

    return (
        <EkspanderbartpanelBase
            tittel={
                props.ikon ? (
                    <div className="ekspanderbart-infopanel__tittel-med-ikon">
                        {props.ikon} {props.tittel}
                    </div>
                ) : (
                    <div className="ekspanderbart-infopanel__tittel-uten-ikon">{props.tittel}</div>
                )
            }
            id={'ekspanderbart-infopanel__' + props.unikId + '-base'}
            apen={erÅpen}
            onClick={() => {
                setErÅpen(!erÅpen);
            }}
            className={
                !props.bakgrunn
                    ? 'ekspanderbart-infopanel__panel'
                    : classNames(
                          'ekspanderbart-infopanel__panel',
                          'ekspanderbart-infopanel__gronnbakgrunn'
                      )
            }
        >
            <div>{props.children}</div>

            <button
                className="ekspanderbart-infopanel__lukk-knapp"
                onClick={() => {
                    setErÅpen(false);
                    const panelknapp = document.getElementById(panelknappID);
                    panelknapp && panelknapp.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <span className="typo-normal ">Lukk</span>
                <OppChevron className="ekspanderbart-infopanel__lukk-chevron" />
            </button>
        </EkspanderbartpanelBase>
    );
};
