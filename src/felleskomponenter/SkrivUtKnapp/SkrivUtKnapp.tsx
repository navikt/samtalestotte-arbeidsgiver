import React, {useRef} from 'react';
import classNames from "classnames";
import {knappSomLenke, marginRight1Rem, marginTop6Rem, noPrint} from "../../utils/fellesStiler";
import ReactToPrint from "react-to-print";
import {Button} from "@navikt/ds-react";
import {Print} from "@navikt/ds-icons";
import {css} from "linaria";
import {SCREEN_SM_MIN} from "../../utils/konstanter";

export const SkrivUtKnapp = (props: {
    knappetekst: string;
    kjørFørUtskrift: () => any;
    innholdRef: any;
}) => {
    const knapperef = useRef<HTMLButtonElement>(null);
    return (
        <div className={classNames(layoutReactToPrintWrapper, marginTop6Rem)}>
            <ReactToPrint
                onBeforePrint={props.kjørFørUtskrift}
                onAfterPrint={() => {
                    if (knapperef.current) {
                        knapperef.current.focus();
                    }
                }}
                content={() => props.innholdRef.current}
                trigger={() => (
                    <Button
                        id={'skriv-ut-knapp'}
                        ref={knapperef}
                        className={classNames(noPrint, knappSomLenke)}
                        size={"m"}
                    >
                        <Print className={marginRight1Rem}/> {props.knappetekst}
                    </Button>
                )}
            />
        </div>
    );
};

const layoutReactToPrintWrapper = css`
  display: none;
  @media (min-width: ${SCREEN_SM_MIN}) {  
    display: flex;
  }
`
