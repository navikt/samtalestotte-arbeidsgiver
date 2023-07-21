import { Heading } from '@navikt/ds-react'
import { PageBannerSVG } from './PageBannerSVG';
import styles from './PageBanner.module.css';

export const PageBanner = (props: {
  isFrontPage: boolean;
  title: string;
  iconUrl: string;
  kontekst: string;
}) => {
  return (
    <div className={styles.pageBanner}>
      <div className={styles.pageBannerInnhold}>
        <div className={styles.pageBannerTekstOgKontekst}>
          <Heading level={"1"} size={'xlarge'} className={styles.pageBannerTekst}>
            {props.title}
          </Heading>
        </div>
        <PageBannerSVG className={styles.pageBannerSvg}/>
      </div>
    </div>
  );
};
