import NaarKanEnSamtaleVaereAktuelt from './NaarKanEnSamtaleVaereAktuelt';
import DetteKanDuSpoerreMedarbeiderenOm from './DetteKanDuSpoerreMedarbeiderenOm';
import { LenkepanelBase } from 'nav-frontend-lenkepanel';
import Locked from '../../Ikoner/Locked';
import Suksesskriterier from './Suksesskriterier';
import { LyspæreSVG } from '../../Samtaleverktøy/LyspæreSVG';

const PlaceHolderIcon = ({className}: { className?: string }) => (
    <div className={className} style={{width: "48px", height: "48px", background:"rgba(86, 144, 162, 1)", borderRadius: "100px"}} />
)

const HvorforBrukeTidPaaSamtaler = () => {
    return <>
        <h2>
            Hvorfor bruke tid på samtaler?
        </h2>
        <p>
            Her får du som arbeidsgiver hjelp og praktiske råd for hvordan du kan fylle dine lovpålagte
            plikter innen forebygging og oppfølging av sykefravær. Du får råd om hva du kan gjøre på kort
            sikt og hva du kan gjøre på lang sikt.
        </p>
        <h3>
            Gode samtaler bidrar til:
        </h3>
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
        <p>
            Lovverk og rutiner forteller deg hva du skal gjøre for å forebygge og følge opp sykefravær.
            Gode samtaler er en metode for hvordan du fyller lovkravene, slik at de gir størst verdi for deg
            og medarbeiderne dine.
        </p>
        <NaarKanEnSamtaleVaereAktuelt callback={()=>{}} ikon={<PlaceHolderIcon />} lestIkon={<PlaceHolderIcon />}/>
        <DetteKanDuSpoerreMedarbeiderenOm callback={()=>{}} ikon={<PlaceHolderIcon />} lestIkon={<PlaceHolderIcon />} />
        <LenkepanelBase className={"lenkepanel-sykefravaer-kalkulator"} href={"#"}>
            <div className={"lenkepanel-sykefravaer-child-wrapper"}>
                <PlaceHolderIcon className={"lenkepanel-sykefravaer-ikon"} />
                <p>Se hvor mye sykefraværet ditt koster</p>
                <span>Gå til kalkulatoren</span>
                <span><Locked /> Krever innlogging</span>
            </div>
        </LenkepanelBase>
        <Suksesskriterier callback={()=>{}} ikon={<LyspæreSVG />} lestIkon={<LyspæreSVG />}/>
    </>
}

export default HvorforBrukeTidPaaSamtaler;