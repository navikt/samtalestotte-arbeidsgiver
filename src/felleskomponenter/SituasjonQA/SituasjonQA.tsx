import { FunctionComponent, useState } from 'react';
import { Systemtittel, UndertekstBold, Undertittel } from 'nav-frontend-typografi';
import './SituasjonQA.less';
import { SlikKanDisseSpørsmåleneHjelpeDeg } from './SlikKanDisseSpørsmåleneHjelpeDeg/SlikKanDisseSpørsmåleneHjelpeDeg';
import { Svar, SvarType } from './Svar/Svar';
import Panel from 'nav-frontend-paneler';
import classNames from 'classnames';
import Lenke from 'nav-frontend-lenker';

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
                    <span className="bold">Tips:</span> Evaluering av rutiner bør settes inn i deres
                    plan for å forebygge sykefravær slik at du kan dokumentere arbeidet.
                </Panel>
            )}
            {forutsigbar === 'nei' && (
                <Panel
                    border
                    className={classNames('situasjonqa__info-panel', 'situasjonqa__info-panel-nei')}
                >
                    Gode rutiner effektiviserer arbeidet og skaper forutsigbarhet. Rutiner bør
                    evalueres og justeres hvis de ikke gir ønsket verdi. <br />
                    <br />
                    <span className="bold">Tips:</span> Arbeidet med rutiner bør settes inn i deres
                    plan for å forebygge sykefravær slik at du kan dokumentere arbeidet.
                    <br />
                    <br />
                    <span className="bold">Slik kan du evaluere rutinene</span>
                    <br />
                    <Lenke
                        href={
                            'https://www.idebanken.org/kloke-grep/artikler/sjekk-kvaliteten-pa-sykefravaersrutinene'
                        }
                    >
                        https://www.idebanken.org/kloke-grep/artikler/sjekk-kvaliteten-pa-sykefravaersrutinene
                    </Lenke>
                    <br />
                    <br />
                    <span className="bold">Slik kan du utarbeide sykefraværsrutiner</span>
                    <br />
                    <Lenke href="https://www.idebanken.org/kloke-grep/artikler/rutiner-og-retningslinjer-for-sykefravaersoppfolging">
                        https://www.idebanken.org/kloke-grep/artikler/rutiner-og-retningslinjer-for-sykefravaersoppfolging
                    </Lenke>
                </Panel>
            )}
            <Undertittel className="situasjonqa__undertittel">
                Er rutinene kjent for både deg og medarbeideren i forkant av samtalen?
            </Undertittel>
            <Svar name="kjent" callback={setKjent} svar={kjent} />
            {kjent === 'ja' && (
                <Panel
                    border
                    className={classNames('situasjonqa__info-panel', 'situasjonqa__info-panel-ja')}
                >
                    Fint. Det er lurt at rutinene er kjent blant alle.
                </Panel>
            )}
            {kjent === 'nei' && (
                <Panel
                    border
                    className={classNames('situasjonqa__info-panel', 'situasjonqa__info-panel-nei')}
                >
                    Mange har gode rutiner som ledere eller medarbeidere ikke kjenner så godt til,
                    kanskje fordi det er lenge siden de var i bruk? Rutiner bør revideres og
                    repeteres regelmessig. <br />
                    <br />
                    <span className="bold">Tips:</span> Arbeidet med rutiner bør settes inn i deres
                    plan for å forebygge sykefravær slik at du kan dokumentere arbeidet.
                    <br />
                </Panel>
            )}
            <Undertittel className="situasjonqa__undertittel">
                Kjenner du og medarbeideren til tilretteleggingsmuligheter på egen arbeidsplass?
            </Undertittel>
            <Svar name="tillrettelagt" callback={setTillrettelagt} svar={tillrettelagt} />
            {tillrettelagt === 'ja' && (
                <Panel
                    border
                    className={classNames('situasjonqa__info-panel', 'situasjonqa__info-panel-ja')}
                >
                    Fint. Oversikt over tilretteleggingsmuligheter er et godt utgangspunkt for å
                    finne gode løsninger.
                    <br />
                    <span className="bold">Tips: </span>husker dere å dele med sykmelder?
                </Panel>
            )}
            {tillrettelagt === 'nei' && (
                <Panel
                    border
                    className={classNames('situasjonqa__info-panel', 'situasjonqa__info-panel-nei')}
                >
                    Hvis du og medarbeideren er godt kjent med hvilke muligheter for tilrettelegging
                    som finnes på deres arbeidsplass, kan det bli enklere å finne gode løsninger i
                    oppfølgingssamtaler.
                    <br />
                    <br />
                    <span className="bold">
                        Slik kan du utarbeide liste med tilretteleggingsmuligheter:
                    </span>
                    <br />
                    <Lenke href="https://www.idebanken.org/kloke-grep/artikler/slik-lykkes-dere-med-tilrettelegging-pa-arbeidsplassen">
                        https://www.idebanken.org/kloke-grep/artikler/slik-lykkes-dere-med-tilrettelegging-pa-arbeidsplassen
                    </Lenke>
                    <br />
                </Panel>
            )}
            {(forutsigbar === 'nei' || kjent === 'nei' || tillrettelagt === 'nei') && (
                <Panel
                    border
                    className={classNames(
                        'situasjonqa__info-panel',
                        'situasjonqa__info-panel-en-nei'
                    )}
                >
                    <span className="bold">Visste du?</span>
                    <br />
                    NAV hjelper virksomheter med å forebygge sykefravær.
                    <br />
                    Vi tilbyr digitale tjenester og kan også gi rådgivning hos dere på
                    arbeidsplassen.
                    <br />
                    <br />
                    Les mer om tjenestene og{' '}
                    <Lenke href="kommer">hvordan du kontakter NAV for å forebygge sykefravær</Lenke>
                    <br />
                </Panel>
            )}
        </div>
    );
};
