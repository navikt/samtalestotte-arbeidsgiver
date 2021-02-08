import React, { FunctionComponent } from 'react';
import { RadioPanelGruppe } from 'nav-frontend-skjema';
import './Svar.less';

export type SvarType = 'ja' | 'nei' | undefined;

export type SvarProps = {
    name: string;
    callback: (svar: SvarType) => any
    svar: SvarType;
};

export const Svar: FunctionComponent<SvarProps> = ({name, callback, svar}) => {
    const toggleCallback = (value: SvarType) => {
        if(svar !== value) {
            callback(value);
        } else {
            callback(undefined);
        }
    }

    return <RadioPanelGruppe
        className={"svar__radio-panel-gruppe"}
        name={`svar-${name}`}
        checked={svar}
        radios={[
            {
                label: "ja",
                value: "ja",
                onClick: () => {
                    toggleCallback("ja");
                },
                onKeyDown: (event) => {
                    if(event.code === "Space" || event.code === "Enter"){
                        event.preventDefault();
                        toggleCallback("ja")
                    }
                },
            },
            {
                label: "nei",
                value: "nei",
                onClick: () => {
                    toggleCallback("nei")
                },
                onKeyDown: (event) => {
                    if(event.code === "Space" || event.code === "Enter"){
                        event.preventDefault();
                        toggleCallback("nei")
                    }
                },
            }
        ]}
        onChange= {()=> {}}
    />
};
