import classNames from 'classnames';
import Panel from 'nav-frontend-paneler';
import { FunctionComponent } from 'react';
import LoggbarLenke from '../../LoggbarLenke/LoggbarLenke';

export const ForutsigbarInfopanelSvarJa: FunctionComponent = () => (
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
);

export const ForutsigbarInfopanelSvarNei: FunctionComponent = () => (
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
        <LoggbarLenke href='https://www.idebanken.org/kloke-grep/artikler/sjekk-kvaliteten-pa-sykefravaersrutinene'>
            https://www.idebanken.org/kloke-grep/artikler/sjekk-kvaliteten-pa-sykefravaersrutinene
        </LoggbarLenke>
        <br />
        <br />
        <span className="bold">Slik kan du utarbeide sykefraværsrutiner</span>
        <br />
        <LoggbarLenke href="https://www.idebanken.org/kloke-grep/artikler/rutiner-og-retningslinjer-for-sykefravaersoppfolging">
            https://www.idebanken.org/kloke-grep/artikler/rutiner-og-retningslinjer-for-sykefravaersoppfolging
        </LoggbarLenke>
    </Panel>
);

export const KjentInfopanelSvarJa: FunctionComponent = () => (
    <Panel
        border
        className={classNames('situasjonqa__info-panel', 'situasjonqa__info-panel-ja')}
    >
        Fint. Det er lurt at rutinene er kjent blant alle.
    </Panel>
);

export const KjentInfopanelSvarNei: FunctionComponent = () => (
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
);

export const TillrettelagtInfopanelSvarJa: FunctionComponent = () => (
    <Panel
        border
        className={classNames('situasjonqa__info-panel', 'situasjonqa__info-panel-ja')}
    >
        Fint. Oversikt over tilretteleggingsmuligheter er et godt utgangspunkt for å
        finne gode løsninger.
        <br />
        <span className="bold">Tips: </span>husker dere å dele med sykmelder?
    </Panel>
);

export const TillrettelagtInfopanelSvarNei: FunctionComponent = () => (
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
        <LoggbarLenke href="https://www.idebanken.org/kloke-grep/artikler/slik-lykkes-dere-med-tilrettelegging-pa-arbeidsplassen">
            https://www.idebanken.org/kloke-grep/artikler/slik-lykkes-dere-med-tilrettelegging-pa-arbeidsplassen
        </LoggbarLenke>
        <br />
    </Panel>
);

export const InfoPanelEnNei: FunctionComponent = () => (
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
        {/*
        TODO skaff en fungerende url for denne lenken
        <br />
        Les mer om tjenestene og{' '}
        <LoggbarLenke href="kommer">
            hvordan du kontakter NAV for å forebygge sykefravær
        </LoggbarLenke>
        <br />
        */}
    </Panel>
);
