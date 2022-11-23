import fellesStiler from '../utils/fellesStiler.module.css';
import classNames from 'classnames';
import React from 'react';

interface Props {
    className?: string;
}

const Element: React.FC<Props> = (props) => (
    <div className={classNames(fellesStiler.marginTop05Rem, props.className)}>
        <li>{props.children}</li>
    </div>
);

export const Liste: React.FC<Props> & { Element: typeof Element } = (props) => {
    return (
        <ul className={classNames(fellesStiler.marginBottom2Rem, props.className)}>
            {props.children}
        </ul>
    );
};

Liste.Element = Element;
