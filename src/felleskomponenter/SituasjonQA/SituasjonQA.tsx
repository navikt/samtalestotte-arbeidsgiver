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
import {UseCookieVerktøy} from "../UseCookieVerktøy/UseCookieVerktøy";
import useCookie from "react-use-cookie";

export const SituasjonQA: FunctionComponent = () => {
    const [forutsigbar, setForutsigbar] = useState<SvarType>(undefined);
    const [kjent, setKjent] = useState<SvarType>(undefined);
    const [tillrettelagt, setTillrettelagt] = useState<SvarType>(undefined);
    const [userTokenForutsigbar, setUserTokenForutsigbar] = useCookie(
        'SamtalestotteArbeidsgiverSvar-forutsigbarhet',
        'undefined'
    );const [userTokenKjent, setUserTokenKjent] = useCookie(
        'SamtalestotteArbeidsgiverSvar-kjent',
        'undefined'
    );const [userTokenTilrettelagt, setUserTokentilrettelagt] = useCookie(
        'SamtalestotteArbeidsgiverSvar-tilrettelagt',
        'undefined'
    );
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
            <Svar name="forutsigbar" callback={setForutsigbar} svar={forutsigbar} cookieSvar={userTokenForutsigbar} callbackCookie={setUserTokenForutsigbar} />
            {forutsigbar === 'ja' && (
                <ForutsigbarInfopanelSvarJa />
            )}
            {forutsigbar === 'nei' && (
                <ForutsigbarInfopanelSvarNei />
            )}
            <Undertittel className="situasjonqa__undertittel">
                Var rutinene kjent for både deg og medarbeideren i forkant av samtalen?
            </Undertittel>
            <Svar name="kjent" callback={setKjent} svar={kjent} cookieSvar={userTokenKjent} callbackCookie={setUserTokenKjent} />
            {kjent === 'ja' && (
                <KjentInfopanelSvarJa />
            )}
            {kjent === 'nei' && (
                <KjentInfopanelSvarNei />
            )}
            <Undertittel className="situasjonqa__undertittel">
                Kjente du og medarbeideren til tilretteleggingsmuligheter på egen arbeidsplass?
            </Undertittel>
            <Svar name="tillrettelagt" callback={setTillrettelagt} svar={tillrettelagt} cookieSvar={userTokenTilrettelagt} callbackCookie={setUserTokentilrettelagt} />
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
