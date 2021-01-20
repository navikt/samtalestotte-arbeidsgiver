import React, {FunctionComponent} from 'react';

interface Props {
    pathname: string;
    className?: string;
    onClick?: (e: any) => any;
    ariaCurrentLocation?: boolean;
}

const InternLenke: FunctionComponent<Props> = (props) => {

    return (
        <div>
           test
        </div>
    );
};

export default InternLenke;
