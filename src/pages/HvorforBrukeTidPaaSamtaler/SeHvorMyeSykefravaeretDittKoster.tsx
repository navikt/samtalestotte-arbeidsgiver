import { LenkepanelBase } from 'nav-frontend-lenkepanel';
import Locked from '../../felleskomponenter/Ikoner/Locked';
import Calculator from '../../felleskomponenter/Ikoner/Calculator';
import './SeHvorMyeSykefravaeretDittKoster.less';
import { MINSIDE_ARBEIDSGIVER } from '../../resources/urls';


const SeHvorMyeSykefravaeretDittKoster = () => {
    return <LenkepanelBase className={"lenkepanel-sykefravaer-kalkulator"} href={MINSIDE_ARBEIDSGIVER}>
        <div className={"lenkepanel-sykefravaer-child-wrapper"}>
            <Calculator className={"lenkepanel-sykefravaer-ikon"} height={"44px"} width={"44px"}/>
            <p>Se hvor mye sykefraværet ditt koster</p>
            <div>
                <span>Gå til kalkulatoren</span>
                <span className={"lenkepanel-sykefravaer-require-login"}><Locked/> Krever innlogging</span>
            </div>
        </div>
    </LenkepanelBase>
}

export default SeHvorMyeSykefravaeretDittKoster