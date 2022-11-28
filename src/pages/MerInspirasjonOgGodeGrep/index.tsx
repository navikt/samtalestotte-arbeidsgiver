import EnkleTipsForDigitaleSamtaler from './EnkleTipsForDigitaleSamtaler';
import GodeGrepForAByggeRelasjoner from './GodeGrepForAByggeRelasjoner';
import TipsOmTilrettelegging from './TipsOmTilrettelegging';
import { BodyLong, Heading } from '@navikt/ds-react';
import fellesStiler from '../../utils/fellesStiler.module.css';
import classNames from 'classnames';
import PsykiskHelsePåArbeidsplassen from './PsykiskHelsePåArbeidsplassen';

const MerInspirasjonOgGodeGrep = ({ className }: { className?: string }) => {
    return (
        <section className={classNames(fellesStiler.breakBeforePage, className)}>
            <Heading
                className={classNames(fellesStiler.marginTop4Rem, fellesStiler.marginBottom2Rem)}
                size={'large'}
                level={'2'}
            >
                Mer inspirasjon og gode grep
            </Heading>
            <BodyLong>
                <PsykiskHelsePåArbeidsplassen />
                <EnkleTipsForDigitaleSamtaler />
                <GodeGrepForAByggeRelasjoner />
                <TipsOmTilrettelegging />
            </BodyLong>
        </section>
    );
};

export default MerInspirasjonOgGodeGrep;
