import EnkleTipsForDigitaleSamtaler from './EnkleTipsForDigitaleSamtaler';
import GodeGrepForAByggeRelasjoner from './GodeGrepForAByggeRelasjoner';
import TipsOmTilrettelegging from './TipsOmTilrettelegging';

const MerInspirasjonOgGodeGrep = () => {
    return <section className={"MerInspirasjonOgGodeGrep"}>
        <h2 className={"section-header margin-topp-4rem"}>
            Mer inspirasjon og gode grep
        </h2>
        <EnkleTipsForDigitaleSamtaler/>
        <GodeGrepForAByggeRelasjoner/>
        <TipsOmTilrettelegging/>
    </section>
};

export default MerInspirasjonOgGodeGrep;