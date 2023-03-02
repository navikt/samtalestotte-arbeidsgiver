import {DEV_GCP, getMiljø, LABS_GCP, LOCAL, MILJØ, PROD_GCP} from "./miljøUtils";
import {z} from "zod"
import {logger, predefinerteFeilmeldinger} from "./logger";
import {setBreadcrumbs, Props} from "@navikt/nav-dekoratoren-moduler";
import {
    AUTH_URLS,
    FOREBYGGE_FRAVÆR_URLS,
    MINSIDE_ARBEIDSGIVER_URLS,
    SAMTALESTOTTE_URLS
} from "./konstanter";

export const INNLOGGET = "INNLOGGET";
export const UINNLOGGET = "UINNLOGGET";
export type InnloggetStatus = typeof INNLOGGET | typeof UINNLOGGET

const authSchema = z.object({
    authenticated: z.boolean()
})

function getMinSideArbeidsgiverBreadcrumb(miljø: MILJØ) {
    const title = "Min side – arbeidsgiver";
    switch (miljø) {
        case LOCAL: return { url: MINSIDE_ARBEIDSGIVER_URLS.LOCAL, title };
        case LABS_GCP: return { url: MINSIDE_ARBEIDSGIVER_URLS.LABS_GCP, title };
        case DEV_GCP: return { url: MINSIDE_ARBEIDSGIVER_URLS.DEV_GCP, title };
        case PROD_GCP: return { url: MINSIDE_ARBEIDSGIVER_URLS.PROD_GCP, title };
        default: exhaustiveMatchingGuard(miljø)
    }
}

function getForebyggeFraværBreadcrumb(miljø: MILJØ) {
    const title = "Forebygge fravær";
    switch (miljø) {
        case LOCAL: return { url: FOREBYGGE_FRAVÆR_URLS.LOCAL, title };
        case LABS_GCP: return { url: FOREBYGGE_FRAVÆR_URLS.LABS_GCP, title };
        case DEV_GCP: return { url: FOREBYGGE_FRAVÆR_URLS.DEV_GCP, title };
        case PROD_GCP: return { url: FOREBYGGE_FRAVÆR_URLS.PROD_GCP, title };
        default: exhaustiveMatchingGuard(miljø)
    }
}

function getSamtalestøtteBreadcrumb(miljø: MILJØ) {
    const title = "Samtalestotte";
    switch (miljø) {
        case LOCAL: return { url: SAMTALESTOTTE_URLS.LOCAL, title };
        case LABS_GCP: return { url: SAMTALESTOTTE_URLS.LABS_GCP, title };
        case DEV_GCP: return { url: SAMTALESTOTTE_URLS.DEV_GCP, title };
        case PROD_GCP: return { url: SAMTALESTOTTE_URLS.PROD_GCP, title };
        default: exhaustiveMatchingGuard(miljø)
    }
}

function exhaustiveMatchingGuard(_:never): never {
    throw new Error("Du har sannsynligvis glemt å implementere en case eller break i en switch statement.")
}

function getAuthURL(miljø: MILJØ) {
    switch (miljø) {
        case LOCAL: return AUTH_URLS.LOCAL;
        case LABS_GCP: return AUTH_URLS.LABS_GCP;
        case DEV_GCP: return AUTH_URLS.DEV_GCP;
        case PROD_GCP: return AUTH_URLS.PROD_GCP;
        default: exhaustiveMatchingGuard(miljø)
    }
}

export function getBreadcrumbs(miljø: MILJØ, innlogget?: InnloggetStatus): Props["breadcrumbs"] {
    if(innlogget === INNLOGGET){
        return [
            getMinSideArbeidsgiverBreadcrumb(miljø),
            getForebyggeFraværBreadcrumb(miljø),
            getSamtalestøtteBreadcrumb(miljø)
        ]
    }
    return [ getSamtalestøtteBreadcrumb(miljø) ]
}

async function getAuthStatus(authURL: string): Promise<boolean> {
    try{
        return await fetch(authURL,{credentials: "include"})
            .then(res => {
                console.log(res)
                return res.json()})
            .then(json => authSchema.parse(json).authenticated)
    } catch (error) {
        logger.error(predefinerteFeilmeldinger.feilVedNettverkskall);
        return false;
    }
}
export async function setSamtalestotteBreadcrumbs(): Promise<void> {
    const miljø = getMiljø();
    const authURL = getAuthURL(miljø);
    if(authURL === undefined) return;

    const innlogget = await getAuthStatus(authURL)

    if(!innlogget) return;
    const breadcrumbs = getBreadcrumbs(miljø, INNLOGGET);

    if(breadcrumbs) setBreadcrumbs(breadcrumbs);
}