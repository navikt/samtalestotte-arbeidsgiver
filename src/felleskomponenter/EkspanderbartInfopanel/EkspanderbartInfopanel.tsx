import { FunctionComponent, ReactNode, useEffect, useState } from 'react';
import { ExpansionCard } from '@navikt/ds-react';
import { ChevronDownIcon } from '@navikt/aksel-icons';
import classNames from 'classnames';
import Lest from '../Ikoner/Lest';
import { onLukkScroll } from '../../utils/scrollUtils';
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
}

export const EkspanderbartInfopanel: FunctionComponent<EkspanderbartInfopanelProps> = (
    props: EkspanderbartInfopanelProps
) => {
    const [erÅpen, setErÅpen] = useState<boolean>(false);
    const [erLest, setErLest] = useState<boolean>(false);
    const [panelKnapp, setPanelKnapp] = useState<HTMLElement | null>(null);
    const [hovedMeny, setHovedMeny] = useState<HTMLElement | null>(null);

    const panelknappID = 'ekspanderbart-infopanel__' + props.unikId + '-base';

    const sendIaTjenesteMetrikk = useSendIaTjenesterMetrikker();

    const setErÅpenOgScrollOmNødvendig = (erÅpen: boolean) => {
        setErÅpen(erÅpen);
        if (!erÅpen) {
            onLukkScroll(panelKnapp, hovedMeny?.getBoundingClientRect()?.height ?? 0);
        }
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

    return (
        <div className={styles.ekspanderbartRoot}>
            <ExpansionCard
                open={erÅpen}
                onToggle={setErÅpenOgScrollOmNødvendig}
                aria-label={props.tittel}
                className={styles.expansionCard}
            >
                <ExpansionCard.Header className={styles.expansionCardHeader} id={panelknappID}>
                    <ExpansionCard.Title className={styles.tittelTekst}>
                        {props.tittel}
                    </ExpansionCard.Title>
                    {erLest && <Lest width={'62px'} height={'24px'} />}
                </ExpansionCard.Header>
                <ExpansionCard.Content className={styles.expansionCardContent}>
                    {props.children}
                    <button
                        className={classNames(styles.lukkKnapp, 'navds-link')}
                        onClick={() => {
                            setErÅpenOgScrollOmNødvendig(false);
                        }}
                    >
                        <span className="navds-body-short">Lukk dette panelet</span>
                        <ChevronDownIcon className={styles.rotate180} />
                    </button>
                </ExpansionCard.Content>
            </ExpansionCard>
        </div>
    );
};
