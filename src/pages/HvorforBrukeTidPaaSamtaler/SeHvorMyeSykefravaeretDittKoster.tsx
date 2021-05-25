import { LenkepanelBase } from 'nav-frontend-lenkepanel';
import Locked from '../../felleskomponenter/Ikoner/Locked';
import Calculator from '../../felleskomponenter/Ikoner/Calculator';


const SeHvorMyeSykefravaeretDittKoster = () => {
    return <LenkepanelBase className={"lenkepanel-sykefravaer-kalkulator"} href={"#"}>
        <div className={"lenkepanel-sykefravaer-child-wrapper"}>
            <Calculator className={"lenkepanel-sykefravaer-ikon"} height={"3rem"} width={"3rem"}/>
            <p>Se hvor mye sykefraværet ditt koster</p>
            <span>Gå til kalkulatoren</span>
            <span><Locked /> Krever innlogging</span>
        </div>
    </LenkepanelBase>
}

export default SeHvorMyeSykefravaeretDittKoster