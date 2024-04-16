import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { searchUrl } from '@/utils/urls';
import isEmpty from 'lodash/isEmpty';
import { useMediaQuery } from 'react-responsive';
import FlameImage from '@/reusbleComponents/FlameImage';
import FlameBtn from '@/reusbleComponents/FlameBtn';
import ButtonStyleTwo from '@/reusbleComponents/ButtonStyleTwo';
import { Spinner } from 'react-bootstrap';
import styles from './search.module.css';
import { last } from 'lodash';

const Search = ({ getSearchData, handleOverlayClose, handleCloseMwebDrawer }) => {
    const router = useRouter();
    const inputRef = useRef(null);
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [debounceTimer, setDebounceTimer] = useState(null);
    const [selectedResult, setSuggestedResult] = useState({});
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    const [showNoRes, setShowNoRes] = useState(false);
    const searchIcon = '/Images/blackSearch.png';
    const isDesktop = useMediaQuery({ query: "(min-width:900px)" });
    const btnColor = 'var(--color-primary)';
    const text = 'Search';
    const textColor = 'var(--color-secondary)';
    const btnTwoColor = 'var(--color-primary)';
    const isLoadState = false;
    const btnTwoText = 'Close';
    const backArrow = "/Images/backArrow.svg";

    function extractLastPath(url) {
        const urlParts = url.split('/');
        return urlParts[urlParts.length - 2]; // Get the second last part
    }


    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    const handleSearchClick = () => {
        if (isEmpty(selectedResult)) {
            return
        }
        const res = selectedResult;
        const type = res?.subtype;
        const id = res?.id
        const url = res?.url
        const lastPath = extractLastPath(url);
        handleOverlayClose();
        if (type === 'product') {
            router.push(`/shop-all/${lastPath}/${id}`);
            return
        }
        if (type === 'post') {
            router.push(`/resource-hub/${lastPath}/${id}`);
            return
        }
        if (type === 'page') {
            const path = selectedResult?.title === 'Home' ? '/' : selectedResult?.title === 'Cart' ? '/basket' : `/${lastPath}`
            router.push(path);
            return
        }

    }

    const fetchSuggestions = async (query) => {
        setIsSearchLoading(true);
        setShowNoRes(true);
        const response = await fetch(`${searchUrl}?search=${query}`);
        const data = await response.json();
        setIsSearchLoading(false);
        getSearchData(data);
        setSuggestions(data);
    };

    const handleCloseBtn = () => {
        handleOverlayClose();
        setShowNoRes(false);
        getSearchData([]);
    }

    const debounce = (func) => {
        return function (...args) {
            if (debounceTimer) clearTimeout(debounceTimer);
            const context = this;
            const timer = setTimeout(() => {
                func.apply(context, args);
            }, 500);
            setDebounceTimer(timer);
        };
    };

    const handleInputChange = useCallback(
        (e) => {
            const newQuery = e.target.value;
            if (newQuery.length >= 3) {
                fetchSuggestions(newQuery);
            } else {
                setSuggestions([]);
            }
        },
        [fetchSuggestions]
    );

    const handleInput = (e) => {
        setQuery(e.target.value);
        debounce(handleInputChange)(e);
    };

    const handleSuggestionClick = (suggestion) => {
        console.log(suggestion, '!!')
        setSuggestedResult(suggestion)
        setQuery(suggestion.title);
        setSuggestions([]);
        setShowNoRes(false);
        getSearchData([]);
    };

    const handleMwebClick = (suggestion) => {
        setSuggestedResult(suggestion)
        const res = suggestion;
        const type = res?.subtype;
        const id = res?.id;
        const url = res?.url;
        const lastPath = extractLastPath(url);
        handleCloseMwebDrawer();
        if (type === 'product') {
            router.push(`/shop-all/${lastPath}/${id}`);
            return
        }
    }

    return (
        <div className={styles.mainCont}>
            {isDesktop ?
                <>
                    <section className={styles.innerCont}>
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={handleInput}
                            className={styles.textInput}
                            autoFocus={true}
                            placeholder="Search Lorem Ipsum..."
                        />
                        <section className={styles.ctaSection}>
                            <FlameBtn color={btnColor} text={text} textColor={textColor} isLoadState={isLoadState} btnFunction={handleSearchClick} />
                            <ButtonStyleTwo text={btnTwoText} textColor={btnTwoColor} isLoadState={false} btnFunction={handleCloseBtn} />
                        </section>
                    </section>
                    <section className={styles.suggestionList}>
                        {isSearchLoading ? <section className={styles.loadingSec}>
                            <Spinner animation="border" variant="danger" size="md" />
                            <h4 className={styles.loadingText}>Loading Search Results...</h4>
                        </section>
                            : suggestions.length === 0 && showNoRes ? <section className={styles.loadingSec}><h4 className={styles.loadingText}>No Results Found</h4></section>
                                : suggestions.map((suggestion) => (
                                    <h5 className={styles.suggestionText} key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
                                        {suggestion.title}
                                    </h5>
                                ))}
                    </section></> :
                <>
                    <section className={styles.heading}>
                        <section
                            className={styles.backButton}
                            onClick={() => handleCloseMwebDrawer("back")}
                        >
                            <section className={styles.backIcon}>
                                <FlameImage src={backArrow} alt="back" />
                            </section>
                            <p className={styles.backText}>Back</p>
                        </section>
                        <p
                            className={styles.headingText}
                        >
                            Search
                        </p>
                    </section>
                    <section className={styles.innerContMweb}>
                        <input
                            ref={inputRef}
                            type="text"
                            value={query}
                            onChange={handleInput}
                            className={styles.textInput}
                            autoFocus
                            placeholder="Search Lorem Ipsum..."
                        />
                        <section className={styles.searchIcon}><FlameImage src={searchIcon} alt={'icon'} /></section>
                        {/* <section className={styles.ctaSection}>
                        <FlameBtn color={btnColor} text={text} textColor={textColor} isLoadState={isLoadState} btnFunction={handleSearchClick} />
                        <ButtonStyleTwo text={btnTwoText} textColor={btnTwoColor} isLoadState={false} btnFunction={handleCloseBtn} />
                    </section> */}
                    </section>
                    <section className={styles.suggestionList}>
                        {isSearchLoading ? <section className={styles.loadingSec}>
                            <Spinner animation="border" variant="danger" size="md" />
                            <h4 className={styles.loadingText}>Loading Search Results...</h4>
                        </section>
                            : suggestions.length === 0 && showNoRes ? <section className={styles.loadingSec}><h4 className={styles.loadingText}>No Results Found</h4></section>
                                : suggestions.map((suggestion) => (
                                    <h5 className={styles.suggestionText} key={suggestion.id} onClick={() => handleMwebClick(suggestion)}>
                                        {suggestion.title}
                                    </h5>
                                ))}
                    </section></>}
        </div>
    );
};

export default Search;
