import EnkleTipsForDigitaleSamtaler from './EnkleTipsForDigitaleSamtaler';
import GodeGrepForAByggeRelasjoner from './GodeGrepForAByggeRelasjoner';
import TipsOmTilrettelegging from './TipsOmTilrettelegging';
import { Title } from '@navikt/ds-react';
import { breakBeforePage, marginBottom1Rem, marginTop4Rem } from '../../utils/styleTemplates';
import classNames from 'classnames';

const MerInspirasjonOgGodeGrep = () => {
    return <section className={breakBeforePage}>
        <Title className={classNames(marginTop4Rem, marginBottom1Rem)} size={'l'} level={2}>
            Mer inspirasjon og gode grep
        </Title>
        <EnkleTipsForDigitaleSamtaler/>
        <GodeGrepForAByggeRelasjoner/>
        <TipsOmTilrettelegging/>
    </section>
};

export default MerInspirasjonOgGodeGrep;