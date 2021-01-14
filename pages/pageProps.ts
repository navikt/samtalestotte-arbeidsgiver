import { DecoratorParts, fetchDecoratorParts } from '../utils/dekorator';
//import { fetchFrontpage } from './utils/sanity-fetch';

export interface StaticPathProps {
    paths: { params: { slug: string } }[];
    fallback: boolean;
}

export interface PageProps {
    appTitle: string;
    title: string;
    metaDescription: string;
    slug: string;
    decorator: DecoratorParts;
}

export const getPageProps = async (
    title: string,
    metaDescription: string,
    slug: string,
    pageType: 'index' | 'article' | 'group'
): Promise<PageProps> => {
   // const frontPage = await fetchFrontpage();
    const breadcrumbs =
        pageType === 'index'
            ? []
            : [{ title: encodeURIComponent(title), url: `${process.env.APP_URL}/${pageType}/${slug}` }];
    const cacheKey = pageType === 'index' ? 'index' : `${pageType}-${slug}`;

    const decorator = await fetchDecoratorParts({
        siteTitle:"samtalestøtte site tittel", //frontPage.title,
        cacheKey,
        breadcrumbs,
    });

    return {
        appTitle: "samtalstøtte app tittel" ,//frontPage.title,
        title,
        metaDescription,
        slug,
        decorator,
    };
};
