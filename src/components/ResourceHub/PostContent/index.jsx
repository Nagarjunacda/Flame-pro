import ButtonStyleTwo from '@/reusbleComponents/ButtonStyleTwo';
import FlameImage from '@/reusbleComponents/FlameImage';
import FlameBtn from '@/reusbleComponents/FlameBtn';
import { renderHTML } from '@/utils/htmlString';
import styles from './postContent.module.css';
import Link from 'next/link';

function PostContent({ trayData, fullPageData }) {
    const backArrowSrc = '/Images/leftGreyArrow.svg';
    const facebookIcon = '/Images/facebookIcon.svg';
    const twitterIcon = '/Images/twitterBlack.svg';
    const youtubeIcon = '/Images/youtubeIcon.svg';
    const linkedInIcon = '/Images/linkedinBlack.svg';
    const plusIcon = '/Images/plusIconBlack.svg';
    const logoArr = [{ name: 'facebook', src: facebookIcon, url: 'https://www.facebook.com/sharer/sharer.php?u=' }, { name: 'twitter', src: twitterIcon, url: 'https://twitter.com/intent/tweet?url=&text=' }, { name: 'linkedin', src: linkedInIcon, url: 'https://www.linkedin.com/shareArticle?url=' }, { name: 'youtube', src: youtubeIcon, url: 'https://www.youtube.com/watch?v=' }, { name: 'plus', src: plusIcon, url: '' }];
    const contentHeading = fullPageData?.title?.rendered;
    const pageContent = fullPageData?.content?.rendered;
    const btnColor = 'var(--color-primary)';
    const textColor = 'var(--color-secondary)';
    const postLink = fullPageData?.link;

    const btnFunction = () => { }

    const handleBtnClick = () => { }

    return <section className={styles.mainCont}>
        <section className={styles.btnShareSec}>
            <Link href={'/resource-hub'}>
                <ButtonStyleTwo
                    text={"Back To Resource Hub"}
                    textColor="var( --color-primary)"
                    btnFunction={btnFunction}
                    btnIcon={backArrowSrc}
                />
            </Link>
            <section className={styles.iconShareSec}>
                <h6>Share This Article</h6>
                <section className={styles.iconSec}>
                    {logoArr.map((e, index) => {
                        return <a href={`${e?.url}${encodeURIComponent(postLink)}`} target="_blank" rel="noopener noreferrer" className={styles.imgSec} key={index}>
                            <FlameImage src={e?.src} alt={'logo'} />
                        </a>
                    })}
                </section>
            </section>
        </section>
        <section className={styles.contentSection}>
            <h3>{contentHeading}</h3>
            <p>{renderHTML(pageContent)}</p>
            <section className={styles.btnSection}>
                <FlameBtn color={btnColor} text={'Previous Article'} textColor={textColor} isLoadState={false} btnFunction={handleBtnClick} />
                <FlameBtn color={btnColor} text={'Next Article'} textColor={textColor} isLoadState={false} btnFunction={handleBtnClick} />
            </section>
        </section>
    </section>
}
export default PostContent