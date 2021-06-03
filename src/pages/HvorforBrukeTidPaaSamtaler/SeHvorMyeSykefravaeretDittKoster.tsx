import Locked from '../../felleskomponenter/Ikoner/Locked';
import Calculator from '../../felleskomponenter/Ikoner/Calculator';
import './SeHvorMyeSykefravaeretDittKoster.less';
import { SYKEFRAVÆRSSTATISTIKK_KALKULATOR } from '../../resources/urls';
import LoggbarLenkepanelBase from '../../felleskomponenter/LoggbarLenkepanelBase/LoggbarLenkepanelBase';

const SeHvorMyeSykefravaeretDittKoster = () => {
    const lenkeTekstConst = 'Gå til kalkulatoren';
    return (
        <LoggbarLenkepanelBase
            className={'lenkepanel-sykefravaer-kalkulator'}
            href={SYKEFRAVÆRSSTATISTIKK_KALKULATOR}
            lenketekst={lenkeTekstConst}
        >
            <div className={'lenkepanel-sykefravaer-child-wrapper'}>
                <Calculator
                    className={'lenkepanel-sykefravaer-ikon'}
                    height={'44px'}
                    width={'44px'}
                />
                <p>Se hvor mye sykefraværet ditt koster</p>
                <div>
                    <span className={'lenkepanel-sykefravaer-link-text'}>{lenkeTekstConst}</span>
                    <span className={'lenkepanel-sykefravaer-require-login'}>
                        <Locked /> Krever innlogging
                    </span>
                </div>
            </div>
        </LoggbarLenkepanelBase>
    );
};

export default SeHvorMyeSykefravaeretDittKoster;
