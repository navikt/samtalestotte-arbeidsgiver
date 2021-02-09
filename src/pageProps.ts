import { DecoratorParts, fetchDecoratorParts } from './utils/dekorator';

export interface PageProps {
    appTitle: string;
    title: string;
    metaDescription: string;
    slug: string;
    decorator: DecoratorParts;
}

export const getPageProps = async (title: string, slug: string): Promise<PageProps> => {
    // TODO: trenger vi breadcrumbs
    // TODO: Vi bør fikse breadcrumbs
    const breadcrumbs = [{ title: encodeURIComponent(title), url: `${process.env.APP_URL}` }];
    const cacheKey = 'index';

    const decorator = await fetchDecoratorParts({
        siteTitle: title,
        cacheKey,
        breadcrumbs,
    });

    return {
        appTitle: title,
        title,
        metaDescription: 'Samtalestøtte for arbeidsgiver',
        slug,
        decorator,
    };
};
