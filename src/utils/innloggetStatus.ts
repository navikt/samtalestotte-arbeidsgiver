import { z } from "zod"
import { setBreadcrumbs, DecoratorParams } from "@navikt/nav-dekoratoren-moduler";
import { isNonEmptyString } from './stringUtils';
import {ENVUrls} from "./envUtils";

export const INNLOGGET = "INNLOGGET";
export const UINNLOGGET = "UINNLOGGET";
export type InnloggetStatus = typeof INNLOGGET | typeof UINNLOGGET

const minsideBreadcrumb = (url: string) => ({
    title: "Min side – arbeidsgiver",
    url: url
})
const forebyggeFravarBreadcrumb = (url: string) => ({
    title: "Forebygge fravær",
    url: url
})
const samtalestotteBreadcrumb = (url: string) => ({
    title: "Samtalestotte",
    url: url
})

const authSchema = z.object({
    authenticated: z.boolean()
})

export function getBreadcrumbs(urls: ENVUrls, innlogget?: InnloggetStatus): DecoratorParams["breadcrumbs"] {
    if(innlogget === INNLOGGET){
        return [
            minsideBreadcrumb(urls.MINSIDE_URL),
            forebyggeFravarBreadcrumb(urls.FOREBYGGE_URL),
            samtalestotteBreadcrumb(urls.SAMTALESTOTTE_URL)
        ];
    }
    return [ samtalestotteBreadcrumb(urls.SAMTALESTOTTE_URL) ];
}

async function getAuthStatus(authURL: string): Promise<boolean> {
    try{
        return await fetch(authURL,{credentials: "include"})
            .then(res => {
                return res.json()})
            .then(json => authSchema.parse(json).authenticated)
    } catch (error) {
        console.error('Det er oppstått en feil ved nettverkskall');
        return false;
    }
}
export async function setSamtalestotteBreadcrumbs(urls: ENVUrls): Promise<void> {
    if(!isNonEmptyString(urls.AUTH_URL)) return;

    const innlogget = await getAuthStatus(urls.AUTH_URL)

    if(!innlogget) return;
    const breadcrumbs = getBreadcrumbs(urls, INNLOGGET);

    if(breadcrumbs) await setBreadcrumbs(breadcrumbs);
}