
export interface PageProps {
    appTitle: string;
    title: string;
    metaDescription: string;
    slug: string;
}

export const getPageProps = async (title: string, slug: string): Promise<PageProps> => {
    return {
        appTitle: title,
        title,
        metaDescription: 'Samtalestøtte for arbeidsgiver',
        slug,
    };
};
