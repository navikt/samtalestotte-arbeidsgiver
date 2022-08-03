import React, { useRef } from 'react';
import classNames from 'classnames';
import {knappSomLenke, marginLeft1Rem, marginRight05Rem, noPrint} from '../../utils/fellesStiler';
import ReactToPrint from 'react-to-print';
import { Button } from '@navikt/ds-react';
import { Print } from '@navikt/ds-icons';
import { css } from 'linaria';
import { SCREEN_SM_MIN } from '../../utils/konstanter';

export const SkrivUtKnapp = (props: {
    knappetekst: string;
    utskriftsinnholdRef: any;
    kjørFørUtskrift: () => any;
    wrapperClassnames: string[];
}) => {
    const knapperef = useRef<HTMLButtonElement>(null);
    return (
        <div className={classNames(hideOnSmallScreen, props.wrapperClassnames)}>
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
                        className={classNames(noPrint, knappSomLenke, marginLeft1Rem)}
                        size={'medium'}
                        variant={'secondary'}
                    >
                        <Print className={marginRight05Rem} title={"Utskriftsikon"}/> {props.knappetekst}
                    </Button>
                )}
            />
        </div>
    );
};

const hideOnSmallScreen = css`
    display: none;
    @media (min-width: ${SCREEN_SM_MIN}) {
        display: flex;
    }
`;
