import {Sidetittel} from 'nav-frontend-typografi';
import './PageBanner.less';

export const PageBanner = (props: { isFrontPage: boolean; title: string; iconUrl: string }) => {
    return (
        <div className="page-banner">
            <div className="page-banner__innhold">
                <Sidetittel tag="h1" className="page-banner__tekst">
                    {props.title}
                </Sidetittel>
            </div>
        </div>
    );
};
