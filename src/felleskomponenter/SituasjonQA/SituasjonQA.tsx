import { FunctionComponent } from 'react';
import {Normaltekst, Systemtittel, Undertittel} from 'nav-frontend-typografi';
import './SituasjonQA.less';
import {SlikKanDisseSpørsmåleneHjelpeDeg} from "./SlikKanDisseSpørsmåleneHjelpeDeg/SlikKanDisseSpørsmåleneHjelpeDeg";
import {Svar} from "./Svar/Svar";

export const SituasjonQA: FunctionComponent = () => {
    return (
        <div className="situasjonqa">
            <Systemtittel className="situasjonqa__tittel">
                Hvordan er situasjonen hos dere?
            </Systemtittel>
            <SlikKanDisseSpørsmåleneHjelpeDeg/>
            <Undertittel className="situasjonqa__undertittel">
                Bidrar sykefraværsrutinene på arbeidsplassen til forutsigbarhet rundt oppgaver og ansvar?
            </Undertittel>
            <Svar/>
            <Undertittel className="situasjonqa__undertittel">
                Er rutinene kjent for både deg og medarbeideren i forkant av samtalen?
            </Undertittel>
            <Svar/>
            <Undertittel className="situasjonqa__undertittel">
                Kjenner du og medarbeideren til tilretteleggingsmuligheter på egen arbeidsplass?
            </Undertittel>
            <Svar/>
        </div>
    );
};
