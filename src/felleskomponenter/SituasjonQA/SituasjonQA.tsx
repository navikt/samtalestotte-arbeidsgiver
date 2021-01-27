import { FunctionComponent, useEffect, useState } from 'react';
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
    TillrettelagtInfopanelSvarJa,
    TillrettelagtInfopanelSvarNei,
} from './Infopaneler/Infopaneler';
import { useCookies } from 'react-cookie';

const ETT_ÅR_I_SEKUNDER = 31536000;

export const SituasjonQA: FunctionComponent = () => {
    const [cookies, setCookie] = useCookies(['samtalestotte-arbeidsgiver-qa']);

    const [forutsigbar, setForutsigbar] = useState<SvarType>(
        cookies['samtalestotte-arbeidsgiver-qa']?.forutsigbar === undefined
            ? undefined
            : cookies['samtalestotte-arbeidsgiver-qa'].forutsigbar
    );
    const [kjent, setKjent] = useState<SvarType>(
        cookies['samtalestotte-arbeidsgiver-qa']?.kjent === undefined
            ? undefined
            : cookies['samtalestotte-arbeidsgiver-qa'].kjent
    );
    const [tillrettelagt, setTillrettelagt] = useState<SvarType>(
        cookies['samtalestotte-arbeidsgiver-qa']?.tilrettelagt === undefined
            ? undefined
            : cookies['samtalestotte-arbeidsgiver-qa'].tilrettelagt
    );

    useEffect(() => {
        setCookie(
            'samtalestotte-arbeidsgiver-qa',
            JSON.stringify({
                forutsigbar: forutsigbar,
                kjent: kjent,
                tilrettelagt: tillrettelagt,
            }),
            {
                path: '/',
                maxAge: ETT_ÅR_I_SEKUNDER,
                sameSite: true,
            }
        );
    }, [forutsigbar, kjent, tillrettelagt]);

    return (
        <div className="situasjonqa">
            <Systemtittel className="situasjonqa__tittel">
                Hvordan er situasjonen hos dere?
            </Systemtittel>
            <SlikKanDisseSpørsmåleneHjelpeDeg />
            <Undertittel className="situasjonqa__undertittel">
                Bidro sykefraværsrutinene på arbeidsplassen til forutsigbarhet rundt oppgaver og
                ansvar?
            </Undertittel>
            <Svar name="forutsigbar" callback={setForutsigbar} svar={forutsigbar} />
            {forutsigbar === 'ja' && <ForutsigbarInfopanelSvarJa />}
            {forutsigbar === 'nei' && <ForutsigbarInfopanelSvarNei />}
            <Undertittel className="situasjonqa__undertittel">
                Var rutinene kjent for både deg og medarbeideren i forkant av samtalen?
            </Undertittel>
            <Svar name="kjent" callback={setKjent} svar={kjent} />
            {kjent === 'ja' && <KjentInfopanelSvarJa />}
            {kjent === 'nei' && <KjentInfopanelSvarNei />}
            <Undertittel className="situasjonqa__undertittel">
                Kjente du og medarbeideren til tilretteleggingsmuligheter på egen arbeidsplass?
            </Undertittel>
            <Svar name="tillrettelagt" callback={setTillrettelagt} svar={tillrettelagt} />
            {tillrettelagt === 'ja' && <TillrettelagtInfopanelSvarJa />}
            {tillrettelagt === 'nei' && <TillrettelagtInfopanelSvarNei />}
            {(forutsigbar === 'nei' || kjent === 'nei' || tillrettelagt === 'nei') && (
                <InfoPanelEnNei />
            )}
        </div>
    );
};
