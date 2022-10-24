import Information from '../felleskomponenter/Ikoner/Information';
import { FOREBYGGE_SYKEFRAVAER, KONTAKT_OSS } from '../resources/urls';
import LoggbarLenke from '../felleskomponenter/LoggbarLenke/LoggbarLenke';
import styles from './VissteDuAt.module.css';
import fellesStiler from '../utils/fellesStiler.module.css';
import { Heading } from '@navikt/ds-react';
import classNames from 'classnames';

const VisteDuAt = ({ className }: { className?: string }) => {
    return (
        <div className={classNames(styles.visteDuContainer, fellesStiler.marginTop4Rem, fellesStiler.breakBeforePage, className)}>
            <Heading className={styles.visteDuHeader} size={'medium'} level={'3'}>
                Visste du at NAV hjelper virksomheter med å forebygge sykefravær?
            </Heading>
            <Information className={styles.visteDuIcon} width={'61px'} height={'61px'} />
            <p className={classNames(styles.visteDuParagraf, fellesStiler.marginTop0Rem)}>
                NAV hjelper virksomheter med å forebygge sykefravær. Du får digitale tjenester og
                veiledning for å gjennomføre enkeltsamtaler. NAV kan også gi mer omfattende
                rådgivning hos dere på arbeidsplassen.
            </p>
            <LoggbarLenke
                className={classNames(styles.visteDuLink, fellesStiler.marginBottom1Rem, fellesStiler.marginTop0Rem)}
                href={KONTAKT_OSS}
            >
                Kontakt NAV
            </LoggbarLenke>
            <LoggbarLenke
                className={classNames(styles.visteDuLink, fellesStiler.marginTop0Rem)}
                href={FOREBYGGE_SYKEFRAVAER}
            >
                Les mer om NAVs tjenester for å forebygge sykefravær.
            </LoggbarLenke>
        </div>
    );
};

export default VisteDuAt;
