import amplitude from 'amplitude-js';

let initiated = false;

const AmplitudeBucket = {
    ARBEIDSGIVER_PROD: 'a8243d37808422b4c768d31c88a22ef4',
    ARBEIDSGIVER_DEV: '6ed1f00aabc6ced4fd6fcb7fcdc01b30',
};

const bucketId = () => {};

export default function logEvent(eventName: string, data?: any): Promise<any> {
    if (!initiated) {
        const bucketId =
            window.location.hostname === 'arbeidsgiver.nav.no'
                ? AmplitudeBucket.ARBEIDSGIVER_PROD
                : AmplitudeBucket.ARBEIDSGIVER_DEV;

        amplitude.getInstance().init(bucketId, '', {
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
