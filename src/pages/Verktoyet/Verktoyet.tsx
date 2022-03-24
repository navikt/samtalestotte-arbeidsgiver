import logEvent from '../../amplitude/amplitude';
import { PageProps } from '../../pageProps';
import { Layout } from '../../felleskomponenter/Layout/Layout';
import SlikSkaperDuGodeSamtaler from '../SlikSkaperDuGodeSamtaler';
import classNames from 'classnames';
import { paddingSides1rem } from '../../utils/fellesStiler';

export const Verktoyet = (props: { page: PageProps }) => {
    return (
        <Layout
            title={props.page ? props.page.title : 'kunne ikke hente tittel'}
            isFrontPage={true}
            decoratorParts={props.page.decorator}
            logEvent={logEvent}
        >
            <SlikSkaperDuGodeSamtaler className={classNames(paddingSides1rem)} />
        </Layout>
    );
};
