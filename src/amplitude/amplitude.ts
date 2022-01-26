import amplitude from 'amplitude-js';

let initiated = false;

export default function logEvent(eventName: string, data?: any): Promise<any> {
    if (!initiated) {
        const amplitudeConfig = {
            apiEndpoint: 'amplitude.nav.no/collect-auto',
            saveEvents: false,
            includeUtm: true,
            includeReferrer: true,
            platform: window.location.toString(),
        };
        amplitude.getInstance().init('default', undefined, amplitudeConfig);
        initiated = true;
    }
    return new Promise(function (resolve) {
        amplitude
            .getInstance()
            .logEvent(eventName, { app: 'samtalestøtte-arbeidsgiver', ...data }, resolve);
    });
}
