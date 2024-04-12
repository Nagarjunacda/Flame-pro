import ContactUs from "@/components/ContactUs";
import { handleServerSideProps } from "@/utils/handleServerSideData";
import { contactUsUrl } from "@/utils/urls";

function ContactUsPage(props) {
    return <ContactUs pageData={props} />
}
export default ContactUsPage

export async function getServerSideProps(context) {
    const { data, error } = await handleServerSideProps(contactUsUrl);
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