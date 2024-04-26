import { handleServerSideProps } from "@/utils/handleServerSideData"
import { allPageUrl } from "@/utils/urls"
import AboutusCategory from "@/components/AboutusCategory"

function AboutusCategoryPage(props) {
    return <AboutusCategory pageData={props} />
}
export default AboutusCategoryPage

export async function getServerSideProps(context) {
    const { query, params } = context
    const { slug } = params
    const { category } = query
    const isFromFireCategories = slug.length == 2;
    const url = `${allPageUrl}/?slug=${slug}`;
    // const url = isFromFireCategories ? `${allPageUrl}/?slug=${slug[1]}` : `${allPageUrl}/?slug=${slug[0]}`;
    const { data, error } = await handleServerSideProps(url);
    if (error) {
        return {
            props: {
                data: null,
            },
        };
    }

    return {
        props: {
            data,
        },
    };
}