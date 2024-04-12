import ContactUsPageForm from "../ContactUsPageForm";
import RenderTrays from "../RenderTrays";

function ContactUs({ pageData }) {
    const { data } = pageData;
    const trayData = data?.acf?.content_blocks;
    const formData = [
        { section1: "Full Name*" },
        { section1: "Email Address*" },
        { section1: "Phone Number*" },
        { section1: "Company Name*" },
        { section1: "Job Title*" },
        { section1: "Message" },
    ];

    return <main>
        {trayData ? (
            <>
                <RenderTrays trayData={trayData} />
                <ContactUsPageForm heading={"Enter Your Details"}
                    formFields={formData}
                    heading2={"Contact Me By..."} />
            </>
        ) : (
            <p>This Page Under Development</p>
        )}
    </main>
}
export default ContactUs