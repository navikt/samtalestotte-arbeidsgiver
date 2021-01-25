import { FunctionComponent, ReactNode } from 'react';

interface Props {
    className: string;
}

const InfoPanel: FunctionComponent<Props> = ({ children, className }) => {
    return <div className={className}>{children}</div>;
};
