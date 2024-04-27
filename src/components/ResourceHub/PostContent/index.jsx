import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactPlayer from 'react-player'
import ButtonStyleTwo from '@/reusbleComponents/ButtonStyleTwo';
import FlameImage from '@/reusbleComponents/FlameImage';
import FlameBtn from '@/reusbleComponents/FlameBtn';
import { renderHTML } from '@/utils/htmlString';
import ReactShareComp from '@/reusbleComponents/ReactShareComp';
import styles from './postContent.module.css';

function PostContent({ trayData, fullPageData }) {
    const router = useRouter();
    const { query } = router;
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [playing, setPlaying] = useState(false);
    const backArrowSrc = '/Images/leftGreyArrow.svg';
    const facebookIcon = '/Images/facebookIcon.svg';
    const twitterIcon = '/Images/twitterBlack.svg';
    const youtubeIcon = '/Images/youtubeIcon.svg';
    const linkedInIcon = '/Images/linkedinBlack.svg';
    const plusIcon = '/Images/plusIconBlack.svg';
    const playBtnSrc = '/Images/playIcon.svg';
    const logoArr = [{ name: 'facebook', src: facebookIcon, url: 'https://www.facebook.com/sharer/sharer.php?u=' }, { name: 'twitter', src: twitterIcon, url: 'https://twitter.com/intent/tweet?url=&text=' }, { name: 'linkedin', src: linkedInIcon, url: 'https://www.linkedin.com/shareArticle?url=' }, { name: 'plus', src: plusIcon, url: '' }];
    const contentHeading = fullPageData?.title?.rendered;
    const pageContent = fullPageData?.content?.rendered;
    const btnColor = 'var(--color-primary)';
    const textColor = 'var(--color-secondary)';
    const postLink = fullPageData?.link;
    const isPrevPost = fullPageData?.prev_post_slug;
    const isNextPost = fullPageData?.next_post_slug;
    const prevPostLink = query?.postId ? `/resource-hub/${query?.slug}/${isPrevPost}` : `/resource-hub/${isPrevPost}`;
    const nextPostLink = query?.postId ? `/resource-hub/${query?.slug}/${isNextPost}` : `/resource-hub/${isNextPost}`;

    const btnFunction = () => { }

    const handleBtnClick = () => { }

    const handlePlusIconClick = () => {
        setIsPopupOpen(true);
    }

    const closePopup = () => {
        setIsPopupOpen(false);
    }

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
                        return e?.name === 'plus' ? <section className={styles.imgSec} key={index} onClick={handlePlusIconClick}><FlameImage src={e?.src} alt={'logo'} /></section> : <a href={`${e?.url}${encodeURIComponent(postLink)}`} target="_blank" rel="noopener noreferrer" className={styles.imgSec} key={index}>
                            <FlameImage src={e?.src} alt={'logo'} />
                        </a>
                    })}
                </section>
            </section>
        </section>
        <section className={styles.contentSection}>
            <h3>{contentHeading}</h3>
            <section className={styles.playerSec}>
                <section className={styles.videoWrapper}>
                    <ReactPlayer url='https://www.youtube.com/watch?v=tRBjFmt3sV8&modestbranding=1'
                        controls={false}
                        width="100%"
                        height='100%'
                        playing={playing}
                    />
                </section>
                {/* <section className={styles.videoIcon} onClick={() => { setPlaying(!playing) }}>
                    <FlameImage src={playBtnSrc} alt='play' />
                </section> */}
            </section>
            <p>{renderHTML(pageContent)}</p>
            <section className={styles.btnSection}>
                {isPrevPost && <Link href={prevPostLink}><FlameBtn color={btnColor} text={'Previous Article'} textColor={textColor} isLoadState={false} btnFunction={handleBtnClick} /></Link>}
                {isNextPost && <Link href={nextPostLink}><FlameBtn color={btnColor} text={'Next Article'} textColor={textColor} isLoadState={false} btnFunction={handleBtnClick} /></Link>}
            </section>
        </section>
        {isPopupOpen && (
            <div className={styles.popupBackground} onClick={closePopup}>
                <div className={styles.popupContent} onClick={(e) => e.stopPropagation()}>
                    <ReactShareComp postLink={postLink} />
                </div>
            </div>
        )}
    </section>
}
export default PostContent