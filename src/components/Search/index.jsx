import React, { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { searchUrl } from '@/utils/urls';
import FlameBtn from '@/reusbleComponents/FlameBtn';
import ButtonStyleTwo from '@/reusbleComponents/ButtonStyleTwo';
import { Spinner } from 'react-bootstrap';
import styles from './search.module.css';

const Search = ({ getSearchData, handleOverlayClose }) => {
    const router = useRouter();
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [debounceTimer, setDebounceTimer] = useState(null);
    const [selectedResult, setSuggestedResult] = useState({});
    const [isSearchLoading, setIsSearchLoading] = useState(false);
    const [showNoRes, setShowNoRes] = useState(false)
    const btnColor = 'var(--color-primary)';
    const text = 'Search';
    const textColor = 'var(--color-secondary)';
    const btnTwoColor = 'var(--color-primary)';
    const isLoadState = false;
    const btnTwoText = 'Close';

    function extractLastPath(url) {
        const urlParts = url.split('/');
        return urlParts[urlParts.length - 2]; // Get the second last part
    }

    const handleSearchClick = () => {
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

    return (
        <div className={styles.mainCont}>
            <section className={styles.innerCont}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInput}
                    className={styles.textInput}
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
            </section>
        </div>
    );
};

export default Search;
