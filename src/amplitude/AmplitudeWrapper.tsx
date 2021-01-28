import { FunctionComponent, useEffect } from 'react';
import { sendEventDirekte } from './amplitude';

export interface AmplitudeEventProps {
    område: string;
    hendelse: string;
}

export const AmplitudeWrapper: FunctionComponent<AmplitudeEventProps> = (props) => {
    useEffect(() => {
        sendEventDirekte(props.område, props.hendelse);
    }, []);

    return <></>;
};
