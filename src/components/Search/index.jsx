import React, { useCallback, useState } from 'react';
import { searchUrl } from '@/utils/urls';
import FlameBtn from '@/reusbleComponents/FlameBtn';
import ButtonStyleTwo from '@/reusbleComponents/ButtonStyleTwo';
import styles from './search.module.css';

const Search = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [debounceTimer, setDebounceTimer] = useState(null);
    const [selectedResult, setSuggestedResult] = useState({});
    const btnColor = 'var(--color-primary)';
    const text = 'Search';
    const textColor = 'var(--color-secondary)';
    const btnTwoColor = 'var(--color-primary)';
    const isLoadState = false;
    const btnTwoText = 'Close';

    const handleSearchClick = () => {
        // console.log(selectedResult, '!!')
    }

    const fetchSuggestions = async (query) => {
        const response = await fetch(`${searchUrl}?search=${query}`);
        const data = await response.json();
        setSuggestions(data);
    };

    const handleCloseBtn = () => { }

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
        setSuggestedResult(suggestion)
        setQuery(suggestion.title);
        setSuggestions([]);
    };

    return (
        <div className={styles.mainCont}>
            <section className={styles.innerCont}>
                <input
                    type="text"
                    value={query}
                    onChange={handleInput}
                    className={styles.textInput}
                    placeholder="Search..."
                />
                <section className={styles.ctaSection}>
                    <FlameBtn color={btnColor} text={text} textColor={textColor} isLoadState={isLoadState} btnFunction={handleSearchClick} />
                    <ButtonStyleTwo text={btnTwoText} textColor={btnTwoColor} isLoadState={false} btnFunction={handleCloseBtn} />
                </section>
            </section>
            <section className={styles.suggestionList}>
                {suggestions.map((suggestion) => (
                    <h5 className={styles.suggestionText} key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion.title}
                    </h5>
                ))}
            </section>
        </div>
    );
};

export default Search;
