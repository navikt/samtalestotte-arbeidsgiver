import NaarKanEnSamtaleVaereAktuelt from './NaarKanEnSamtaleVaereAktuelt';
import DetteKanDuSpoerreMedarbeiderenOm from './DetteKanDuSpoerreMedarbeiderenOm';
import Suksesskriterier from './Suksesskriterier';
import SeHvorMyeSykefravaeretDittKoster from './SeHvorMyeSykefravaeretDittKoster';

const HvorforBrukeTidPaaSamtaler = () => {
    return <section className={"HvorforBrukeTidPaaSamtaler"}>
        <h2 className={"section-header"}>
            Hvorfor bruke tid på samtaler?
        </h2>
        <p className={"margin-bunn-2rem"}>
            Lovverk og rutiner forteller deg hva du skal gjøre for å forebygge og følge opp sykefravær.
            Gode samtaler er en metode for hvordan du fyller lovkravene, slik at de gir størst verdi for deg og medarbeiderne dine.
        </p>
        <p className={"bold-text"}>
            Gode samtaler bidrar til:
        </p>
        <ul>
            <li>
                lavt sykefravær og god lønnsomhet
            </li>
            <li>
                motiverte medarbeidere og godt arbeidsmiljø
            </li>
            <li>
                at du fyller dine lovpålagte plikter som arbeidsgiver
            </li>
        </ul>
        <p className={"margin-bunn-2rem"}>
            Lovverk og rutiner forteller deg hva du skal gjøre for å forebygge og følge opp sykefravær.
            Gode samtaler er en metode for hvordan du fyller lovkravene, slik at de gir størst verdi for deg
            og medarbeiderne dine.
        </p>
        <NaarKanEnSamtaleVaereAktuelt/>
        <DetteKanDuSpoerreMedarbeiderenOm/>
        <SeHvorMyeSykefravaeretDittKoster/>
        <Suksesskriterier/>
    </section>
}

export default HvorforBrukeTidPaaSamtaler;