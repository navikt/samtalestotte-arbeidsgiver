import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import { Radio, RadioGruppe } from 'nav-frontend-skjema';
import './Svar.less';
import useCookie from 'react-use-cookie';

export type SvarType = 'ja' | 'nei' | undefined;

type SvarProps = {
    name: string;
    callback: Dispatch<SetStateAction<SvarType>>;
    svar: SvarType;
    callbackCookie: Dispatch<string>;
};

export const Svar: FunctionComponent<SvarProps> = ({ name, callback, svar, callbackCookie }) => {
    return (
        <RadioGruppe className="svar__radio-gruppe">
            <Radio
                readOnly={true}
                label={'Ja'}
                name={`svar-ja-${name}`}
                value={svar}
                checked={svar === 'ja'}
                onClick={() => {
                    if (svar !== 'ja') {
                        callback('ja');
                        callbackCookie('ja');
                    } else {
                        callback(undefined);
                        callbackCookie('undefined');
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
                    if (svar !== 'nei') {
                        callback('nei');
                        callbackCookie('nei');
                    } else {
                        callback(undefined);
                        callbackCookie('undefined');
                    }
                }}
                className="svar__radio-box"
            />
        </RadioGruppe>
    );
};
