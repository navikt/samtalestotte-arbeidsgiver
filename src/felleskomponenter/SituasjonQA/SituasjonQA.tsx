import { FunctionComponent, useState } from 'react';
import { Systemtittel, Undertittel } from 'nav-frontend-typografi';
import './SituasjonQA.less';
import { SlikKanDisseSpørsmåleneHjelpeDeg } from './SlikKanDisseSpørsmåleneHjelpeDeg/SlikKanDisseSpørsmåleneHjelpeDeg';
import { Svar, SvarType } from './Svar/Svar';
import {
    ForutsigbarInfopanelSvarJa,
    ForutsigbarInfopanelSvarNei,
    InfoPanelEnNei,
    KjentInfopanelSvarJa,
    KjentInfopanelSvarNei,
    TillrettelagtInfopanelSvarJa, TillrettelagtInfopanelSvarNei,
} from './Infopaneler/Infopaneler';

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
                <ForutsigbarInfopanelSvarJa />
            )}
            {forutsigbar === 'nei' && (
                <ForutsigbarInfopanelSvarNei />
            )}
            <Undertittel className="situasjonqa__undertittel">
                Er rutinene kjent for både deg og medarbeideren i forkant av samtalen?
            </Undertittel>
            <Svar name="kjent" callback={setKjent} svar={kjent} />
            {kjent === 'ja' && (
                <KjentInfopanelSvarJa />
            )}
            {kjent === 'nei' && (
                <KjentInfopanelSvarNei />
            )}
            <Undertittel className="situasjonqa__undertittel">
                Kjenner du og medarbeideren til tilretteleggingsmuligheter på egen arbeidsplass?
            </Undertittel>
            <Svar name="tillrettelagt" callback={setTillrettelagt} svar={tillrettelagt} />
            {tillrettelagt === 'ja' && (
                <TillrettelagtInfopanelSvarJa />
            )}
            {tillrettelagt === 'nei' && (
                <TillrettelagtInfopanelSvarNei />
            )}
            {(forutsigbar === 'nei' || kjent === 'nei' || tillrettelagt === 'nei') && (
                <InfoPanelEnNei />
            )}
        </div>
    );
};
