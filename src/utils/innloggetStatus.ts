import { z } from "zod"
import { logger, predefinerteFeilmeldinger } from "./logger";
import { setBreadcrumbs, Props } from "@navikt/nav-dekoratoren-moduler";
import { isNonEmptyString } from './stringUtils';

export const INNLOGGET = "INNLOGGET";
export const UINNLOGGET = "UINNLOGGET";
export type InnloggetStatus = typeof INNLOGGET | typeof UINNLOGGET

const authSchema = z.object({
    authenticated: z.boolean()
})

export function getBreadcrumbs(innlogget?: InnloggetStatus): Props["breadcrumbs"] {
    if(innlogget === INNLOGGET){
        return [
            {
                title: "Min side – arbeidsgiver",
                url: process.env.NEXT_PUBLIC_MINSIDE_ARBEIDSGIVER_URL || "#"
            },
            {
                title: "Forebygge fravær",
                url: process.env.NEXT_PUBLIC_FOREBYGGE_FRAVAR_URL || "#"
            },
            {
                title: "Samtalestotte",
                url: process.env.NEXT_PUBLIC_SAMTALESTOTTE_URL || "#",
            }
        ]
    }
    return [{
        title: "Samtalestotte",
        url: process.env.NEXT_PUBLIC_SAMTALESTOTTE_URL || "#",
    }]
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
    const authURL = process.env.NEXT_PUBLIC_AUTH_URL;
    if(!isNonEmptyString(authURL)) return;

    const innlogget = await getAuthStatus(authURL)

    if(!innlogget) return;
    const breadcrumbs = getBreadcrumbs(INNLOGGET);

    if(breadcrumbs) setBreadcrumbs(breadcrumbs);
}