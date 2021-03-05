import { Dispatch, FunctionComponent } from 'react';
import dynamic from 'next/dynamic';
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
import classNames from 'classnames';
import { CookieReducerAction, SituasjonQAState } from '../../cookie/CookieReducer';

// Svar komponenten renderer ikke riktig på serverside. Dette sørger for at den blir rendret clientside.
const Svar = dynamic<SvarProps>(() => import('./Svar/Svar').then((module) => module.Svar), {
    ssr: false,
});


interface SituasjonQAProps {
    situasjonQAState: Partial<SituasjonQAState>
    dispatch: Dispatch<CookieReducerAction>
}

export const SituasjonQA: FunctionComponent<SituasjonQAProps> = ({ situasjonQAState, dispatch }) => {

    const {forutsigbar, kjent, tilrettelagt} = situasjonQAState as {[key: string]: SvarType};

    const callbackIntercept = (type: keyof SituasjonQAState, label: string) => (
        svarValue: SvarType
    ) => {
        logEvent('knapp', { label: label, funksjon: 'svar__radio', svar: svarValue });
        dispatch({type: type, payload: svarValue});
    };
    return (
        <div className={classNames('situasjonqa', 'situasjonqa__innhold-no-print')}>
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
                callback={callbackIntercept('forutsigbar','forutsigbar-spørsmål')}
                svar={forutsigbar}
                ariaTittel={
                    'Bidro sykefraværsrutinene til forutsigbarhet rundt oppgaver og ansvar?'
                }
            />
            {forutsigbar === 'ja' && <ForutsigbarInfopanelSvarJa />}
            {forutsigbar === 'nei' && <ForutsigbarInfopanelSvarNei />}
            <hr aria-label={''} className="skillelinje" />
            <Undertittel className="situasjonqa__undertittel">
                Var rutinene kjent for både deg og medarbeideren i forkant av samtalen?
            </Undertittel>
            <Svar
                name="kjent"
                callback={callbackIntercept('kjent', 'kjent-spørsmål')}
                svar={kjent}
                ariaTittel={'Var rutinene kjent i forkant av samtalen?'}
            />
            {kjent === 'ja' && <KjentInfopanelSvarJa />}
            {kjent === 'nei' && <KjentInfopanelSvarNei />}
            <hr aria-label={''} className="skillelinje" />
            <Undertittel className="situasjonqa__undertittel">
                Kjente du og medarbeideren til tilretteleggingsmuligheter på egen arbeidsplass?
            </Undertittel>
            <Svar
                name="tillrettelagt"
                callback={callbackIntercept('tilrettelagt', 'tilrettelagt-spørsmål')}
                svar={tilrettelagt}
                ariaTittel={
                    'Kjente du og medarbeideren til tilretteleggingsmuligheter på egen arbeidsplass?'
                }
            />
            {tilrettelagt === 'ja' && <TillrettelagtInfopanelSvarJa />}
            {tilrettelagt === 'nei' && <TillrettelagtInfopanelSvarNei />}
            <hr aria-label={''} className="skillelinje" />
            {(forutsigbar === 'nei' || kjent === 'nei' || tilrettelagt === 'nei') && (
                <InfoPanelEnNei />
            )}
        </div>
    );
};
