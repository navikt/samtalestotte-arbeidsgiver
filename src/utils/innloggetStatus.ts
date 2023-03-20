import { z } from "zod"
import { logger, predefinerteFeilmeldinger } from "./logger";
import { setBreadcrumbs, Props } from "@navikt/nav-dekoratoren-moduler";
import { isNonEmptyString } from './stringUtils';

export const INNLOGGET = "INNLOGGET";
export const UINNLOGGET = "UINNLOGGET";
export type InnloggetStatus = typeof INNLOGGET | typeof UINNLOGGET

const MINSIDE_BREADCRUMB = {
    title: "Min side – arbeidsgiver",
    url: process.env.NEXT_PUBLIC_MINSIDE_ARBEIDSGIVER_URL || "#"
}
const FOREBYGGE_FRAVAR_BREADCRUMB = {
    title: "Forebygge fravær",
    url: process.env.NEXT_PUBLIC_FOREBYGGE_FRAVAR_URL || "#"
}
const SAMTALESTOTTE_BREADCRUMB = {
    title: "Samtalestotte",
    url: process.env.NEXT_PUBLIC_SAMTALESTOTTE_URL || "#",
}

const AUTH_URL = process.env.NEXT_PUBLIC_AUTH_URL;

const authSchema = z.object({
    authenticated: z.boolean()
})

export function getBreadcrumbs(innlogget?: InnloggetStatus): Props["breadcrumbs"] {
    if(innlogget === INNLOGGET){
        return [
            MINSIDE_BREADCRUMB,
            FOREBYGGE_FRAVAR_BREADCRUMB,
            SAMTALESTOTTE_BREADCRUMB
        ];
    }
    return [ SAMTALESTOTTE_BREADCRUMB ];
}

async function getAuthStatus(authURL: string): Promise<boolean> {
    try{
        return await fetch(authURL,{credentials: "include"})
            .then(res => {
                return res.json()})
            .then(json => authSchema.parse(json).authenticated)
    } catch (error) {
        logger.error(predefinerteFeilmeldinger.feilVedNettverkskall);
        return false;
    }
}
export async function setSamtalestotteBreadcrumbs(): Promise<void> {
    if(!isNonEmptyString(AUTH_URL)) return;

    const innlogget = await getAuthStatus(AUTH_URL)

    if(!innlogget) return;
    const breadcrumbs = getBreadcrumbs(INNLOGGET);

    if(breadcrumbs) setBreadcrumbs(breadcrumbs);
}