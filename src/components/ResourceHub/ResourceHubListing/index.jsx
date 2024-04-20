import { useState, useEffect } from 'react';
import Link from 'next/link';
import { handleServerSideProps } from '@/utils/handleServerSideData';
import FlameImage from '@/reusbleComponents/FlameImage';
import TitleAndTextCard from '@/components/Cards/TitleAndTextCard';
import ResourceFilters from '../ResourceFilters';
import { blogPostsUrl } from '@/utils/urls';
import styles from '../resourceHub.module.css';

function ResourceHubListing({ listingData }) {
    const [totalPages, setTotalPages] = useState(0);
    const [itemsNumber, setItemsNumbers] = useState(10);
    const [selectedPageNum, setSelectedPageNum] = useState(1);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false)
    const [posts, setPosts] = useState([]);
    const scrollToTop = typeof window !== 'undefined' && document.getElementById("scrollId");
    const arrowSrc = "/Images/bottomGreyArrow.svg";
    const leftArrowSrc = "/Images/leftGreyArrow.svg";
    const rightArrowSrc = "/Images/rightGreyArrow.svg";
    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );
    const numberArr = [10, 20, 30, 40, 50];

    useEffect(() => {
        setPosts(listingData);
    }, [listingData]);

    useEffect(() => {
        const getPostsData = async () => {
            const allProductsUrl = `${blogPostsUrl}?per_page=${itemsNumber}&page=${selectedPageNum}`;
            // const categoryurl = `${productsUrl}?category=${category}`;
            // const allProductsUrl = !isFromShopAll ? `${productsUrl}?category=${megaMenuClickedProduct}&per_page=${itemsNumber}&page=${selectedPageNum}` : `${productsUrl}?per_page=${itemsNumber}&page=${selectedPageNum}`
            // const url = filteredArray.length
            //     ? filtersUrl
            //     : category
            //         ? categoryurl
            //         : allProductsUrl;
            // const { data, error, headers } = await handleServerSideProps(url);
            // const totalNoOfPages = headers["x-wp-totalpages"];
            // setProducts(data);
            // setTotalPages(totalNoOfPages);
            const { data, error, headers } = await handleServerSideProps(allProductsUrl);
            const totalNoOfPages = headers["x-wp-totalpages"];
            setPosts(data);
            setTotalPages(totalNoOfPages);

        };
        getPostsData();
    }, [itemsNumber, selectedPageNum]);

    const handlePageSelection = (number) => {
        if (number === "left") {
            if (selectedPageNum === 1) {
                return;
            }
            setSelectedPageNum(selectedPageNum - 1);
            return;
        }
        if (number === "right") {
            if (selectedPageNum == totalPages) {
                return;
            }
            setSelectedPageNum(selectedPageNum + 1);
            return;
        }
        scrollToTop.scrollIntoView({ behavior: "smooth" });
        setSelectedPageNum(number);
    };

    const handleBottomBtn = () => {
        setShowDropdown(!showDropdown);
    };

    const handleBottomBtn2 = () => {
        setShowDropdown2(!showDropdown2);
    };

    const handleNoOfProducts = (number) => {
        setItemsNumbers(number);
        setSelectedPageNum(1);
        setShowDropdown(false);
        setShowDropdown2(false);
        scrollToTop.scrollIntoView({ behavior: "smooth" });
    };

    return <section className={styles.mainCont}>
        <section className={styles.filterCont}>
            <ResourceFilters />
        </section>
        <section className={styles.pagesCont}>
            <section
                className={styles.showBlock}
                onClick={handleBottomBtn}
                role="button"
                tabIndex="0"
                id="scrollId"
            >
                <section className={styles.showText}>
                    <p className={styles.show}>Show:</p>
                    <p className={styles.itemNum}>{itemsNumber}</p>
                </section>
                <section className={styles.downArrow}>
                    <FlameImage src={arrowSrc} alt="icon" />
                </section>
                {showDropdown && (
                    <section className={styles.dropDown}>
                        {numberArr.map((e, index) => {
                            return (
                                <section
                                    key={index}
                                    className={styles.showItems}
                                    onClick={() => {
                                        handleNoOfProducts(e);
                                    }}
                                >
                                    {e} items
                                </section>
                            );
                        })}
                    </section>
                )}
            </section>
            <section className={styles.pageNumCont}>
                {totalPages != 1 && (
                    <section
                        className={styles.arrows}
                        onClick={() => {
                            handlePageSelection("left");
                        }}
                    >
                        <FlameImage src={leftArrowSrc} alt="icon" />
                    </section>
                )}
                {pageNumbers?.map((num, index) => {
                    return (
                        <section
                            key={index}
                            className={
                                selectedPageNum === index + 1
                                    ? styles.pageNumHighlighted
                                    : styles.pageNum
                            }
                        >
                            <span
                                className={styles.numText}
                                key={index}
                                onClick={() => {
                                    handlePageSelection(num);
                                }}
                            >
                                {num}
                            </span>
                        </section>
                    );
                })}
                {selectedPageNum != totalPages && (
                    <section
                        className={styles.arrows}
                        onClick={() => {
                            handlePageSelection("right");
                        }}
                    >
                        <FlameImage src={rightArrowSrc} alt="icon" />
                    </section>
                )}
            </section>
        </section>
        <section className={styles.products}>
            {posts?.map((product, index) => {
                return <TitleAndTextCard key={index} data={product} />
            })}
        </section>
        <section className={styles.pagesCont}>
            <section className={styles.showBlock} onClick={handleBottomBtn2}>
                <section className={styles.showText}>
                    <p className={styles.show}>Show:</p>
                    <p className={styles.itemNum}>{itemsNumber}</p>
                </section>
                <section className={styles.downArrow}>
                    <FlameImage src={arrowSrc} alt="icon" />
                </section>
                {showDropdown2 && (
                    <section className={styles.dropDown}>
                        {numberArr.map((e, index) => {
                            return (
                                <section
                                    key={index}
                                    className={styles.showItems}
                                    onClick={() => {
                                        handleNoOfProducts(e);
                                    }}
                                >
                                    {e} items
                                </section>
                            );
                        })}
                    </section>
                )}
            </section>
            <section className={styles.pageNumCont}>
                {totalPages != 1 && (
                    <section
                        className={styles.arrows}
                        onClick={() => {
                            handlePageSelection("left");
                        }}
                    >
                        <FlameImage src={leftArrowSrc} alt="icon" />
                    </section>
                )}
                {pageNumbers?.map((num, index) => {
                    return (
                        <section
                            key={index}
                            className={
                                selectedPageNum === index + 1
                                    ? styles.pageNumHighlighted
                                    : styles.pageNum
                            }
                        >
                            <span
                                className={styles.numText}
                                key={index}
                                onClick={() => {
                                    handlePageSelection(num);
                                }}
                            >
                                {num}
                            </span>
                        </section>
                    );
                })}
                {selectedPageNum != totalPages && (
                    <section
                        className={styles.arrows}
                        onClick={() => {
                            handlePageSelection("right");
                        }}
                    >
                        <FlameImage src={rightArrowSrc} alt="icon" />
                    </section>
                )}
            </section>
        </section>
    </section>
}
export default ResourceHubListing