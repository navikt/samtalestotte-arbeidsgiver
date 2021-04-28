import { Normaltekst, Sidetittel } from 'nav-frontend-typografi';
import { PageBannerSVG } from './PageBannerSVG';
import './PageBanner.less';

export const PageBanner = (props: {
    isFrontPage: boolean;
    title: string;
    iconUrl: string;
    kontekst: string;
}) => {
    return (
        <div className="page-banner">
            <div className="page-banner__innhold">
                <div className="page-banner__tekst-og-kontekst">
                    <Sidetittel tag="h1" className="page-banner__tekst">
                        {props.title}
                    </Sidetittel>
                    <Normaltekst className="page-banner__kontekst-tekst">
                        {props.kontekst}
                    </Normaltekst>
                </div>
                <PageBannerSVG className={"page-banner__svg"}/>
            </div>
        </div>
    );
};
