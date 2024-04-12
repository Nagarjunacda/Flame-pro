import React, { useCallback, useState } from 'react';
import { searchUrl } from '@/utils/urls';

const Search = () => {
    const [query, setQuery] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [debounceTimer, setDebounceTimer] = useState(null);

    const fetchSuggestions = async (query) => {
        const response = await fetch(`${searchUrl}?search=${query}`);
        const data = await response.json();
        setSuggestions(data);
    };

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
        setQuery(suggestion.title.rendered);
        setSuggestions([]);
    };

    return (
        <div>
            <input
                type="text"
                value={query}
                onChange={handleInput}
                placeholder="Search..."
            />
            <ul>
                {suggestions.map((suggestion) => (
                    <li key={suggestion.id} onClick={() => handleSuggestionClick(suggestion)}>
                        {suggestion.title.rendered}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Search;
