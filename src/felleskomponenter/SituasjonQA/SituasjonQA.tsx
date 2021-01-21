import { FunctionComponent } from 'react';
import { Normaltekst, Systemtittel } from 'nav-frontend-typografi';
import './SituasjonQA.less';
import {SlikKanDisseSpørsmåleneHjelpeDeg} from "./SlikKanDisseSpørsmåleneHjelpeDeg/SlikKanDisseSpørsmåleneHjelpeDeg";

export const SituasjonQA: FunctionComponent = () => {
    return (
        <>
            <Systemtittel className="situasjonqa__tittel">
                Hvordan er situasjonen hos dere?
            </Systemtittel>
            <SlikKanDisseSpørsmåleneHjelpeDeg/>
        </>
    );
};
