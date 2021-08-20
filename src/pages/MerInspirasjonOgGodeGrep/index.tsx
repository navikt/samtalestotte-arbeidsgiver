import EnkleTipsForDigitaleSamtaler from './EnkleTipsForDigitaleSamtaler';
import GodeGrepForAByggeRelasjoner from './GodeGrepForAByggeRelasjoner';
import TipsOmTilrettelegging from './TipsOmTilrettelegging';
import { Title } from '@navikt/ds-react';
import {breakBeforePage, marginBottom1Rem, marginTop2Rem} from '../../utils/fellesStiler';
import classNames from 'classnames';

const MerInspirasjonOgGodeGrep = ({className}: {className?: string}) => {
    return <section className={classNames(breakBeforePage, className)}>
        <Title className={classNames(marginTop2Rem, marginBottom1Rem)} size={'l'} level={2}>
            Mer inspirasjon og gode grep
        </Title>
        <EnkleTipsForDigitaleSamtaler/>
        <GodeGrepForAByggeRelasjoner/>
        <TipsOmTilrettelegging/>
    </section>
};

export default MerInspirasjonOgGodeGrep;