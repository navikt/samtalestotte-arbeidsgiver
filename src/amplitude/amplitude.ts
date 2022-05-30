import amplitude from 'amplitude-js';
let initiated = false;

const getApiKey = () => {
    return window.location.hostname === 'arbeidsgiver.nav.no'
        ? 'a8243d37808422b4c768d31c88a22ef4'
        : '6ed1f00aabc6ced4fd6fcb7fcdc01b30';
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
