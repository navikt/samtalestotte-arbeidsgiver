import Information from '../felleskomponenter/Ikoner/Information';
import "./VisteDuAt.less";

const VisteDuAt = () => (
    <div
        className={"viste-du-container margin-topp-4rem"}
    >
        <h3 className={"viste-du-header"}>
            Visste du at NAV hjelper virksomheter med å forebygge sykefravær?
        </h3>
        <Information className={"viste-du-icon"} width={"4rem"} height={"4rem"}/>

        <p className={"viste-du-paragraf"}>
            NAV hjelper virksomheter med å forebygge sykefravær.
            Du får digitale tjenester og veiledning for å gjennomføre enkeltsamtaler.
            NAV kan også gi mer omfattende rådgivning hos dere på arbeidsplassen.
        </p>
        <a className={"viste-du-link"} href={"#"}>Kontakt NAV</a>
        <a className={"viste-du-link"} href={"#"}>Les mer om NAVs tjenester for å forebygge sykefravær.</a>
    </div>
)

export default VisteDuAt;