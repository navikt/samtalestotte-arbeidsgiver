import { Verktoyet } from './Verktoyet';
import { getPageProps, PageProps } from '../../pageProps';

export default Verktoyet;

interface StaticProps {
    props: {
        page: PageProps;
    };
    revalidate: number;
}

// NextJS kaller denne
export const getStaticProps = async (): Promise<StaticProps> => {
    const page = await getPageProps(
        'Samtalestøtte for arbeidsgiver',
        'Du får hjelp til å gjennomføre samtaler med medarbeiderne og bruke erfaringene til forebyggende arbeid.'
    );

    console.log('PAGE-----------', page);

    return {
        props: { page },
        revalidate: 60,
    };
};
