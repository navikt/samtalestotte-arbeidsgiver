import fellesStiler from '../utils/fellesStiler.module.css';
import classNames from 'classnames';
import React from 'react';
import { BodyLong } from '@navikt/ds-react';

interface Props {
    className?: string;
}

const Element: React.FC<Props> = (props) => (
    <li className={classNames(fellesStiler.marginTop05Rem, props.className)}>{props.children}</li>
);

export const Liste: React.FC<Props> & { Element: typeof Element } = (props) => {
    return (
        <ul className={classNames(fellesStiler.marginBottom2Rem, props.className)}>
            <BodyLong>{props.children}</BodyLong>
        </ul>
    );
};

Liste.Element = Element;
