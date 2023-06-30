import { FunctionComponent, ReactNode, useEffect, useRef, useState } from 'react';
import { Accordion } from '@navikt/ds-react';
import { Expand } from '@navikt/ds-icons';
import classNames from 'classnames';
import Lest from '../Ikoner/Lest';
import { getStickyHeaderOffset, onLukkScroll } from '../../utils/scrollUtils';
import styles from './EkspanderbartInfopanel.module.css';
import { logPanelÅpnetEvent } from '../../amplitude/amplitude';
import { useSendIaTjenesterMetrikker } from '../../utils/useSendIaTjenesteMetrikker';

export type PanelLestSituasjon = 'lest' | 'ulest' | undefined;

export interface EkspanderbartInfopanelProps {
    children: ReactNode;
    unikId: string;
    tittel: string;
    bakgrunn?: string;
    panelLestSituasjon: PanelLestSituasjon;
    ikon?: ReactNode;
    lestIkon?: ReactNode;
}

export const EkspanderbartInfopanel: FunctionComponent<EkspanderbartInfopanelProps> = (
    props: EkspanderbartInfopanelProps
) => {
    const [erÅpen, setErÅpen] = useState<boolean>(false);
    const [erLest, setErLest] = useState<boolean>(false);
    const [panelKnapp, setPanelKnapp] = useState<HTMLElement | null>(null);
    const [hovedMeny, setHovedMeny] = useState<HTMLElement | null>(null);

    const panelknappID = 'ekspanderbart-infopanel__' + props.unikId + '-base';

    const hasIcon = props.ikon !== null && props.ikon !== undefined;

    const accordionRef = useRef<HTMLButtonElement>(null);

    const sendIaTjenesteMetrikk = useSendIaTjenesterMetrikker();

    const settFokusTilSisteAktivePanel = () => {
        accordionRef?.current?.focus();
    };

    useEffect(() => {
        const timer = setTimeout(async () => {
            if (erÅpen) {
                props.panelLestSituasjon !== 'lest' && setErLest(true);
                await logPanelÅpnetEvent(props.unikId, props.tittel);
                sendIaTjenesteMetrikk();
            }
        }, 500);
        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [erÅpen]);

    useEffect(() => {
        setErLest(props.panelLestSituasjon === 'lest');
    }, [props.panelLestSituasjon]);

    useEffect(() => {
        setPanelKnapp(document.getElementById(panelknappID));
        setHovedMeny(document.getElementById('hovedmeny'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const innhold = (
        <>
            <div>{props.children}</div>
        </>
    );
    return (
        <div className={styles.ekspanderbartRoot}>
            <Accordion className={styles.accordion}>
                <Accordion.Item open={erÅpen} className={styles.accordionItem}>
                    <Accordion.Header
                        id={panelknappID}
                        ref={accordionRef}
                        onClick={() => {
                            setErÅpen(!erÅpen);
                        }}
                        className={classNames(styles.panel, { [styles.borderBottom]: erÅpen })}
                    >
                        <div className={classNames(styles.flexContainer)}>
                            <div
                                className={classNames(styles.grid, {
                                    [styles.gridWithIcon]: hasIcon,
                                })}
                            >
                                {hasIcon && (
                                    <div className={styles.ikonContainer}>{props.ikon}</div>
                                )}
                                <div className={styles.tittelTekst}>{props.tittel}</div>
                                {erLest && <Lest width={'62px'} height={'24px'} />}
                            </div>
                        </div>
                    </Accordion.Header>

                    <Accordion.Content className={styles.panelInnhold}>
                        <div className={classNames(styles.innholdStyle)}>{innhold}</div>
                        <button
                            className={classNames(styles.lukkKnapp, 'navds-link')}
                            onClick={() => {
                                setErÅpen(false);
                                setTimeout(
                                    () =>
                                        onLukkScroll(panelKnapp, getStickyHeaderOffset(hovedMeny)),
                                    0
                                );
                                settFokusTilSisteAktivePanel();
                            }}
                        >
                            <span className="navds-body-short">Lukk dette panelet</span>
                            <Expand className={styles.rotate180} />
                        </button>
                    </Accordion.Content>
                </Accordion.Item>
            </Accordion>
            <div className={styles.printStyle}>{innhold}</div>
        </div>
    );
};
