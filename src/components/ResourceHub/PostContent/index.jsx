import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import ReactPlayer from 'react-player'
import ButtonStyleTwo from '@/reusbleComponents/ButtonStyleTwo';
import FlameImage from '@/reusbleComponents/FlameImage';
import FlameBtn from '@/reusbleComponents/FlameBtn';
import DetailSliderComp from '@/reusbleComponents/DetailSliderComp';
import { renderHTML } from '@/utils/htmlString';
import ReactShareComp from '@/reusbleComponents/ReactShareComp';
import styles from './postContent.module.css';

function PostContent({ trayData, fullPageData }) {
    const router = useRouter();
    const { query } = router;
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const imgArr = [{ name: '640/645 Challenger Firefighter Suit Front', src: "https://cms.cdastagging.com/wp-content/uploads/2024/04/640_645_Full-Suit_GOL_FrontAngle.webp" }, { name: "640/645 Challenger Firefighter Suit Back", src: "https://cms.cdastagging.com/wp-content/uploads/2024/04/640_645_Full-Suit_GOL_Back.webp" }, { name: "640 Challenger Firefighter Jacket Front", src: "https://cms.cdastagging.com/wp-content/uploads/2024/04/640-VA1-AN1-GOL_FrontAngle.webp" }, { name: "640 Challenger Firefighter Jacket Back", src: "https://cms.cdastagging.com/wp-content/uploads/2024/04/640-VA1-AN1-GOL_BackAngle.webp" }, { name: "645 Challenger Firefighter Trousers Front", src: "https://cms.cdastagging.com/wp-content/uploads/2024/04/645-VA1-AN1-GOL_Trousers_FrontAngle.webp" }]
    const initailImage = imgArr && imgArr.length && imgArr[0]?.src;
    const isVideo = fullPageData?.categories?.length && fullPageData?.categories[0] === 184;
    const [selectedImage, setSelectedImage] = useState(initailImage);
    const [playing, setPlaying] = useState(false);
    const backArrowSrc = '/Images/leftGreyArrow.svg';
    const facebookIcon = '/Images/facebookIcon.svg';
    const twitterIcon = '/Images/twitterBlack.svg';
    const youtubeIcon = '/Images/youtubeIcon.svg';
    const linkedInIcon = '/Images/linkedinBlack.svg';
    const plusIcon = '/Images/plusIconBlack.svg';
    const playBtnSrc = '/Images/playIcon.svg';
    const pauseBtnSrc = '/Images/pauseIcon.svg';
    const videoUrl = fullPageData?.acf?.video_post_url ? fullPageData?.acf?.video_post_url : 'https://vimeo.com/910793857';
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

    useEffect(() => {
        let timeout;
        if (playing && showControls) {
            timeout = setTimeout(() => {
                setShowControls(false);
            }, 3000);
        }
        return () => {
            clearTimeout(timeout);
        };
    }, [playing, showControls]);

    const handleMouseMove = () => {
        if (!showControls) {
            setShowControls(true);
        }
        if (playing) {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setShowControls(false);
            }, 3000);
        }
    };

    let timeout;
    const handlePlayPause = () => {
        setPlaying(!playing);
        if (!showControls) {
            setShowControls(true);
        }
        clearTimeout(timeout);
        timeout = setTimeout(() => {
            setShowControls(false);
        }, 3000);
    };

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
            <p>{renderHTML(pageContent)}</p>
            {!isVideo && <section className={styles.imageAndText}>
                <section className={styles.imageBlock}>
                    <section className={styles.mainImg}>
                        <FlameImage src={selectedImage ? selectedImage : initailImage} alt={"productImg"} imageFit></FlameImage>
                        {/* <section className={styles.magnifier}>
                <FlameImage src={magnifierSrc} alt={"magnifier"}></FlameImage>
              </section> */}
                    </section>
                    <section className={styles.sliderSection}>
                        <DetailSliderComp
                            data={imgArr}
                            setSelectedImage={setSelectedImage}
                            isFromResourceHub
                        />
                    </section>
                </section>
            </section>}
            {isVideo && <section className={styles.playerSec} onMouseMove={handleMouseMove}>
                <section className={styles.videoWrapper}>
                    <ReactPlayer url={videoUrl}
                        controls={false}
                        width="100%"
                        height='100%'
                        playing={playing}
                    />
                </section>
                {showControls && (
                    <section className={styles.playPauseBorder} onClick={handlePlayPause}>
                        <section className={styles.videoIcon}>
                            <FlameImage src={playing ? pauseBtnSrc : playBtnSrc} alt='play' />
                        </section>
                    </section>
                )}
            </section>}
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