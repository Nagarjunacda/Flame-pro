import AboutUs from "@/components/AboutUs";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import { aboutUsUrl } from "@/utils/urls"

function AboutUsPage(props) {
    return <AboutUs pageData={props} />
}
export default AboutUsPage

export async function getServerSideProps(context) {
    const { data, error } = await handleServerSideProps(aboutUsUrl);
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