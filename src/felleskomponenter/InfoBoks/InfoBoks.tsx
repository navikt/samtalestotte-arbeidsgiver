import * as React from 'react';
import { Heading } from '@navikt/ds-react';
import fellesStiler from '../../utils/fellesStiler.module.css';
import classNames from 'classnames';

export const InfoBoks: React.FC<{
    overskrift?: string;
}> = (props) => (
    <div
        className={classNames(
            fellesStiler.graAvrundetBoks,
            fellesStiler.marginBottom2Rem,
            fellesStiler.marginTop1Rem
        )}
    >
        <Heading
            size={'small'}
            level={'5'}
            className={classNames(fellesStiler.marginTop1Rem, fellesStiler.marginBottom1Rem)}
        >
            {props.overskrift}
        </Heading>
        {props.children}
    </div>
);
