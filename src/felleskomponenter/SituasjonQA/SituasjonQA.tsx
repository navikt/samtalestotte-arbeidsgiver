import { FunctionComponent, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useCookies } from 'react-cookie';
import { Systemtittel, Undertittel } from 'nav-frontend-typografi';
import './SituasjonQA.less';
import { SlikKanDisseSpørsmåleneHjelpeDeg } from './SlikKanDisseSpørsmåleneHjelpeDeg/SlikKanDisseSpørsmåleneHjelpeDeg';
import { SvarType, SvarProps } from './Svar/Svar';
import {
    ForutsigbarInfopanelSvarJa,
    ForutsigbarInfopanelSvarNei,
    InfoPanelEnNei,
    KjentInfopanelSvarJa,
    KjentInfopanelSvarNei,
    TillrettelagtInfopanelSvarJa,
    TillrettelagtInfopanelSvarNei,
} from './Infopaneler/Infopaneler';
import logEvent from '../../amplitude/amplitude';

// Svar komponenten renderer ikke riktig på serverside. Dette sørger for at den blir rendret clientside.
const Svar = dynamic<SvarProps>(() => import('./Svar/Svar').then((module) => module.Svar), {
    ssr: false,
});

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

    const callbackIntercept = (callback: (svar: SvarType) => any, label: string) => (
        svarType: SvarType
    ) => {
        logEvent('knapp', { label: label, funksjon: 'svar__radio', svar: svarType });
        callback(svarType);
    };
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
            <Svar
                name="forutsigbar"
                callback={callbackIntercept(setForutsigbar, 'forutsigbar-spørsmål')}
                svar={forutsigbar}
            />
            {forutsigbar === 'ja' && <ForutsigbarInfopanelSvarJa />}
            {forutsigbar === 'nei' && <ForutsigbarInfopanelSvarNei />}
            <hr className="skillelinje" />
            <Undertittel className="situasjonqa__undertittel">
                Var rutinene kjent for både deg og medarbeideren i forkant av samtalen?
            </Undertittel>
            <Svar
                name="kjent"
                callback={callbackIntercept(setKjent, 'kjent-spørsmål')}
                svar={kjent}
            />
            {kjent === 'ja' && <KjentInfopanelSvarJa />}
            {kjent === 'nei' && <KjentInfopanelSvarNei />}
            <hr className="skillelinje" />
            <Undertittel className="situasjonqa__undertittel">
                Kjente du og medarbeideren til tilretteleggingsmuligheter på egen arbeidsplass?
            </Undertittel>
            <Svar
                name="tillrettelagt"
                callback={callbackIntercept(setTillrettelagt, 'tilrettelagt-spørsmål')}
                svar={tillrettelagt}
            />
            {tillrettelagt === 'ja' && <TillrettelagtInfopanelSvarJa />}
            {tillrettelagt === 'nei' && <TillrettelagtInfopanelSvarNei />}
            <hr className="skillelinje" />
            {(forutsigbar === 'nei' || kjent === 'nei' || tillrettelagt === 'nei') && (
                <InfoPanelEnNei />
            )}
        </div>
    );
};
