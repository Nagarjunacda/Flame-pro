import { useState } from 'react';
import CheckBoxWithText from './CheckBoxWithText';
import { renderHTML } from '@/utils/htmlString';
import FlameBtn from '@/reusbleComponents/FlameBtn';
import styles from './signUpForm.module.css'

function SignUpForm({ isFromFooter, text }) {
    const [formData, setFormData] = useState({});
    const btnColor = 'var(--color-secondary)'
    const textColor = 'var(--color-primary)'

    const handleChange = (e, fieldName) => {
        setFormData({
            ...formData,
            [fieldName]: e.target.value,
        });
    };

    const handleButtonClick = () => { }

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const data = ['Full Name', 'Email Address', 'Area Of Interest']

    return <section className={styles.signUpCont}>
        <p className={isFromFooter ? styles.headingText : styles.headingTextBlock}>Sign Up To Our Mailing</p>
        {text && <p className={styles.text}>{renderHTML(text)}</p>}
        <form onSubmit={handleSubmit} className={styles.form}>
            {data.map((fieldName) => (
                <div key={fieldName} className={styles.formDiv}>
                    <input
                        type="text"
                        id={fieldName}
                        name={fieldName}
                        className={styles.textInput}
                        placeholder={fieldName}
                        onChange={(e) => handleChange(e, fieldName)}
                        value={formData[fieldName] || ''}
                    />
                </div>
            ))}
        </form>
        <section className={styles.checkBoxAndText}>
            <section className={styles.checkBoxSection}><CheckBoxWithText text={'I consent to email marketing'} /></section>
        </section >
        <section className={styles.cta}><FlameBtn color={btnColor} text={'Sign Up'} textColor={textColor} isLoadState={false} btnFunction={handleButtonClick} /></section>
    </section>
}
export default SignUpForm