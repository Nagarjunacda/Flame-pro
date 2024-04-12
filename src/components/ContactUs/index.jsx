import ContactUsPageForm from "../ContactUsPageForm";
import RenderTrays from "../RenderTrays";

function ContactUs({ pageData }) {
    const { data } = pageData;
    const trayData = data?.acf?.content_blocks;

    return <main>
        {trayData ? (
            <>
                <RenderTrays trayData={trayData} />
            </>
        ) : (
            <p>This Page Under Development</p>
        )}
    </main>
}
export default ContactUs