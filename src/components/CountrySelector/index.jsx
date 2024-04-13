import FlameImage from '@/reusbleComponents/FlameImage';
import React, { useEffect, useState } from 'react';
import styles from './reactFlags.module.css'
import Select from 'react-select';

function CountrySelector() {
    const [countryOptions, setCountryOptions] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [isDropdownOpen, setIsDropDownOpen] = useState(false);
    const downArrSrc = '/Images/flagArrow.svg';

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(response => response.json())
            .then(data => {
                const options = data.map(country => ({
                    idd: country.idd,
                    flags: country.flags,
                    value: country.cca2,
                    label: (
                        <span style={{ marginRight: '8px' }}>{country?.name?.common}</span>
                    ),
                }));
                setCountryOptions(options);
                setSelectedCountry(options.find(option => {
                    return option.value === 'GB'
                })); // Set India as the initial selection
            })
            .catch(error => {
                console.error('Error fetching country data:', error);
            });
    }, []);

    const handleCountrySel = () => {
        setIsDropDownOpen(!isDropdownOpen)
    }

    return (
        <section className={styles.maincont} onClick={handleCountrySel}>
            <section className={styles.flagIcon}>
                <FlameImage src={selectedCountry?.flags.svg} alt={'icon'} />
            </section>

            <section className={styles.downArr}>
                <FlameImage src={downArrSrc} alt={'icon'} />
            </section>
            <section className={styles.codeBlock}><h5 className={styles.codeText}>{`${selectedCountry?.idd?.root}${selectedCountry?.idd?.suffixes[0]}`}</h5></section>
        </section>
    );
}
export default CountrySelector;
