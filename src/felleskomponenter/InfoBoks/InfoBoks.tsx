import * as React from 'react';
import { Heading } from '@navikt/ds-react';
import fellesStiler from '../../utils/fellesStiler.module.css';

export const InfoBoks: React.FC<{
    overskrift?: string;
}> = (props) => (
    <div className={fellesStiler.graAvrundetBoks}>
        <Heading size={'small'} level={'5'} className={fellesStiler.marginTop1Rem}>
            {props.overskrift}
        </Heading>
        {props.children}
    </div>
);
