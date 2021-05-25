import InfoPanelProps from '../InfoPanelProps';
import { EkspanderbartInfopanel } from '../../EkspanderbartInfopanel/EkspanderbartInfopanel';

const SkapeGodeRammer = ({callback}: InfoPanelProps) => {
    return <EkspanderbartInfopanel
        unikId={"skapeGodeRammer"}
        tittel={"Skape gode rammer"}
        panelLestSituasjon={"ulest"}
        callBack={callback}
    >
        <h3>Gode samtaler forutsetter trygghet</h3>
        <p>
            Trygghet oppnår du når det er en god relasjon mellom deg og medarbeiderne og rammene rundt
            samtalen er forutsigbare for alle.
        </p>
        <ul>
            <li>
                Hvordan ville du selv like å bli møtt?
            </li>
            <li>
                Hvordan er din relasjon og holdning til medarbeideren, og hvordan kan dette påvirke
                dialogen?
            </li>
            <li>
                Hvor trygg føler du deg på å gjennomføre samtaler?
            </li>
        </ul>
        <strong>Dette kan du gjøre:</strong>
        <div className={"infoPanel-kolonner"}>
            <div className={"gra-avrundet-boks"}>
                <h4>
                    på kort sikt:
                </h4>
                <ul>
                    <li>
                        Planlegg bruk av samtaleteknikker for å sikre medvirkning i samtalen. Les mer i
                        heftet “Den viktige samtalen” hos idebanken.
                    </li>
                    <li>
                        Be om veiledning før samtalen. Veiledning kan du få fra kollegaer,
                        bedriftshelsetjenesten, NAV eller andre med kompetanse på samtaler.
                    </li>
                </ul>
            </div>
            <div className={"gra-avrundet-boks"}>
                <h4>
                    over tid og som kontinuerlig arbeid:
                </h4>
                <ul>
                    <li>
                        Lær mer om samtaler og samtaleteknikker. Les mer i heftet “Den viktige samtalen”
                        hos idebanken.
                    </li>
                    <li>
                        Jobb aktivt med å bygge trygge relasjoner til alle dine medarbeidere. Se «Gode
                        grep for å bygge relasjoner».
                    </li>
                    <li>
                        Tren på å gjennomføre samtaler, og be om tilbakemeldinger.
                    </li>
                    <li>
                        Del erfaringer og få veiledning av andre lederkollegaer.
                    </li>
                    <li>
                        Delta på kurs.
                    </li>
                </ul>
            </div>
        </div>

        <h3>
            Gode rutiner effektiviserer arbeidet og skaper forutsigbarhet for deg og din medarbeider.
        </h3>
        <p>
            Rutiner bør evalueres og justeres hvis de ikke bidrar til forutsigbarhet.
        </p>
        <ul>
            <li>
                Hvordan bidrar sykefraværsrutinene i din virksomhet til forutsigbarhet rundt oppgaver og
                ansvar?
            </li>
        </ul>
        <strong>Dette kan du gjøre:</strong>
        <div className={"infoPanel-kolonner"}>
            <div className={"gra-avrundet-boks"}>
                <h4>
                    på kort sikt:
                </h4>
                <ul>
                    <li>
                        Bruk sykefraværsrutinene i din virksomhet, for å skape forutsigbarhet for deg og
                        medarbeideren.
                    </li>
                    <li>
                        Finn ut om du kan få hjelp av noen i din virksomhet eller i interne systemer.
                    </li>
                </ul>
            </div>
            <div className={"gra-avrundet-boks"}>
                <h4>
                    over tid og som kontinuerlig arbeid:
                </h4>
                <ul>
                    <li>
                        Evaluer rutinene dine. Gå til sjekkliste hos idébanken.
                    </li>
                    <li>
                        Utarbeid sykefraværsrutiner. Les mer om hvordan dere kan lage rutiner hos
                        Idébanken.
                    </li>
                    <li>
                        Informer alle ansatte om rutinene og hvor de finner dem.
                    </li>
                </ul>
            </div>
        </div>
        <strong>
            Tips:
        </strong>
        <p>
            Arbeidet med rutiner bør settes inn i arbeidsplassens plan for å forebygge sykefravær slik
            at du kan dokumentere arbeidet.
        </p>
    </EkspanderbartInfopanel>
};

export default SkapeGodeRammer;