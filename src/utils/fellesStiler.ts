import { css } from 'linaria';
import { SCREEN_SM_MIN } from './konstanter';

export const marginTop0Rem = css`
    margin-top: 0;
`;

export const marginTop1Rem = css`
    margin-top: 1rem;
`;

export const marginTop2Rem = css`
    margin-top: 2rem;
`;

export const marginTop3Rem = css`
    margin-top: 3rem;
`;

export const marginTop4Rem = css`
    margin-top: 4rem;
`;

export const marginTop6Rem = css`
    margin-top: 6rem;
`;

export const marginBottom0Rem = css`
    margin-bottom: 0;
`;

export const marginBottom025rem = css`
    margin-bottom: 0.25rem;
`;

export const marginBottom1Rem = css`
    margin-bottom: 1rem;
`;

export const marginBottom2Rem = css`
    margin-bottom: 2rem;
`;

export const marginBottom3Rem = css`
    margin-bottom: 3rem;
`;

export const marginBottom4Rem = css`
    margin-bottom: 4rem;
`;

export const marginRight05Rem = css`
    margin-right: 0.5rem;
`;

export const boldText = css`
    font-weight: var(--navds-font-weight-bold);
`;

export const knappSomLenke = css`
    border-style: none;
    text-decoration: underline;
`;

export const horizontalLine = css`
    border-top: 1px solid var(--navds-color-gray-20);
    width: 100%;
`;

export const graAvrundetBoks = css`
    box-sizing: border-box;
    padding: 1rem 2rem 1rem 1rem;
    border: 1px solid black;
    border-radius: 4px;
    background: var(--navds-color-gray-10);
    h4 {
        margin-top: 4px;
        margin-bottom: 0;
    }
    ul {
        margin-top: 0;
    }
`;

export const infoPanelKolonner = css`
    display: grid;
    @media (min-width: ${SCREEN_SM_MIN}) {
        grid-template-columns: 1fr 1fr;
        column-gap: 1rem;
    }
    row-gap: 1rem;
    div {
        width: 100%;
        height: 100%;
    }
`;

export const alternatingDiscList = css`
    li:nth-child(odd) {
        list-style-type: disc;
    }
    li:nth-child(even) {
        list-style-type: none;
    }
`;

export const spacedList = css`
    li:not(:first-child) {
        margin-top: 2rem;
    }
`;

export const breakBeforePage = css`
    break-before: page;
`;

export const marginSides3rem = css`
    @media (min-width: ${SCREEN_SM_MIN}) {
        margin-left: 3rem;
        margin-right: 3rem;
    }
`;

export const marginSides2_25rem = css`
    @media (min-width: ${SCREEN_SM_MIN}) {
        margin-left: 2.25rem;
        margin-right: 2.25rem;
    }
`;

export const noPrint = css`
    @media print {
        display: none;
    }
`;