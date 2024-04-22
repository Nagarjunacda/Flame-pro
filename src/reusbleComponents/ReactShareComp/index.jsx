import {
    EmailIcon,
    EmailShareButton,
    FacebookIcon,
    FacebookShareButton,
    InstapaperIcon,
    InstapaperShareButton,
    LinkedinIcon,
    LinkedinShareButton,
    PinterestIcon,
    PinterestShareButton,
    RedditIcon,
    RedditShareButton,
    TelegramIcon,
    TelegramShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton,
} from "react-share";
import styles from './reactShareComp.module.css'

function ReactShareComp({ postLink }) {
    return <section className={styles.mainCont}>
        <h3>Share This Post</h3>
        <section className={styles.iconCont}>
            <FacebookShareButton
                url={postLink}>
                <section className={styles.innerCont}>
                    <FacebookIcon size={32} />
                    <h4 className={styles.iconText}>Facebook</h4>
                </section>
            </FacebookShareButton>
            <EmailShareButton url={postLink}>
                <section className={styles.innerCont}>
                    <EmailIcon size={32} />
                    <h4 className={styles.iconText}>Email</h4>
                </section>
            </EmailShareButton>
            <LinkedinShareButton url={postLink}>
                <section className={styles.innerCont}>
                    <LinkedinIcon size={32} />
                    <h4 className={styles.iconText}>LinkedIn</h4>
                </section>
            </LinkedinShareButton>
            <PinterestShareButton url={postLink}>
                <section className={styles.innerCont}>
                    <PinterestIcon size={32} />
                    <h4 className={styles.iconText}>pinterest</h4>
                </section>
            </PinterestShareButton>
            <TwitterShareButton url={postLink}>
                <section className={styles.innerCont}>
                    <TwitterIcon size={32} />
                    <h4 className={styles.iconText}>Twitter</h4>
                </section>
            </TwitterShareButton>
            <WhatsappShareButton url={postLink}>
                <section className={styles.innerCont}>
                    <WhatsappIcon size={32} />
                    <h4 className={styles.iconText}>Whatsapp</h4>
                </section>
            </WhatsappShareButton>
            <TelegramShareButton url={postLink}>
                <section className={styles.innerCont}>
                    <TelegramIcon size={32} />
                    <h4 className={styles.iconText}>Telegram</h4>
                </section>
            </TelegramShareButton>
            <RedditShareButton url={postLink}>
                <section className={styles.innerCont}>
                    <RedditIcon size={32} />
                    <h4 className={styles.iconText}>Reddit</h4>
                </section>
            </RedditShareButton>
            <InstapaperShareButton url={postLink}>
                <section className={styles.innerCont}>
                    <InstapaperIcon size={32} />
                    <h4 className={styles.iconText}>Instapapper</h4>
                </section>
            </InstapaperShareButton>
        </section>
    </section>
}
export default ReactShareComp