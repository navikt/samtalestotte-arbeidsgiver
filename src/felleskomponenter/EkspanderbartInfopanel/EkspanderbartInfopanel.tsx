import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import './EkspanderbartInfopanel.less';
import { EkspanderbartpanelBase } from 'nav-frontend-ekspanderbartpanel';
import { OppChevron } from 'nav-frontend-chevron';
import classNames from 'classnames';
import logEvent from '../../amplitude/amplitude';
import { LestSVG } from './LestSVG';

export type PanelLestSituasjon = 'lest' | 'ulest' | undefined;

export interface EkspanderbartInfopanelProps {
    children: ReactNode;
    unikId: string;
    tittel: string;
    bakgrunn?: string;
    panelLestSituasjon: PanelLestSituasjon;
    ikon?: ReactNode;
    lestIkon?: ReactNode;
    callBack: (panelLestSituasjon: PanelLestSituasjon) => any;
}

export const EkspanderbartInfopanel: FunctionComponent<EkspanderbartInfopanelProps> = (
    props: EkspanderbartInfopanelProps
) => {
    const [erÅpen, setErÅpen] = useState<boolean>(false);
    const [erLest, setErLest] = useState<boolean>(false);
    const [panelKnapp, setPanelKnapp] = useState<HTMLElement | null>(null);
    const [hovedMeny, setHovedMeny] = useState<HTMLElement | null>(null);

    const panelknappID = 'ekspanderbart-infopanel__' + props.unikId + '-base';

    const toggleCallback = (panelLestSituasjon: PanelLestSituasjon) => {
        if (props.panelLestSituasjon !== panelLestSituasjon) {
            setErLest(true);
            props.callBack(panelLestSituasjon);
        } else {
            props.callBack(undefined);
        }
    };

    useEffect(() => {
        const timer = setTimeout(async () => {
            erÅpen && props.panelLestSituasjon !== 'lest' && toggleCallback('lest');
            erÅpen && (await logEvent('knapp', { label: props.tittel, funksjon: 'åpen' }));
        }, 500);
        return () => clearTimeout(timer);
    }, [erÅpen]);

    useEffect(() => {
        setErLest(props.panelLestSituasjon === 'lest');
    }, [props.panelLestSituasjon]);

    useEffect(() => {
        setPanelKnapp(document.getElementById(panelknappID));
        setHovedMeny(document.getElementById('hovedmeny'));
    }, []);

    const innhold = (
        <>
            <div>{props.children}</div>
        </>
    );
    return (
        <div className={"ekspanderbart-infopanel__root"}>
            <EkspanderbartpanelBase
                tittel={
                    props.ikon ? (
                        <div className="ekspanderbart-infopanel__tittel-med-ikon-wrapper">
                            <div className="ekspanderbart-infopanel__tittel-med-ikon">
                                <div className="ekspanderbart-infopanel__kun-ikon">
                                    {erLest ? props.lestIkon : props.ikon}
                                </div>
                                {props.tittel}
                            </div>
                            {erLest && (
                                <div className="ekspanderbart-infopanel__kun-lest-ikon">
                                    <LestSVG />
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="ekspanderbart-infopanel__tittel-uten-ikon">
                            <div className="ekspanderbart-infopanel__kun-tittel">
                                {props.tittel}
                            </div>
                            {erLest && (
                                <div className="ekspanderbart-infopanel__kun-lest-ikon">
                                    <LestSVG />
                                </div>
                            )}
                        </div>
                    )
                }
                id={panelknappID}
                apen={erÅpen}
                onClick={() => {
                    setErÅpen(!erÅpen);
                }}
                className={
                    !erLest
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
                        setTimeout(()=>onLukkScroll(panelKnapp, hovedMeny), 0);
                    }}
                >
                    <span className="typo-normal ">Lukk</span>
                    <OppChevron className="ekspanderbart-infopanel__lukk-chevron" />
                </button>
            </EkspanderbartpanelBase>
            <div className="ekspanderbart-infopanel__print-innhold">{innhold}</div>
        </div>
    );
};

const onLukkScroll = (panelKnapp: HTMLElement | null, hovedMeny: HTMLElement | null) => {
    if(panelKnapp === null || window === null || window === undefined) {
        return;
    }
    /**
     * spacingOffset : Offset for å skape 'luft' over elementet
     * pageYOffset : Hvor langt selve siden har blitt scrollet ned
     * hovedMenyOffset : Offset tilsvarende høyden på hovedmeny hvis den er synlig
     * elementPosition : Hvor toppen av det ekspanderbarte panelet er relativt til viewscreen
     *                      Negative verdier representerer posisjon over det du ser på skjermen
     *
     */
    const spacingOffset = -16;
    const pageYOffset = window.pageYOffset;
    const elementPosition = panelKnapp.getBoundingClientRect().top;
    const hovedMenyOffset = getHovedmenyOffset(hovedMeny);
    if (elementPosition < 0) {
        window.scrollTo({
            top: elementPosition + pageYOffset + spacingOffset - hovedMenyOffset,
            behavior: "auto"
        });
    }
}

const getHovedmenyOffset = (hovedmeny: HTMLElement | null) : number => {
    if(hovedmeny === null) return 0;
    const rect = hovedmeny.getBoundingClientRect();
    return rect.height + rect.top > 0 ? rect.height : 0;
}