import { Cookie } from 'universal-cookie';
import { ReferrerUrl } from '../resources/urls';

export type SamtalestøtteCookiesType = 'samtalestotte-arbeidsgiver' | 'samtalestotte-podlet';

export enum SamtalestøtteCookies {
    SAMTALESTØTTE_ARBEIDSGIVER = 'samtalestotte-arbeidsgiver',
    SAMTALESTØTTE_PODLET = 'samtalestotte-podlet',
}
export const cookiesIApplikasjon = [
    SamtalestøtteCookies.SAMTALESTØTTE_ARBEIDSGIVER.toString(),
    SamtalestøtteCookies.SAMTALESTØTTE_PODLET.toString(),
];

export const hentReferrerUrlFraCookies = (cookies: Cookie): ReferrerUrl => {
    return cookies[SamtalestøtteCookies.SAMTALESTØTTE_PODLET.toString()]?.referrer ?? '';
};
