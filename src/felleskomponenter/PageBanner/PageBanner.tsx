import { Title } from '@navikt/ds-react'
import { PageBannerSVG } from './PageBannerSVG';
import { css } from 'linaria';
import { SCREEN_MD_MIN, SCREEN_SM_MIN } from '../../utils/konstanter';

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
                    <Title level={1} size={'2xl'} className={pageBannerTekst}>
                        {props.title}
                    </Title>
                </div>
                <PageBannerSVG className={pageBannerSvg}/>
            </div>
        </div>
    );
};

/** STYLES */

const pageBanner = css`
  background-color: var(--navds-color-blue-10);
  border-bottom: 0.2rem solid var(--navds-color-blue-20);
  padding-left: 1.25rem;
  padding-right: 1.25rem;

  @media (min-width: ${SCREEN_SM_MIN}) {
    height: 11rem;
  }
`

const pageBannerInnhold = css`
  margin: 0 auto;
  max-width: ${SCREEN_MD_MIN};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media (min-width: ${SCREEN_SM_MIN}) {
    justify-content: space-between;
  }
`

const pageBannerTekstOgKontekst = css`
  margin: 1rem 1rem;
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