import {FunctionComponent, ReactNode, useEffect, useState} from 'react';
import './EkspanderbartInfopanel.less';
import {EkspanderbartpanelBase} from 'nav-frontend-ekspanderbartpanel';
import {OppChevron} from 'nav-frontend-chevron';
import classNames from 'classnames';
import logEvent from '../../amplitude/amplitude';

export type PanelLestSituasjon = 'lest' | 'ulest' | undefined;
interface Props {
    children: ReactNode;
    unikId: string;
    tittel: string;
    bakgrunn?: string;
    panelLestSituasjon?: PanelLestSituasjon;
    ikon?: ReactNode;
    callBack: (panelLestSituasjon: PanelLestSituasjon) => any;
}

export const EkspanderbartInfopanel: FunctionComponent<Props> = (props: Props) => {
    const [erÅpen, setErÅpen] = useState<boolean>(false);
    const panelknappID = 'ekspanderbart-infopanel__' + props.unikId;
    const toggleCallback = (panelLestSituasjon: PanelLestSituasjon) => {
        if (props.panelLestSituasjon !== panelLestSituasjon) {
            props.callBack(panelLestSituasjon);
        } else {
            props.callBack(undefined);
        }
    };

    useEffect(() => {
        const timer = setTimeout(async () => {
            console.log('unikid', props.unikId);
            erÅpen && (await logEvent('knapp', { label: props.tittel, funksjon: 'åpen' }));
            erÅpen && props.panelLestSituasjon !== 'lest' && toggleCallback('lest');
        }, 500);
        return () => clearTimeout(timer);
    }, [erÅpen]);

    const innhold = (
        <>
            <div>{props.children}</div>
        </>
    );

    return (
        <>
            <EkspanderbartpanelBase
                tittel={
                    props.ikon ? (
                        <div className="ekspanderbart-infopanel__tittel-med-ikon">
                            {props.ikon} {props.tittel}
                        </div>
                    ) : (
                        <div className="ekspanderbart-infopanel__tittel-uten-ikon">
                            {props.tittel}
                        </div>
                    )
                }
                id={'ekspanderbart-infopanel__' + props.unikId + '-base'}
                apen={erÅpen}
                onClick={() => {
                    setErÅpen(!erÅpen);
                }}
                className={
                    props.panelLestSituasjon !== 'lest'
                        ? 'ekspanderbart-infopanel__panel'
                        : classNames(
                              'ekspanderbart-infopanel__panel',
                              'ekspanderbart-infopanel__gronnbakgrunn'
                          )
                }
            >
                <div
                    className={classNames(
                        'ekspanderbart-infopanel__innhold',
                        'ekspanderbart-infopanel__innhold-no-print'
                    )}
                >
                    {innhold}
                </div>
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
            <div className="ekspanderbart-infopanel__print-innhold">{innhold}</div>
        </>
    );
};
