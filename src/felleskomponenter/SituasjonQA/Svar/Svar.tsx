import React, { FunctionComponent } from 'react';
import { RadioPanelGruppe } from 'nav-frontend-skjema';
import './Svar.less';

export type SvarType = 'ja' | 'nei' | undefined;

export type SvarProps = {
    name: string;
    callback: (svar: SvarType) => any;
    svar: SvarType;
    ariaTittel: string;
};

export const Svar: FunctionComponent<SvarProps> = ({ name, callback, svar, ariaTittel }) => {
    const ariaLabelJa = `Ja svar til spørsmål ${ariaTittel}`;
    const ariaLabelNei = `Nei svar til spørsmål ${ariaTittel}`;
    return (
        <RadioPanelGruppe
            className={'svar__radio-panel-gruppe'}
            name={`svar-${name}`}
            checked={svar}
            radios={[
                {
                    'aria-label': ariaLabelJa,
                    label: 'ja',
                    value: 'ja',
                },
                {
                    'aria-label': ariaLabelNei,
                    label: 'nei',
                    value: 'nei',
                },
            ]}
            onChange={(event, value) => callback(value)}
        />
    );
};
