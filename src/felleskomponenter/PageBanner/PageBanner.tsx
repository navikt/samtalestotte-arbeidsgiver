import {Normaltekst, Sidetittel} from 'nav-frontend-typografi';
import './PageBanner.less';

export const PageBanner = (props: { isFrontPage: boolean; title: string; iconUrl: string }) => {
    return (
        <div className="page-banner">
            <div className="page-banner__innhold">
                <div className="page-banner__tekst-og-kontekst">
                    <Sidetittel tag="h1" className="page-banner__tekst">
                        {props.title}
                    </Sidetittel>
                    <Normaltekst className="page-banner__kontekst-tekst">
                        Du får hjelp til å gjennomføre samtaler med medarbeiderne og bruke
                        erfaringene til forebyggende arbeid
                    </Normaltekst>
                </div>
            </div>
        </div>
    );
};
