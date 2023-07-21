import amplitude from 'amplitude-js';

const initiated = false;

//eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function logEvent(eventName: string, data?: any): Promise<any> {
    if (!initiated) {
        amplitude.getInstance().init('default', '', {
            apiEndpoint: 'amplitude.nav.no/collect-auto',
            saveEvents: false,
            includeUtm: true,
            includeReferrer: true,
            platform: window.location.toString(),
        });
    }
    return new Promise(function (resolve) {
        amplitude
            .getInstance()
            .logEvent(eventName, {
                app: 'samtalestotte-arbeidsgiver',
                team: "teamia", ...data
            }, resolve);
    });
}

export async function logPanelÅpnetEvent(panelId: string, tekst: string) {
    await logEvent('panel åpnet', {panelId: panelId, tekst: tekst})
}