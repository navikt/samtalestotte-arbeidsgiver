import { FunctionComponent, useState } from 'react';
import { Radio, RadioGruppe } from 'nav-frontend-skjema';
import './Svar.less';

export const Svar: FunctionComponent = () => {
    const [valgtSvar, setValgtSvar] = useState<'ja' | 'nei' | 'ikke-svart-enda'>('ikke-svart-enda');

    return (
            <RadioGruppe className="svar__radio-gruppe">
                <Radio
                    label={'Ja'}
                    name="svar-ja"
                    value={'svar-ja'}
                    checked={valgtSvar === 'ja'}
                    onChange={() => setValgtSvar('ja')}
                    className="svar__radio-box"
                />
                <Radio
                    label={'Nei'}
                    name="svar-nei"
                    value={'svar-nei'}
                    checked={valgtSvar === 'nei'}
                    onChange={() => setValgtSvar('nei')}
                    className="svar__radio-box"
                />
            </RadioGruppe>

    );
};
