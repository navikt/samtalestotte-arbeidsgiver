import { Heading } from '@navikt/ds-react'
import { PageBannerSVG } from './PageBannerSVG';
import { css } from 'linaria';
import {SCREEN_LG_MIN, SCREEN_MD_MIN, SCREEN_SM_MIN, SCREEN_XL_MIN} from '../../utils/konstanter';

export const PageBanner = (props: {
  isFrontPage: boolean;
  title: string;
  iconUrl: string;
  kontekst: string;
}) => {
  return (
    <div className={pageBanner}>
      <div className={pageBannerInnhold}>
        <div className={pageBannerTekstOgKontekst}>
          <Heading level={"1"} size={'2xlarge'} className={pageBannerTekst}>
            {props.title}
          </Heading>
        </div>
        <PageBannerSVG className={pageBannerSvg}/>
      </div>
    </div>
  );
};

/** STYLES */

const pageBanner = css`
  background-color: var(--navds-global-color-blue-100);
  border-bottom: 0.2rem solid var(--navds-global-color-blue-200);
  display: flex;
  align-items: center;
  justify-items: center;

  @media (min-width: ${SCREEN_SM_MIN}) {
    height: 11rem;
  }
`

const pageBannerInnhold = css`
  height: 100%;
  width: 100%;
  max-width: ${SCREEN_LG_MIN};
  margin: 0 auto;
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;

  @media (min-width: ${SCREEN_SM_MIN}) {
    justify-content: space-between;
  }

  @media (min-width: ${SCREEN_MD_MIN}) {
    padding: 0.75rem 3rem;
  }

  @media (min-width: ${SCREEN_XL_MIN}) {
    padding: 0.75rem 0;
  }
`

const pageBannerTekstOgKontekst = css`
  margin: 0;
`

const pageBannerTekst = css`
  margin-top: 0.5rem;
  font-size: 2.25rem;
`

const pageBannerSvg = css`
  display: none;

  @media (min-width: ${SCREEN_SM_MIN}) {
    display: block;
    min-width: 200px;
    min-height: 160px;
  }
`
