import { FunctionComponent, useState } from 'react';
import {Systemtittel, UndertekstBold, Undertittel} from 'nav-frontend-typografi';
import './SituasjonQA.less';
import { SlikKanDisseSpørsmåleneHjelpeDeg } from './SlikKanDisseSpørsmåleneHjelpeDeg/SlikKanDisseSpørsmåleneHjelpeDeg';
import { Svar, SvarType } from './Svar/Svar';
import Panel from 'nav-frontend-paneler';
import classNames from 'classnames';

export const SituasjonQA: FunctionComponent = () => {
    const [forutsigbar, setForutsigbar] = useState<SvarType>(undefined);
    const [kjent, setKjent] = useState<SvarType>(undefined);
    const [tillrettelagt, setTillrettelagt] = useState<SvarType>(undefined);

    return (
        <div className="situasjonqa">
            <Systemtittel className="situasjonqa__tittel">
                Hvordan er situasjonen hos dere?
            </Systemtittel>
            <SlikKanDisseSpørsmåleneHjelpeDeg />
            <Undertittel className="situasjonqa__undertittel">
                Bidrar sykefraværsrutinene på arbeidsplassen til forutsigbarhet rundt oppgaver og
                ansvar?
            </Undertittel>
            <Svar name="forutsigbar" callback={setForutsigbar} svar={forutsigbar} />
            {forutsigbar === 'ja' && (
                <Panel
                    border
                    className={classNames('situasjonqa__info-panel', 'situasjonqa__info-panel-ja')}
                >
                    Fint. Det er lurt å evaluere om rutiner fungerer etter hensikten regelmessig.
                    <br />
                    Hva fungerer bra hos dere?
                    <br />
                    Tips: Evaluering av rutiner bør settes inn i deres plan for å forebygge
                    sykefravær slik at du kan dokumentere arbeidet.
                </Panel>
            )}
            {forutsigbar === 'nei' && (
                <Panel border
                    className={classNames('situasjonqa__info-panel', 'situasjonqa__info-panel-nei')}
                >
                    Gode rutiner effektiviserer arbeidet og skaper forutsigbarhet. Rutiner bør
                    evalueres og justeres hvis de ikke gir ønsket verdi. <br /><br/>
                    <span className="bold">Tips:</span> Arbeidet med rutiner bør settes inn i deres plan for å
                        forebygge
                        sykefravær slik at du kan dokumentere arbeidet.
                        <br/> Slik kan du evaluere rutinene
                    https://www.idebanken.org/kloke-grep/artikler/sjekk-kvaliteten-pa-sykefravaersrutinene
                    <br />
                    Slik kan du utarbeide sykefraværsrutiner
                    https://www.idebanken.org/kloke-grep/artikler/rutiner-og-retningslinjer-for-sykefravaersoppfolging
                </Panel>
            )}
            <Undertittel className="situasjonqa__undertittel">
                Er rutinene kjent for både deg og medarbeideren i forkant av samtalen?
            </Undertittel>
            <Svar name="kjent" callback={setKjent} svar={kjent} />
            <Undertittel className="situasjonqa__undertittel">
                Kjenner du og medarbeideren til tilretteleggingsmuligheter på egen arbeidsplass?
            </Undertittel>
            <Svar name="tillrettelagt" callback={setTillrettelagt} svar={tillrettelagt} />
        </div>
    );
};
