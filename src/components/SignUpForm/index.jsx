import { use, useState } from 'react';
import CheckBoxWithText from './CheckBoxWithText';
import FlameBtn from '@/reusbleComponents/FlameBtn';
import FlameImage from '@/reusbleComponents/FlameImage';
import { renderHTML } from '@/utils/htmlString';
import styles from './signUpForm.module.css'

function SignUpForm({ isFromFooter, text, heading, formFields }) {
    const [formData, setFormData] = useState({});
    const [errors, setErrors] = useState({});
    const [areaOfInt, setAreaOfInt] = useState('Area Of Interest')
    const [isDropdownOpen, setIsDropDownOpen] = useState(false)
    const [isChecked, setIsChecked] = useState(false)
    const btnColor = 'var(--color-secondary)'
    const textColor = 'var(--color-primary)'
    const checkBoxText = 'I consent to email marketing'
    const areaOfInterests = ['Fire Fighting Ppe', 'Defence Procurement']
    const arrowImgSrc = isDropdownOpen ? '/Images/upWhiteArrow.svg' : '/Images/downWhiteArrow.svg'

    const handleChange = (e, fieldName) => {
        console.log(errors, formFields, '!!')
        const { name, value } = e.target
        if (!value) {
            setErrors({
                ...errors,
                [fieldName]: `${fieldName} is required`,
            });
            setFormData({
                ...formData,
                [fieldName]: e.target.value,
            });
            return
        }
        if (name === 'Full Name*') {
            if (!/^[a-zA-Z\s]+$/.test(value)) {
                setErrors({
                    ...errors,
                    [fieldName]: 'Please enter a valid name',
                });
            }
        }
        if (name === 'Email Address*') {
            if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(value)) {
                setErrors({
                    ...errors,
                    [fieldName]: 'Please enter valid email address',
                });
            }
        }
        errors[fieldName] = null
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        });

    }

    const handleButtonClick = () => { }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleDropdown = () => {
        setIsDropDownOpen(!isDropdownOpen)
    }

    const handleInterestSel = (area) => {
        setAreaOfInt(area)
        setIsDropDownOpen(false)
    }

    return <section className={styles.signUpCont}>
        <p className={isFromFooter ? styles.headingText : styles.headingTextBlock}>{heading}</p>
        {text && <p className={styles.text}>{renderHTML(text)}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
            {formFields?.map((fieldName) => (
                <div key={fieldName} className={styles.formDiv}>
                    <section className={styles.formInput}>
                        {fieldName?.section1 !== 'Area Of Interest*' ?
                            <input
                                type="text"
                                id={fieldName?.section1}
                                name={fieldName?.section1}
                                className={fieldName?.section1 === 'Area Of Interest*' ? styles.areaInterestInput : styles.textInput}
                                placeholder={fieldName?.section1}
                                onChange={(e) => handleChange(e, fieldName?.section1)}
                                value={formData[fieldName?.section1] || ''}
                            /> : <section className={styles.areaInterestInput} onClick={handleDropdown}>{areaOfInt}</section>}
                        {errors[fieldName?.section1] && <p className={styles.errorMsg}>{errors[fieldName?.section1]}</p>}
                        {fieldName?.section1 === 'Area Of Interest*' && <section className={styles.downArrow}>
                            <FlameImage src={arrowImgSrc} alt='arrow' />
                        </section>}
                        {fieldName?.section1 === 'Area Of Interest*' && isDropdownOpen &&
                            <section className={styles.areaOfInt}>{areaOfInterests.map((area) => {
                                return <section className={styles.interestOptions} onClick={() => { handleInterestSel(area) }}>{area}</section>
                            })}</section>}
                    </section>
                    {fieldName.section2 && <section className={styles.formInput}>
                        {fieldName?.section2 !== 'Area Of Interest*' ? <input
                            type="text"
                            id={fieldName?.section2}
                            name={fieldName?.section2}
                            className={fieldName?.section2 === 'Area Of Interest*' ? styles.areaInterestInput : styles.textInput}
                            placeholder={fieldName?.section2}
                            onChange={(e) => handleChange(e, fieldName?.section2)}
                            value={formData[fieldName?.section2] || ''}
                        /> : <section className={styles.areaInterestInput}>Area Of Interest</section>}
                        {errors[fieldName?.section2] && <p className={styles.errorMsg}>{errors[fieldName?.section2]}</p>}
                        {fieldName?.section2 === 'Area Of Interest*' && <section className={styles.downArrow}>
                            <FlameImage src={'/Images/downWhiteArrow.svg'} alt='arrow' />
                        </section>}
                    </section>}
                </div>
            ))}
        </form>
        <section className={styles.checkBoxAndText}>
            <section className={styles.checkBoxSection}><CheckBoxWithText text={checkBoxText} isChecked={isChecked} setIsChecked={setIsChecked} /></section>
        </section >
        <section className={styles.cta}><FlameBtn color={btnColor} text={'Sign Up'} textColor={textColor} isLoadState={false} btnFunction={handleButtonClick} /></section>
    </section>
}
export default SignUpForm