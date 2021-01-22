import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { Radio, RadioGruppe } from 'nav-frontend-skjema';
import './Svar.less';

export type SvarType = 'ja' | 'nei' | undefined;

type SvarProps =     {
    name: string;
    callback: Dispatch<SetStateAction<SvarType>>
    svar: SvarType;
}

export const Svar: FunctionComponent<SvarProps> = ({name, callback, svar}) => (
    <RadioGruppe className="svar__radio-gruppe">
        <Radio
            readOnly={true}
            label={'Ja'}
            name={`svar-ja-${name}`}
            value={svar}
            checked={svar === 'ja'}
            onClick={() => {
                if(svar !== 'ja'){
                    callback('ja')
                } else {
                    callback(undefined)
                }
            }}
            className="svar__radio-box"
        />
        <Radio
            readOnly={true}
            label={'Nei'}
            name={`svar-nei-${name}`}
            value={svar}
            checked={svar === 'nei'}
            onClick={() => {
                if(svar !== 'nei'){
                    callback('nei')
                } else {
                    callback(undefined)
                }
            }}
            className="svar__radio-box"
        />
    </RadioGruppe>
);
