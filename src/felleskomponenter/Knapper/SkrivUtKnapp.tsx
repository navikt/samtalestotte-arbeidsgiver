import React, { useRef } from 'react';
import classNames from 'classnames';
import fellesStiler from '../../utils/fellesStiler.module.css';
import ReactToPrint from 'react-to-print';
import { Button } from '@navikt/ds-react';
import { PrinterSmallIcon } from '@navikt/aksel-icons';
import styles from './SkrivUtKnapp.module.css';

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
                        className={classNames(
                            fellesStiler.noPrint,
                            fellesStiler.knappSomLenke,
                            fellesStiler.marginLeft1Rem
                        )}
                        size={'medium'}
                        variant={'secondary'}
                        icon={
                            <PrinterSmallIcon
                                className={fellesStiler.marginRight05Rem}
                                fontSize="1.75rem"
                                title={'Utskriftsikon'}
                            />
                        }
                    >
                        {props.knappetekst}
                    </Button>
                )}
            />
        </div>
    );
};
