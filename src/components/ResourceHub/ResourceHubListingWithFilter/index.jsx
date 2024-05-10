import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import FlameBtn from '@/reusbleComponents/FlameBtn';
import { handleServerSideProps } from '@/utils/handleServerSideData';
import FlameImage from '@/reusbleComponents/FlameImage';
import TitleAndTextCard from '@/components/Cards/TitleAndTextCard';
import ResourceHubFilters from '../ResourceHubFilters';
import ResourceFilters from '../ResourceFilters';
import { blogPostsUrl } from '@/utils/urls';
import { resourceFiltersUrl } from '@/utils/urls';
import CountrySelector from '@/components/CountrySelector';
import _isEmpty from 'lodash/isEmpty';
import { invalidDomain } from '@/utils/invalidDomain';
import styles from '../resourceHub.module.css';

function ResourceHubListingWithFilter({ listingData }) {
    const router = useRouter();
    const { query } = router;
    const { slug } = query;
    const showNoOfItemsRef = useRef(null);
    const countryRef = useRef(null);
    const [mainCatFilter, setMainCatFilter] = useState('');
    const str = slug;
    const result = str.includes('-') ? str.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase()) : str;
    const finalResult = result.charAt(0).toUpperCase() + result.slice(1);
    const [selectedFilterArr, setSelectedFilterArr] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [itemsNumber, setItemsNumbers] = useState(10);
    const [selectedPageNum, setSelectedPageNum] = useState(1);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showDropdown2, setShowDropdown2] = useState(false);
    const [shouldOpenDownloadPopup, setShouldOpenDownloadPopup] = useState(false);
    const [countryDropdown, setCountryDropdown] = useState(false)
    const [filtersUrl, setFiltersUrl] = useState('');
    const [posts, setPosts] = useState([]);
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [showToast, setShowToast] = useState(false);
    const [toastMsg, setToastMsg] = useState("");
    const [popupSubmit, setPopupSubmit] = useState(false);
    const [redirectUrl, setRedirectUrl] = useState('');
    const scrollToTop = typeof window !== 'undefined' && document.getElementById("scrollId");
    const arrowSrc = "/Images/bottomGreyArrow.svg";
    const leftArrowSrc = "/Images/leftGreyArrow.svg";
    const rightArrowSrc = "/Images/rightGreyArrow.svg";
    const offCanvasClose = '/Images/offCanvasClose.svg';
    const btnColor = "var(--color-primary)";
    const textColor = "var(--color-secondary)";
    const pageNumbers = Array.from(
        { length: totalPages },
        (_, index) => index + 1
    );
    const numberArr = [10, 20, 30, 40, 50];
    const isPostsEmpty = _isEmpty(posts);
    const formFields = [{ section1: "Full Name*" },
    { section1: "Email Address*" },
    { section1: "Phone Number*" }];

    // useEffect(() => {
    //     setPosts(listingData);
    // }, [listingData]);

    // useEffect(() => {
    //     const obj = { taxonomy: 'category', slug: finalResult }
    //     setSelectedFilterArr([obj])
    // }, [slug])

    useEffect(() => {
        function handleClickOutside(event) {
            if (showNoOfItemsRef.current && !showNoOfItemsRef.current.contains(event.target)) {
                setShowDropdown(false)
                setShowDropdown2(false)
            }
            if (countryRef.current && !countryRef.current.contains(event.target)) {
                setCountryDropdown(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [showNoOfItemsRef, countryRef]);

    useEffect(() => {
        const getPostsData = async () => {
            const isCategory = selectedFilterArr?.length ? selectedFilterArr.filter((e) => e?.taxonomy === 'category').map((e) => e.slug).join(',') : false;
            const isApplication = selectedFilterArr?.length ? selectedFilterArr.filter((e) => e?.taxonomy === 'application').map((e) => e.slug).join(',') : false;
            const isIndustry = selectedFilterArr?.length ? selectedFilterArr.filter((e) => e?.taxonomy === 'industry').map((e) => e.slug).join(',') : false;
            // const isIndustry = selectedFilterArr?.length ? selectedFilterArr.filter((e) => e?.taxonomy === 'industry')[0]?.slug : false;
            const typeCatParam = mainCatFilter ? `&type_cat=${mainCatFilter}` : ''
            const categoryParam = isCategory ? `&category=${isCategory}` : '';
            const applicationParam = isApplication ? `&application=${isApplication}` : '';
            const industryParam = isIndustry ? `&industry=${isIndustry}` : '';
            const isFiltersApplied = mainCatFilter || isCategory || isApplication || isIndustry;
            const allProductsUrl = `${blogPostsUrl}?per_page=${itemsNumber}&page=${selectedPageNum}`;
            if (!isFiltersApplied) {
                return
            }
            const url = isFiltersApplied ? `${resourceFiltersUrl}?per_page=${itemsNumber}&page=${selectedPageNum}${typeCatParam}${categoryParam}${applicationParam}${industryParam}` : allProductsUrl;
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
            const { data, error, headers } = await handleServerSideProps(url);
            const totalNoOfPages = headers["x-wp-totalpages"];
            setPosts(data);
            setTotalPages(totalNoOfPages);

        };
        getPostsData();
    }, [itemsNumber, selectedPageNum, mainCatFilter, selectedFilterArr]);

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

    const handleDownloadPopup = (url) => {
        setShouldOpenDownloadPopup(true);
        setRedirectUrl(url);

    }

    const closePopup = () => {
        setShouldOpenDownloadPopup(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = async (e, fieldName) => {
        const { name, value } = e.target;
        if (!value) {
            setErrors({
                ...errors,
                [fieldName]: `${fieldName} is required`,
            });
            setFormData({
                ...formData,
                [fieldName]: e.target.value,
            });
            return;
        }
        if (name === "Full Name*") {
            if (!/^[a-zA-Z\s]+$/.test(value)) {
                setErrors({
                    ...errors,
                    [fieldName]: "Please enter a valid name",
                });
            }
        }
        if (name === "Email Address*") {
            const emailParts = value.split('@');
            const domain = emailParts[emailParts.length - 1];
            if (invalidDomain.includes(domain)) {
                setErrors({
                    ...errors,
                    [fieldName]: "This email domain is not allowed",
                });
            } else if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
                setErrors({
                    ...errors,
                    [fieldName]: "Please enter a valid email address",
                });
            } else {
                setErrors({
                    ...errors,
                    [fieldName]: null,
                });
            }
        }
        if (name === "Phone Number*") {
            if (!/^[0-9]+$/.test(value)) {
                setErrors({
                    ...errors,
                    [fieldName]: "Please enter valid phone number",
                });
            }
        }
        errors[fieldName] = null;
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        });
    }

    const handleButtonClick = async () => {
        if (Object.keys(errors).some((key) => errors[key])) {
            setShowToast(true);
            setToastMsg("Please enter all the required fields.");
            return;
        }
        let formValid = true;
        formFields.forEach((fieldName) => {
            if (!formData[fieldName?.section1]) {
                setErrors((prevErrors) => ({
                    ...prevErrors,
                    [fieldName?.section1]: `${fieldName?.section1} is required`,
                }));
                formValid = false;
            }
        });
        if (!formValid) {
            setShowToast(true);
            setToastMsg("Please enter all the required fields.");
            return;
        }
        window.open(redirectUrl, '_blank');
        setShouldOpenDownloadPopup(false);
    }

    return <section className={styles.mainCont}>
        <ResourceHubFilters setItemsNumbers={setItemsNumbers} mainCatFilter={mainCatFilter} selectedSlug={slug} setMainCatFilter={setMainCatFilter} setSelectedPageNum={setSelectedPageNum} setSelectedFilterArr={setSelectedFilterArr} />
        {/* <section className={styles.filterCont}>
            <ResourceFilters mainCatFilter={mainCatFilter} setItemsNumbers={setItemsNumbers} setSelectedPageNum={setSelectedPageNum} setMainCatFilter={setMainCatFilter} selectedFilterArr={selectedFilterArr} setSelectedFilterArr={setSelectedFilterArr} />
        </section> */}
        <section className={styles.listingCont}>
            {!isPostsEmpty && <section className={styles.pagesCont}>
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
                        <section ref={showNoOfItemsRef} className={styles.dropDown}>
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
            </section>}
            {isPostsEmpty ? <h3 className={styles.noPostText}>No Posts Found</h3> : <section className={styles.products}>
                {posts?.map((product, index) => {
                    return <TitleAndTextCard key={index} data={product} handleDownloadPopup={handleDownloadPopup} />
                })}
            </section>}
            {!isPostsEmpty && <section className={styles.pagesCont}>
                <section className={styles.showBlock} onClick={handleBottomBtn2}>
                    <section className={styles.showText}>
                        <p className={styles.show}>Show:</p>
                        <p className={styles.itemNum}>{itemsNumber}</p>
                    </section>
                    <section className={styles.downArrow}>
                        <FlameImage src={arrowSrc} alt="icon" />
                    </section>
                    {showDropdown2 && (
                        <section ref={showNoOfItemsRef} className={styles.dropDown}>
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
            </section>}
        </section>
        {shouldOpenDownloadPopup && <div className={styles.popupBackground} onClick={closePopup}>
            <div
                className={styles.popupContent}
                onClick={(e) => e.stopPropagation()}
            >
                <section className={styles.popupCont}>
                    <section className={styles.headingSec}>
                        <h3 className={styles.popupHeading}>Please Enter Your Details To Access This</h3>
                        <section className={styles.closeBtnSec}>
                            <figure className={styles.closeBtn} onClick={closePopup}>
                                <FlameImage src={offCanvasClose} alt='closeBtn' />
                            </figure>
                        </section>
                    </section>
                    <form onSubmit={handleSubmit} className={styles.form}>
                        {formFields?.map((fieldName) => (
                            <div key={fieldName} className={styles.formDiv}>
                                <section className={styles.formInput}>
                                    <input
                                        type="text"
                                        id={fieldName?.section1}
                                        name={fieldName?.section1}
                                        className={
                                            fieldName?.section1 === 'Phone Number*' ? styles.textInputPhoneNum
                                                : styles.textInput
                                        }
                                        placeholder={fieldName?.section1}
                                        onChange={(e) => handleChange(e, fieldName?.section1)}
                                        value={formData[fieldName?.section1] || ""}
                                    />
                                    {fieldName.section1 === 'Phone Number*' && <CountrySelector countryDropdown={countryDropdown} isFromResource setCountryDropdown={setCountryDropdown} isError={errors[fieldName?.section1]} countryRef={countryRef} />}
                                    <p className={errors[fieldName?.section1] ? styles.errorMsg : styles.errorMsgHide}>{errors[fieldName?.section1]}</p>
                                </section>
                            </div>
                        ))}
                        <section className={styles.cta}>
                            <FlameBtn
                                color={btnColor}
                                text={"Submit"}
                                textColor={textColor}
                                isLoadState={false}
                                btnFunction={handleButtonClick}
                            />
                        </section>
                    </form>
                </section>
            </div>
        </div>}
    </section>
}
export default ResourceHubListingWithFilter