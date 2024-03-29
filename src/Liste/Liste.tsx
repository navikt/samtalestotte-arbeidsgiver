import fellesStiler from '../utils/fellesStiler.module.css';
import classNames from 'classnames';
import React, { ReactNode } from 'react';

interface Props {
    className?: string;
    children: ReactNode;
}

const Element: React.FC<Props> = (props) => (
    <li className={classNames(fellesStiler.marginTop03Rem, props.className)}>{props.children}</li>
);

export const Liste: React.FC<Props> & { Element: typeof Element } = (props) => {
    return (
        <ul className={classNames(fellesStiler.marginBottom2Rem, props.className)}>
            {props.children}
        </ul>
    );
};

Liste.Element = Element;
