import { faro, initializeFaro, getWebInstrumentations } from '@grafana/faro-web-sdk';

export function doInitializeFaro(grafanaAgentUrl: string) {
    if (Object.keys(faro).length === 0 && grafanaAgentUrl?.length > 0) {
        initializeFaro({
            url: grafanaAgentUrl,
            app: {
                name: 'samtalestotte-arbeidsgiver',
            },
            instrumentations: [...getWebInstrumentations()],
        });
    }
}
