export type ENVUrls = {
    MINSIDE_URL: string,
    FOREBYGGE_URL: string,
    SAMTALESTOTTE_URL: string,
    AUTH_URL: string,
    GRAFANA_AGENT_COLLECTOR_URL: string
}
export function getUrlsFromEnv(): ENVUrls {
    return {
        MINSIDE_URL : process.env.MINSIDE_ARBEIDSGIVER_URL || "",
        FOREBYGGE_URL : process.env.FOREBYGGE_FRAVAR_URL || "",
        SAMTALESTOTTE_URL :  process.env.SAMTALESTOTTE_URL || "",
        AUTH_URL : process.env.AUTH_URL || "",
        GRAFANA_AGENT_COLLECTOR_URL: process.env.GRAFANA_AGENT_COLLECTOR_URL || "",
    }
}