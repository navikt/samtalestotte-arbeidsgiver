import { Cookie } from 'universal-cookie';

export type SamtalestøtteCookiesType = 'samtalestotte-arbeidsgiver' | 'samtalestotte-podlet';

export enum SamtalestøtteCookies {
    SAMTALESTØTTE_ARBEIDSGIVER = 'samtalestotte-arbeidsgiver',
    SAMTALESTØTTE_PODLET = 'samtalestotte-podlet',
}
export const cookiesIApplikasjon = [
    SamtalestøtteCookies.SAMTALESTØTTE_ARBEIDSGIVER.toString(),
    SamtalestøtteCookies.SAMTALESTØTTE_PODLET.toString(),
];

export const hentReferrerUrlFraCookies = (cookies: Cookie) => {
    return cookies[SamtalestøtteCookies.SAMTALESTØTTE_PODLET.toString()]?.referrer !== null
        ? cookies[SamtalestøtteCookies.SAMTALESTØTTE_PODLET.toString()]?.referrer
        : '';
};
