import React, { useRef } from 'react';
import classNames from 'classnames';
import fellesStiler from '../../utils/fellesStiler.module.css';
//{knappSomLenke, marginLeft1Rem, marginRight05Rem, noPrint}
import ReactToPrint from 'react-to-print';
import { Button } from '@navikt/ds-react';
import { Print } from '@navikt/ds-icons';
//import { css } from 'linaria';
import styles from './SkrivUtKnapp.module.css'
import { SCREEN_SM_MIN } from '../../utils/konstanter';

export const SkrivUtKnapp = (props: {
    knappetekst: string;
    utskriftsinnholdRef: any;
    kjørFørUtskrift: () => any;
    wrapperClassnames: string[];
}) => {
    const knapperef = useRef<HTMLButtonElement>(null);
    return (
        <div className={classNames(styles.hideOnSmallScreen, props.wrapperClassnames)}>
            <ReactToPrint
                onBeforePrint={props.kjørFørUtskrift}
                onAfterPrint={() => {
                    if (knapperef.current) {
                        knapperef.current.focus();
                    }
                }}
                content={() => props.utskriftsinnholdRef.current}
                trigger={() => (
                    <Button
                        id={'skriv-ut-knapp'}
                        ref={knapperef}
                        className={classNames(fellesStiler.noPrint, fellesStiler.knappSomLenke, fellesStiler.marginLeft1Rem)}
                        size={'medium'}
                        variant={'secondary'}
                    >
                        <Print className={fellesStiler.marginRight05Rem} title={"Utskriftsikon"}/> {props.knappetekst}
                    </Button>
                )}
            />
        </div>
    );
};

/* TODO
const hideOnSmallScreen = css`
    display: none;
    @media (min-width: ${SCREEN_SM_MIN}) {
        display: flex;
    }
`;
 */
