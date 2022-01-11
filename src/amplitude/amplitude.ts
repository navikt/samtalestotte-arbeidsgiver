import amplitude from 'amplitude-js';
let initiated = false;

const getApiKey = () => {
    return window.location.hostname === 'arbeidsgiver.nav.no'
        ? '3a6fe32c3457e77ce81c356bb14ca886'
        : '55477baea93c5227d8c0f6b813653615';
};

export default function logEvent(eventName: string, data?: any): Promise<any> {

    if (!initiated) {
        amplitude.getInstance().init(getApiKey(), '', {
            apiEndpoint: 'amplitude.nav.no/collect',
            saveEvents: false,
            includeUtm: true,
            batchEvents: false,
            includeReferrer: true,
        });
        initiated = true;
    }
    return new Promise(function (resolve) {
        amplitude
            .getInstance()
            .logEvent(eventName, { app: 'samtalestøtte-arbeidsgiver', ...data }, resolve);
    });
}
