import InfoPanelProps from '../../felleskomponenter/InfoPanel/InfoPanelProps';
import { EkspanderbartInfopanel } from '../../felleskomponenter/EkspanderbartInfopanel/EkspanderbartInfopanel';
import {
    DEN_VIKTIGE_SAMTALEN,
    GODE_GREP_FOR_AA_BYGGE_RELASJONER,
    KVALITETEN_PAA_SYKEFRAVAERSRUTINENE,
    RETTNINGSLINJER_FOR_SYKEFRAVAERSOPPFOLGNING,
} from '../../resources/urls';
import LoggbarLenke from '../../felleskomponenter/LoggbarLenke/LoggbarLenke';
import { Title } from '@navikt/ds-react';
import {
    graAvrundetBoks, horizontalLine,
    infoPanelKolonner, marginBottom025rem, marginBottom0Rem,
    marginBottom1Rem,
    marginBottom3Rem, marginTop0Rem,
    spacedList,
} from '../../utils/fellesStiler';
import classNames from 'classnames';

const SkapeGodeRammer = ({ callback }: InfoPanelProps) => {
    return (
        <EkspanderbartInfopanel
            unikId={'skapeGodeRammer'}
            tittel={'Skape gode rammer'}
            panelLestSituasjon={'ulest'}
            callBack={callback}
        >
            <Title size={'m'} level={3}>Gode samtaler forutsetter trygghet</Title>
            <p>
                Trygghet oppnår du når det er en god relasjon mellom deg og medarbeiderne, og at rammene
                rundt samtalen er forutsigbare for alle. Å vise forståelse i møte med medarbeider setter
                gode forutsetninger for samarbeidet videre.
            </p>
            <ul className={marginBottom3Rem}>
                <li>Hvordan ville du selv likt å bli møtt?</li>
                <li>
                    Hvordan er din relasjon og holdning til medarbeideren, og hvordan kan dette
                    påvirke dialogen?
                </li>
                <li>Hvor trygg føler du deg på å gjennomføre samtaler?</li>
            </ul>
            <Title className={marginBottom025rem} size={'s'} level={4}>
                Dette kan du gjøre:
            </Title>
            <div className={classNames(infoPanelKolonner, marginBottom1Rem)}>
                <div className={graAvrundetBoks}>
                    <Title className={marginBottom0Rem} size={'s'} level={4}>
                        på kort sikt:
                    </Title>
                    <ul className={spacedList}>
                        <li>
                            Planlegg bruk av samtaleteknikker for å sikre medvirkning i samtalen.{' '}
                            <LoggbarLenke href={DEN_VIKTIGE_SAMTALEN}>
                                Les mer i heftet “Den viktige samtalen” hos idebanken.
                            </LoggbarLenke>
                        </li>
                        <li>
                            Be om veiledning før samtalen. Veiledning kan du få fra kollegaer,
                            bedriftshelsetjenesten, NAV eller andre med kompetanse på samtaler.
                        </li>
                    </ul>
                </div>
                <div className={graAvrundetBoks}>
                    <Title size={'s'} level={4}>over tid og som kontinuerlig arbeid:</Title>
                    <ul className={spacedList}>
                        <li>
                            Lær mer om samtaler og samtaleteknikker.{' '}
                            <LoggbarLenke href={DEN_VIKTIGE_SAMTALEN}>
                                Les mer i heftet “Den viktige samtalen” hos idebanken.
                            </LoggbarLenke>
                        </li>
                        <li>
                            Jobb aktivt med å bygge trygge relasjoner til alle dine medarbeidere.{' '}
                            <LoggbarLenke href={GODE_GREP_FOR_AA_BYGGE_RELASJONER}>
                                Se “Gode grep for å bygge relasjoner”
                            </LoggbarLenke>
                            {" "}lengre ned på siden.
                        </li>
                        <li>Tren på å gjennomføre samtaler, og be om tilbakemeldinger.</li>
                        <li>Del erfaringer og få veiledning av andre lederkollegaer.</li>
                        <li>Delta på kurs.</li>
                    </ul>
                </div>
            </div>
            <div className={horizontalLine} />
            <Title size={'m'} level={3}>
                Gode rutiner effektiviserer arbeidet og skaper forutsigbarhet for deg og din
                medarbeider.
            </Title>
            <p>Rutiner bør evalueres og justeres hvis de ikke bidrar til forutsigbarhet.</p>
            <ul className={marginBottom3Rem}>
                <li>
                    Hvordan bidrar sykefraværsrutinene i din virksomhet til forutsigbarhet rundt
                    oppgaver og ansvar?
                </li>
            </ul>
            <Title className={marginBottom025rem} size={'s'} level={4}>
                Dette kan du gjøre:
            </Title>
            <div className={classNames(infoPanelKolonner, marginBottom1Rem)}>
                <div className={graAvrundetBoks}>
                    <Title size={'s'} level={4}>
                        på kort sikt:
                    </Title>
                    <ul className={spacedList}>
                        <li>
                            Bruk sykefraværsrutinene i din virksomhet, for å skape forutsigbarhet
                            for deg og medarbeideren.
                        </li>
                        <li>
                            Finn ut om du kan få hjelp av noen i din virksomhet eller i interne
                            systemer.
                        </li>
                    </ul>
                </div>
                <div className={graAvrundetBoks}>
                    <Title className={marginBottom0Rem} size={'s'} level={4}>
                        over tid og som kontinuerlig arbeid:
                    </Title>
                    <ul className={spacedList}>
                        <li>
                            Evaluer rutinene dine.{' '}
                            <LoggbarLenke href={KVALITETEN_PAA_SYKEFRAVAERSRUTINENE}>
                                Gå til sjekkliste hos idébanken.
                            </LoggbarLenke>
                        </li>
                        <li>
                            Utarbeid sykefraværsrutiner.{' '}
                            <LoggbarLenke href={RETTNINGSLINJER_FOR_SYKEFRAVAERSOPPFOLGNING}>
                                Les mer om hvordan dere kan lage rutiner hos Idébanken.
                            </LoggbarLenke>
                        </li>
                        <li>Informer alle ansatte om rutinene og hvor de finner dem.</li>
                    </ul>
                </div>
            </div>
            <Title className={marginBottom0Rem} size={'s'} level={4}>
                Tips:
            </Title>
            <p className={marginTop0Rem}>
                Arbeidet med rutiner bør settes inn i arbeidsplassens plan for å forebygge
                sykefravær slik at du kan dokumentere arbeidet.
            </p>
        </EkspanderbartInfopanel>
    );
};

export default SkapeGodeRammer;
