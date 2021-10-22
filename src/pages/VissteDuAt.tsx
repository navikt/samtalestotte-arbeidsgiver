import Information from '../felleskomponenter/Ikoner/Information';
import { FOREBYGGE_SYKEFRAVAER, KONTAKT_OSS } from '../resources/urls';
import LoggbarLenke from '../felleskomponenter/LoggbarLenke/LoggbarLenke';
import { css } from 'linaria';
import {
    breakBeforePage,
    marginBottom1Rem,
    marginTop0Rem,
    marginTop4Rem,
} from '../utils/fellesStiler';
import { Heading } from '@navikt/ds-react';
import classNames from 'classnames';

const VissteDuAt = ({ className }: { className?: string }) => {
    return (
        <div className={classNames(visteDuContainer, marginTop4Rem, breakBeforePage, className)}>
            <Heading className={visteDuHeader} size={'medium'} level={'3'}>
                Visste du at NAV hjelper virksomheter med å forebygge sykefravær?
            </Heading>
            <Information className={visteDuIcon} width={'61px'} height={'61px'} />
            <p className={classNames(visteDuParagraf, marginTop0Rem)}>
                NAV hjelper virksomheter med å forebygge sykefravær. Du får digitale tjenester og
                veiledning for å gjennomføre enkeltsamtaler. NAV kan også gi mer omfattende
                rådgivning hos dere på arbeidsplassen.
            </p>
            <LoggbarLenke
                className={classNames(visteDuLink, marginBottom1Rem, marginTop0Rem)}
                href={KONTAKT_OSS}
            >
                Kontakt NAV
            </LoggbarLenke>
            <LoggbarLenke
                className={classNames(visteDuLink, marginTop0Rem)}
                href={FOREBYGGE_SYKEFRAVAER}
            >
                Les mer om NAVs tjenester for å forebygge sykefravær.
            </LoggbarLenke>
        </div>
    );
};

export default VissteDuAt;


/*** STYLES */
const visteDuContainer = css`
    border-radius: 10px;
    background: #FAFAFA;
    border: 1px solid black;
    padding: 2em;
    display: grid;
    grid-template-columns: auto 1fr;
    grid-template-rows: auto;
    grid-template-areas:
    "header header"
    "ikon paragraf"
    ". link"
    ". link"
    ;
`

const visteDuHeader = css`
    grid-area: header;
    margin-top: 0;
    margin-bottom: 0.75em;
`;

const visteDuIcon = css`
  grid-area: ikon;
  margin-right: 1rem;
`

const visteDuParagraf = css`
  grid-area: paragraf;
`

const visteDuLink = css`
  grid-column: 2;
`